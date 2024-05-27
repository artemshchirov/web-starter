import { AxiosError } from 'axios'
import { client, ResponseAPI } from './client'

const getPosts = async (): Promise<ResponseAPI[]> => {
  try {
    const { data } = await client.get('?_limit=2')

    return data
  } catch (error) {
    const err = error as AxiosError
    console.log(err.message)
    console.log(err.name)

    return []
  }
}
export default getPosts
