import React from 'react'
import { useState } from 'react'
import { nanoid } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { addPost } from './todolistSlice'

const AddTodo = () => {

  const dispatch = useDispatch()

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const addTodo = (event) => {
    event.preventDefault()
    if (title && content) {
      const todo = { title: title, content: content, key: nanoid() }
      dispatch(addPost(todo))
    }
  }

  return (
    <form onSubmit={addTodo}>
      <input type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea placeholder='description' value={content} onChange={(e) => setContent(e.target.value)} />
      <input type='submit' value="Submit"></input>
    </form>
  )
}

export default AddTodo