import express from 'express';
import { config } from 'dotenv';
import { Configuration, OpenAIApi } from "openai";


config();
const app = express();
const configuration = new Configuration({
  organization: "org-d6B7dyUyUbQcyjX82tQPcAAd",
  apiKey: process.env.OPENAI_API_KEY,
});

app.listen(80);