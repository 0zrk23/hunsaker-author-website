import React from 'react'
import { GET_POSTS } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import PostCard from '../PostCard';

function PostContainer() {
  const {loading,data,error} = useQuery(GET_POSTS)

  if(loading) return <p>Loading...</p>
  if(error) return <p>{`Error: ${error}`}</p>

  const {posts} = data;

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