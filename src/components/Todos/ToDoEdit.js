import React from 'react'
import { Modal } from 'react-bootstrap'
import { ToDoForm } from './ToDoForm'

export const ToDoEdit = ({ setShowEdit, showEdit, toDo, getToDos }) => {
  return (
    <Modal
    show={showEdit}
    onHide={() => setShowEdit(false)}>
      <Modal.Header>
        <h3>Editing {toDo.Name}</h3>
      </Modal.Header>
      <Modal.Body>
        <ToDoForm 
        getToDos={getToDos}
        setShowEdit={setShowEdit}
        toDo={toDo}/>
      </Modal.Body>
    </Modal>
  )
}
