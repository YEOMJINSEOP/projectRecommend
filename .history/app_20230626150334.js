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

app.get('/recommend/web', async (req, res) => {
  try {
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'system', content: 'WEB 프로젝트 구체적인 주제 3개 추천해주세요.' }],
      temperature: 0.5,
      max_tokens: 100,
    });

    console.log(response.data.choices[0].message.content);
    res.send(response.data.choices[0].message);
  } catch (error) {
    console.log(error);
    res.send('Something went wrong.');
  }
});

app.get('/recommend/mobile', async (req, res) => {
  try {
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'system', content: 'Mobile APP 프로젝트 구체적인 주제 3개 추천해주세요.' }],
      temperature: 0.5,
      max_tokens: 100,
    });

    console.log(response.data.choices[0].message.content);
    res.send(response.data.choices[0].message);
  } catch (error) {
    console.log(error);
    res.send('Something went wrong.');
  }
});

app.get('/recommend/ai', async (req, res) => {
  try {
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'system', content: 'AI 프로젝트 구체적인 주제 3개 추천해주세요.' }],
      temperature: 0.5,
      max_tokens: 100,
    });

    console.log(response.data.choices[0].message.content);
    res.send(response.data.choices[0].message);
  } catch (error) {
    console.log(error);
    res.send('Something went wrong.');
  }
});

app.get('/recommend/bigdata', async (req, res) => {
  try {
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'system', content: 'Big Data 프로젝트 구체적인 주제 3개 추천해주세요.' }],
      temperature: 0.5,
      max_tokens: 100,
    });

    console.log(response.data.choices[0].message.content);
    res.send(response.data.choices[0].message);
  } catch (error) {
    console.log(error);
    res.send('Something went wrong.');
  }
});


app.listen(81);