import React from 'react'
import { StyledTodo } from './styles/Todoapp.styled'
import Title from './Title'
import TodoCategory from './TodoCategory'


function TodoApp() {
  return (
    <>
      <StyledTodo>
        <Title />
        <TodoCategory />
      </StyledTodo>
    </>
  )
}

export default TodoApp
