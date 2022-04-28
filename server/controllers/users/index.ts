import express from 'express';
import bcrypt from 'bcrypt';
import _ from 'lodash';
import { MongoClient } from 'mongodb';

const router = express.Router();

// Start MongoDB connection
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);
let db = null;
async function run() {
    await client.connect();
    db = client.db('we-werk');
}
run().catch(console.log);
// End MongoDB connection

router.get('/', (req: any, res: any) => {
    const cursor = db.collection('users').find();

    cursor.toArray().then((result: any) => {
        res.json(result);
    });
});

router.post('/', (req: any, res: any) => {
    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync()),
        skills: _.sortedUniq(req.body.skills),
    };

    db.collection('users')
        .insertOne(user)
        .then((result: any) => {
            console.log(result);
            res.json({ status: 'New user added to database' });
        });
});

router.post('/admin', (req: any, res: any) => {
    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync()),
        company: req.body.companyName,
        admin: req.body.admin,
    };

    db.collection('users')
        .insertOne(user)
        .then((result: any) => {
            console.log(result);
            res.json({ status: 'New user added to database' });
        });
});

export default router;
