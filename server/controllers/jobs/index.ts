import express from 'express';
import _, { first } from 'lodash';
import { MongoClient } from 'mongodb';
import { ObjectId } from 'mongodb';

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
    const cursor = db.collection('jobs').find();

    cursor.toArray().then((result: any) => {
        res.json(result);
    });
});

router.get('/:id', (req: any, res: any) => {
    let id = req.params.id;
    db.collection('jobs')
        .findOne({ _id: new ObjectId(id) })
        .then((job: any) => {
            res.json(job);
        });
});

router.patch('/:id', (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;

    let id = req.params.id;
    db.collection('jobs')
        .updateOne({ _id: new ObjectId(id) }, { $push: { shortlist: { name: `${firstName}`, last: `${lastName}`, email: `${email}` } } })
        .then((result: any) => {
            res.json(result);
        });
});

router.post('/', (req: any, res: any) => {
    const job = {
        company: req.body.companyName,
        title: req.body.title,
        rate: req.body.rate,
        description: req.body.description,
        shortDesc: req.body.shortDesc,
        posterID: req.body.posterID,
        skills: _.sortedUniq(req.body.skills),
        shortlist: [],
    };

    db.collection('jobs')
        .insertOne(job)
        .then((result: any) => {
            console.log(result);
            res.json({ status: 'New user added to database' });
        });
});

export default router;
