import { useState } from 'react'
import { ResponseAPI } from '../../api/client'
import createPost from '../../api/createPost'

const CreatePost = () => {
  const [posts, setPosts] = useState<ResponseAPI[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = async () => {
    setIsLoading(true)
    try {
      const newPost = await createPost('Post', 'Something about post', Date.now())
      setPosts(prev => [newPost, ...prev])
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <button className='btn btn-primary' onClick={handleClick} disabled={isLoading}>
        Add Post
      </button>
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

export default CreatePost
