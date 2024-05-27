import { client } from './client'

const deletePost = async (id: number): Promise<boolean> => {
  const { status } = await client.delete(`${id}`)
  return status === 200
}

export default deletePost
