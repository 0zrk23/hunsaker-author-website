import React from 'react'
import { GET_POSTS } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import PostCard from '../PostCard';
import PostForm from '../PostForm';
import { useSelector } from 'react-redux';

function PostContainer() {
  const {loggedIn} = useSelector((state) => state.login)
  const {loading, error, data} = useQuery(GET_POSTS);

  if(loading) return <p>Loading...</p>
  if(error) return <p>{`Error: ${error}`}</p>

  const {posts} = data;

  return <>
    <div className="post-container">
      {
        loggedIn && <PostForm />
      }
      {
        posts.map(post => <PostCard key={post._id} {...post}/>)
      }
    </div>
  </>
}

export default PostContainer