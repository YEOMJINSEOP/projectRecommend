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

app.get('/recommend', async (req, res) => {
  try {
    const category = req.query.category;
    const prompt = `${category} 프로젝트 구체적인 주제 3개 추천해주세요.`;

    const response = await openai.createCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'system', content: prompt }],
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