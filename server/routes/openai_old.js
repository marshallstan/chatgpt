import express from 'express'
import axios from 'axios'
import dotenv from 'dotenv'
import { openai } from '../index.js'

dotenv.config()
const router = express.Router()

const axiosConfig = process.env.NODE_ENV === 'production'
  ? undefined
  : {
    proxy: {
      host: '127.0.0.1',
      port: 7890
    }
  }

router.post('/text', async (req, res) => {
  try {
    const { text, activeChatId } = req.body

    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: text,
      temperature: 0.5,
      max_tokens: 2048,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0
    }, axiosConfig)

    await axios.post(
      `https://api.chatengine.io/chats/${activeChatId}/messages/`,
      { text: response.data.choices[0].text },
      {
        headers: {
          'Project-ID': process.env.PROJECT_ID,
          'User-Name': process.env.BOT_USER_NAME,
          'User-Secret': process.env.BOT_USER_SECRET
        }
      }
    )

    res.status(200).json({ text: response.data.choices[0].text })
  } catch (error) {
    console.error('error', error.message)
    res.status(500).json({ error: error.message })
  }
})

router.post('/code', async (req, res) => {
  try {
    const { text, activeChatId } = req.body

    const response = await openai.createCompletion({
      model: 'code-davinci-002',
      prompt: text,
      temperature: 0.5,
      max_tokens: 2048,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0
    }, axiosConfig)

    await axios.post(
      `https://api.chatengine.io/chats/${activeChatId}/messages/`,
      { text: response.data.choices[0].text },
      {
        headers: {
          'Project-ID': process.env.PROJECT_ID,
          'User-Name': process.env.BOT_USER_NAME,
          'User-Secret': process.env.BOT_USER_SECRET
        }
      }
    )

    res.status(200).json({ text: response.data.choices[0].text })
  } catch (error) {
    console.error('error', error.message)
    res.status(500).json({ error: error.message })
  }
})

router.post('/assist', async (req, res) => {
  try {
    const { text } = req.body

    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `Finish my thought: ${text}`,
      temperature: 0.5,
      max_tokens: 1024,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0
    }, axiosConfig)

    res.status(200).json({ text: response.data.choices[0].text })
  } catch (error) {
    console.error('error', error.message)
    res.status(500).json({ error: error.message })
  }
})

export default router
