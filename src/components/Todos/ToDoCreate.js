import React from 'react'
import { ToDoForm } from './ToDoForm'

export const ToDoCreate = ({setShowCreate, getToDos}) => {
  return (
    <article className='createToDo m-2 text-white justify-content-center'>
      <ToDoForm setShowCreate={setShowCreate} getToDos={getToDos}/>
    </article>
  )
}
