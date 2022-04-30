import express, { response } from 'express';
import bcrypt from 'bcrypt';
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

router.get('/', (req, res) => {
    const email = req.session.email;
    db.collection('users')
        .findOne({ email: `${email}` })
        .then((user: any) => {
            res.json(user);
        });
});

router.post('/', (req, res) => {
    const email = req.body.email;
    const pw = req.body.password;

    db.collection('users')
        .findOne({ email: `${email}` })
        .then((user: any) => {
            const valid = user && bcrypt.compareSync(pw, user.password);
            if (user.email === null) {
                return res.json({ message: "User doesn't exist" });
            }
            if (user.email === email && valid === true) {
                req.session.email = email;
                res.json(user);
            } else {
                res.json({ status: 'Incorrect details' });
            }
        });
});

router.get('/destroy', (req, res) => {
    req.session.destroy(() => {});
    res.clearCookie('connect.sid'); // clean up!
    res.json({ message: 'logging you out' });
});

export default router;
