import {
  create,
  show,
  destroy,
  update,
  showById
} from './postController.js'

export default {
  create: create,
  list: show,
  update: update,
  delete: destroy,
  getById: showById
}