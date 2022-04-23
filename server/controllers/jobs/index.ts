import express from 'express';
import { MongoClient } from 'mongodb';
import { ObjectId } from 'mongodb';

const router = express.Router();

// Start MongoDB connection
const uri = 'mongodb://127.0.0.1:27017';
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

router.post('/', (req: any, res: any) => {
    const job = {
        company: req.body.companyName,
        title: req.body.title,
        rate: req.body.rate,
        description: req.body.description,
        shortDesc: req.body.shortDesc,
        skills: req.body.skills,
    };

    db.collection('jobs')
        .insertOne(job)
        .then((result: any) => {
            console.log(result);
            res.json({ status: 'New user added to database' });
        });
});

export default router;
