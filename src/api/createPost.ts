import { AxiosError } from 'axios'
import { client, ResponseAPI } from './client'

const createPost = async (title: string, body: string, userId: number): Promise<ResponseAPI> => {
  try {
    const { data } = await client.post('', { title, body, userId })

    return data
  } catch (error) {
    const err = error as AxiosError
    console.log(err.message)
    console.log(err.name)

    return { id: 0, title: '', body: '', userId: 0 }
  }
}

export default createPost
