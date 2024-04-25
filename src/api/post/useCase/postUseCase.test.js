import { showPosts } from './postUseCase.js'
import Post from '../model/Post.js'

jest.mock('../model/Post.js', () => ({
  find: jest.fn(),
}))

describe('Entity: Posts | Layer: UseCase', () => { 
  test('1 - List posts', async () => {
    const mockPosts = [
      {
        _id: '6617f61a85474ac2594c277d',
        title: 'Para tests',
        description: 'Testando retorno',
        createdAt: '2024-04-11T14:39:22.960Z',
        updatedAt: '2024-04-11T14:39:22.960Z',
        __v: 0
      },
      {
        _id: '6617f67174f6a60165181dca',
        title: 'Segundo teste(1)',
        description: 'Testando atualização',
        createdAt: '2024-04-11T14:40:49.340Z',
        updatedAt: '2024-04-11T17:28:56.323Z',
        __v: 0
      }
    ]

    // Configurando o mock do método `find` para retornar os posts simulados
    Post.find.mockResolvedValue(mockPosts)

    // Chama a função showPosts
    const result = await showPosts()
    console.log(result)

    // Verifica se a função do modelo Post foi chamada corretamente
    expect(Post.find).toHaveBeenCalledTimes(1)
    expect(Post.find).toHaveBeenCalledWith({})

    // Verifica se o resultado da função showPosts é o esperado
    expect(result).toEqual({ posts: mockPosts })

    // Validação de chave
    expect(result.posts[0].title).toBe(mockPosts[0].title)
  })
})