import express  from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import PostController  from './api/post/controller/index.js'

dotenv.config()
const app = express()

const PORT = process.env.PORT || 7000
const MONGODB_URI = process.env.URL

app.use(express.json())

app.get('/api/posts', PostController.list)
app.get('/api/posts/:id', PostController.getById)
app.post('/api/posts', PostController.create)
app.put('/api/posts/:id', PostController.update)
app.delete('/api/posts/:id', PostController.delete)

const startServer = async () => {
  try {
    await mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB: Connection (successful)');
    app.listen(PORT, () => console.log(`Huning on port ${PORT}`))
  } catch (error) {
    console.error(`MongoDB Connection error: ${error}`);
  }
};

startServer();

  