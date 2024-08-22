"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 8000;
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.listen(8000, () => {
    console.log(`Server is running on port ${port}`);
});
app.get("/api/minigames", (req, res) => {
    const minigames = require('../minigames.json');
    res.json(minigames);
});
