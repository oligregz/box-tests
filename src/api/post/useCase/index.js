import {
  createPost,
  destroyPost,
  showPosts,
  updatePost,
  showPost
} from './postUseCase.js'

export default {
  create: createPost,
  delete: destroyPost,
  list: showPosts,
  update: updatePost,
  getById: showPost
}