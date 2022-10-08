import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from './features/post/postSlice'

const App = () => {
  const dispatch = useDispatch();
  const {posts, loading} = useSelector((state) => state.post)

 useEffect(() =>{
  dispatch(getPosts())
 }, [dispatch])
 
 if (loading) {
  return (
    <h1>E dey load!</h1>
  )
 }
  return (
    <div>
      {posts.map((item) => {
        return(
          <div>
         <h1>{item.title}</h1>,
         <h1>{item.id}</h1>
         </div>
        )
        
      })}
    </div>
  )
}

export default App