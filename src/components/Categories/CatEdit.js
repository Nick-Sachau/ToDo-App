import React from 'react'
import { Modal } from 'react-bootstrap'
import { CatForm } from './CatForm'


export const CatEdit = ({ showEdit, setShowEdit, category, getCategories }) => {
  return (
    <Modal
    show={showEdit}
    onHide={() => setShowEdit(false)}
    size='lg'>
      <Modal.Header>
        <h2>Editing {category.catName}</h2>
      </Modal.Header>
      <Modal.Body>
        <CatForm 
        getCategories={getCategories}
        setShowEdit={setShowEdit}
        category={category}
        />
      </Modal.Body>
    </Modal>
  )
}
