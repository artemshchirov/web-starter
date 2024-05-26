import axios from 'axios'

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts'

export const client = axios.create({
  baseURL: BASE_URL,
})

export interface ResponseAPI {
  userId: number
  id: number
  title: string
  body: string
}
