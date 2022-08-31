import React from 'react'
import styles from './TodoList.module.css'
import { useSelector } from 'react-redux'
import { selectAll } from './todolistSlice'

const TodoList = () => {

  const todolist = useSelector(selectAll)

  return (
    <div>
      <h1 className={styles.title}>To Do</h1>
      <ul>
        {todolist.map(todo => {
          return (
            <li key={todo.key}>
              <h3>{todo.title}</h3>
              <p>{todo.content}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default TodoList