import express from 'express';
import cors from 'cors';

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.send({
        message: "YeetMeister"
    });
});

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 5000;
const HOST = process.env.HOST || 'localhost';

app.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});
