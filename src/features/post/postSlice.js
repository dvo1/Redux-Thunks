import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async () => {
        const res = await fetch ('https://jsonplaceholder.typicode.com/posts');
        const formattedResponse = await res.json();
        return formattedResponse;


    }
)

// export const getPosts = createAsyncThunk(
//     'posts/getPosts',
//     async () => {
//        return fetch ('https://jsonplaceholder.typicode.com/posts').then((res) => res.json()
       
//        );


//     }
// )

const initialState = {
  posts : [],
  isLoading : false,
}

export const postSlice = createSlice({
  name: 'post',
  initialState,
  extraReducers: {
    [getPosts.pending] : (state, action) => {
        state.isLoading = true;
    },
    [getPosts.fulfilled] : (state, action) => {
        state.posts = action.payload;
        state.isLoading = false;
    },
    [getPosts.rejected] : (state, action) => {
        state.isLoading = false;
    },
  },
})


// export const { increment, decrement, incrementByAmount } = postSlice.actions

export default postSlice.reducer;