import React, { useState } from 'react'
import axios from 'axios'
import { ToDoEdit } from './ToDoEdit';

export const SingleToDo = ({ toDo, getToDos, currentUser }) => {
  const [showEdit, setShowEdit] = useState(false);

  const deleteToDo = (id) => {
    console.log(id);
    if(window.confirm(`Are you sure you want to delete ${toDo.name}`)) {
      axios.delete(`http://todoapi.nickthedev.net/api/todos/${id}`).then(() => getToDos())
    }
  }
  
  return (
    <tr style={toDo.done ? {"--bs-table-bg": "#56ea00", "color": "#000"} : {}}>
      <td>{toDo.name}</td>
      <td className='text-capitalize'>{toDo.category.catName}</td>
      <td className={`${!toDo.description ? !toDo.done ? 'text-warning' : 'text-dark' : 'text-dark-danger'} text-capitalize`}>{toDo.description ? toDo.description : "No Description"}</td>
      {currentUser.email === process.env.REACT_APP_ADMIN_EMAIL &&
        <td className='controls'>
          <button className="btn btn-warning mx-5" onClick={() => setShowEdit(true)}>Edit</button>
          <button className="btn btn-danger" onClick={() => deleteToDo(toDo.toDoId)}>Delete</button>
          {showEdit &&
            <ToDoEdit 
              setShowEdit={setShowEdit}
              showEdit={showEdit}
              toDo={toDo}
              getToDos={getToDos}
            />
          }
        </td>
      }
    </tr>
  )
}
