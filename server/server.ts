if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

// App requirements
import express from 'express';
import path from 'path';
import cors from 'cors';
import session from 'express-session';
import { MongoClient } from 'mongodb';

const PORT = process.env.PORT || (process.env.NODE_ENV === 'production' && 3000) || 3001;
const app = express();

// app.set('trust proxy', 1);
app.use(express.json());

// Controller imports
import usersController from './controllers/users/index';
import sessionsController from './controllers/sessions/index';
import jobsController from './controllers/jobs/index';

app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true,
        optionsSuccessStatus: 200,
    })
);

// Sessions info
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            secure: false,
        },
    })
);

declare module 'express-session' {
    interface Session {
        email: string;
    }
}
// End Sessions info

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

// Use Controllers
app.use('/api/users', usersController);
app.use('/api/session', sessionsController);
app.use('/api/jobs', jobsController);
// End Use controllers

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
    });
}

app.listen(+PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
