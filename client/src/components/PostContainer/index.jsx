import React, { useEffect } from 'react'
import { GET_POSTS } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import PostCard from '../PostCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts} from '../../redux/postSlice';

function PostContainer() {
  const {posts,status,err} = useSelector((store) => {return store.posts});
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchPosts());
  },[])
  // const {loading,data,error} = useQuery(GET_POSTS)
  

  // if(loading) return <p>Loading...</p>
  // if(error) return <p>{`Error: ${error}`}</p>

  // const {posts} = data;
  console.log(posts)


  if(status === 'loading') <div className="loading">
    <h1>
      Loading...
    </h1>
  </div>

  if(status === 'failed') <div className='failed'>
    <h1>
      {`Error: ${err}`}
    </h1>
  </div>

  return <>
    <div className="post-container">
      {/* post form if logged in */}
      {
        posts.map(post => <PostCard key={post._id} {...post}/>)
      }
    </div>
  </>
}

export default PostContainer