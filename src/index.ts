import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.send({
        message: "YeetMeister"
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});