import express from 'express';
import { MongoClient } from 'mongodb';

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

export default router;
