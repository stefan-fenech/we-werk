if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

import express, { Request, Response } from "express";
import path from "path";
import cors from 'cors'
import { MongoClient } from 'mongodb';
import { updateShorthandPropertyAssignment } from "typescript";

const PORT = process.env.PORT || (process.env.NODE_ENV === "production" && 3000) || 3001;
const app = express();

app.set("trust proxy", 1);
app.use(express.json());
app.use(cors());

// Start MongoDB connection
const uri = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(uri);
let db = null;
async function run() {
    await client.connect();
    db = client.db('we-werk');
    console.log('MongoDB connected successfully to server');
}
run().catch(console.log);
// End MongoDB connection


app.get("/api/users", (req: Request<any, any, any, any>, res: Response<any>) => {
    const cursor = db.collection('users').find();

    cursor.toArray().then((result: any) => {
        res.json(result);
    });
});

app.post('/api/users', (req, res) => {
    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        skills: req.body.skills,
    };

    db.collection('users')
        .insertOne(user)
        .then((result: any) => {
            console.log(result);
            res.json({ status: 'New user added to database' });
        });
});


if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "..", "client", "build")));

    app.get("/*", (req, res) => {
        res.sendFile(
            path.join(__dirname, "..", "client", "build", "index.html")
        );
    });
}

app.listen(+PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});