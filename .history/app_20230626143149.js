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

app.get('/', async (req, res) => {
  try {
    const response = await openai.createChatCompletion({
      model: 'text-davinci-003',
      messages: [{ role: 'system', content: 'You are a helpful assistant.' }],
    });

    console.log(response.data.choices[0].message.content);
    res.send(response.data.choices[0].message.content);
  } catch (error) {
    console.log(error);
    res.send('Something went wrong.');
  }
});


app.listen(80);