import PostUseCase from '../useCase/index.js'

export const create = async ({ body }, res) => {
  try {
    const created = await PostUseCase.create(body)
    res.status(201).json(created)
  } catch (e) {
    console.error(e)
  }
}

export const show = async (req, res) => {
  try {
    const posts = await PostUseCase.list()
    res.status(200).json(posts)
  } catch (e) {
    console.error(e)
  }
}

export const showById = async ({ params }, res) => {
  try {
    const post = await PostUseCase.getById(params.id)
    res.status(200).json(post)
  } catch (e) {
    console.error(e)
  }
}

export const update = async ({ body, params }, res) => {
  try {
    const updated = await PostUseCase.update(body, params.id, res)
    res.status(200).json(updated)
  } catch (e) {
    console.error(e)
  }
}

export const destroy = async (req, res) => {
  try {
    res.status(200).json({ message: `Deleted` })
  } catch (e) {
    console.error(e)
  }
}
