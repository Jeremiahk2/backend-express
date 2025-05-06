import express from 'express';
import cors from 'cors';
import {dbClient} from "./db";


require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.options("*", cors());

// Basic route
app.get('/api', async (req, res) => {
    await dbClient.connect().then(() => console.log('Connected to PostgreSQL'))
        .catch((err) => console.error('PostgreSQL connection error:', err));
    try {
        const result = await dbClient.query(
            'SELECT email FROM users WHERE username = $1',
            ['TestUser']
        );

        if (result.rows.length === 0) {
            res.status(404).json({ message: 'User not found' });
        }

        res.json({ email: result.rows[0].email });
    } catch (err) {
        console.error('Query error:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

//Home page
app.get('/', (req, res) => {
    res.send({
        message: "Home page"
    });
});

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 5000;
const HOST = process.env.HOST || 'localhost';

app.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});
