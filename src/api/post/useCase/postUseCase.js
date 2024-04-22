import Post from "../model/Post.js"

export const createPost = async (body)  => {
  try {
    const createdPost = await Post.create(body)
    return { createdPost }
  } catch (e) {
    console.error(e)
  }
}

export const showPosts = async ()  => {
  try {
    const posts = await Post.find({})
    return { posts }
  } catch (e) {
    console.error(e)
  }
}

export const showPost = async (id)  => {
  try {
    const post = await Post.findById(id)
    return { post }
  } catch (e) {
    console.error(e)
  }
}

export const updatePost = async ({ title, description }, id, res)  => {
  try {
    let post = await Post.findById(id)

    if (post === null) {
      const error = new Error(`Post not found!`);
      error.status = 404
      throw error
    }

    post.title = title
    post.description = description
    post.save()

    return post
  } catch (error) {
    if (error.status === 404) {
      res.status(404).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export const destroyPost = async ()  => {
  try {
    console.log()
    // const deletedPost = await Post.deleteOne({req.id})
    // return { deleted: deletedPost || `Post deleted`}
  } catch (e) {
    console.error(e)
  }
}