import mongoose, { Schema } from 'mongoose'

const PostSchema = new Schema({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true
  }
)

const Post = mongoose.model('Posts', PostSchema)

export default Post