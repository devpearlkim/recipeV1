import express from 'express'
import { generateUploadURL } from './s3.js'
import cors from 'cors'

const app = express()

app.use(express.static('front'))
app.use(cors())

app.get('/s3Url', async (req, res) => {
  try {
    const url = await generateUploadURL()
    res.json({ url })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.listen(8080, () => console.log('listening on port 8080'))
