import express from 'express';
import 'dotenv';

const app = express();
console.log(process.env.OPENAI_API_KEY);

app.listen(80);