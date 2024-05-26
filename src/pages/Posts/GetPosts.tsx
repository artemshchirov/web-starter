import { useEffect, useState } from 'react'
import { ResponseAPI } from '../../api/client'
import getPosts from '../../api/getPosts'

const GetPost = () => {
  const [posts, setPosts] = useState<ResponseAPI[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchPosts() {
      setIsLoading(true)
      try {
        const result = await getPosts()
        setPosts(result)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (isLoading) {
    console.log('Loading...')
  }

  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
        {posts.map(post => (
          <div
            key={post.id}
            className='bg-[#2f2f2f] rounded-lg shadow-md p-4 hover:bg-white/10 transition-colors duration-200'
          >
            <h2 className='text-md font-semibold mb-1'>
              <span className='text-violet-300'> Title:</span>{' '}
              <span className='font-normal text-white-900'>{post.title}</span>
            </h2>
            <p className='text-sm mb-1'>
              <span className='text-violet-300'>User:</span>{' '}
              <span className='font-normal text-white-700'>{post.userId}</span>
            </p>
            <p className='text-sm'>
              <span className='text-violet-300'>Body:</span>{' '}
              <span className='font-normal text-white-700'>{post.body}</span>
            </p>
          </div>
        ))}
      </div>
    </>
  )
}

export default GetPost
