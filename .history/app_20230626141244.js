import express from 'express';
import { config } from 'dotenv';

config();
const app = express();
console.log(process.env.OPENAI_API_KEY);

app.listen(80);