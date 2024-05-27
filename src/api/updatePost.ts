import { client, ResponseAPI } from './client'

interface Props {
  id: number
  userId: number
  body: string
  title: string
}

const updatePost = async ({ id, body, title, userId }: Props): Promise<ResponseAPI> => {
  const { data } = await client.put(`${id}`, { body, title, userId })

  return data
}

export default updatePost
