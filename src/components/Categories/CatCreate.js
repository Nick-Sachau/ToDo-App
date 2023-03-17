import React from 'react'
import { CatForm } from './CatForm'

export const CatCreate = ({ setShowCreate, getCategories, categories }) => {
  return (
    <article className='createToDo m-2 text-white justify-content-center'>
      <CatForm setShowCreate={setShowCreate} getCategories={getCategories}/>
    </article>
  )
}
