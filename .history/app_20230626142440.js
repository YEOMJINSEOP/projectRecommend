import express from 'express';
import { config } from 'dotenv';
import { Configuration, OpenAIApi } from "openai";


config();
const app = express();
const configuration = new Configuration({
  organization: process.env.OPENAI_ORGANIZATION,
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const response = openai.createChatCompletion({
  model: "text-davinci-003",
  messages: [{role: "user", content: "this is a test"}],
});

console.log(response);


app.listen(80);