import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Minigame } from './minigame.model';

const app = express();
const port = 8000;

app.use(cors());
app.use(bodyParser.json());

app.listen(8000, () => {
    console.log(`Server is running on port ${port}`);
})

app.get("/api/minigames", (req, res) => {
    const minigames: Minigame[] = require('../minigames.json');
    res.json(minigames);
});