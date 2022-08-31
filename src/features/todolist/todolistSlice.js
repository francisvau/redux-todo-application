import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { title: 'todo 1', content: 'this is the first todo' },
  { title: 'todo 2', content: 'this is the second todo' }
]

const todolistSlice = createSlice({
  name: 'todolist',
  initialState: {
    value: initialState
  },
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload)
    }
  }
})

export const { addPost } = todolistSlice.actions

export default todolistSlice.reducer
