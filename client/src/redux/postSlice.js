// import { useQuery } from "@apollo/client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GET_POSTS } from "../utils/queries";
import { queryServer } from "../utils/helpers";

const initialState = {
  posts: [],
  status: 'loading',
  postFormState: {
    title: '',
    body: '',
  }
}

export const fetchPosts = createAsyncThunk('post/getPostData', async ()=>{
  try {
    const response = await queryServer(GET_POSTS);
    return response.data
  } catch (err) {
    console.log(err.message);
  }
})

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postFormReducer: {
      
    }
  },
  extraReducers(builder){
    builder
      .addCase(fetchPosts.pending,(state,action) => {
        state.status = 'loading'
      })
      .addCase(fetchPosts.fulfilled,(state,actions) => {
        state.status = 'succeeded'
        const data = actions.payload.posts
        state.posts = data;
      })
      .addCase(fetchPosts.rejected,(state,action) =>{
        state.status = 'failed'
      })
  }
})

export const postReducer = postSlice.reducer;