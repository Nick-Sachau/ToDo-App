import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container } from 'react-bootstrap'
import { SingleToDo } from './SingleToDo.js'
import './ToDos.css'
import { useAuth } from '../../contexts/AuthContext.js'
import { ToDoCreate } from './ToDoCreate.js'

export const Todos = () => {
  const [toDos, setToDos] = useState([]);
  const [showCreate, setShowCreate] = useState(false);

  const getToDos = () => {
    axios.get(`http://todoapi.nickthedev.net/api/todos`).then(res => {
      console.log(res);
      setToDos(res.data)
    })
  }

  useEffect(() => {
    getToDos()
  }, []);

  const { currentUser } = useAuth()

  return (
    <section className="toDos">
      <article className="bg-info p-5">
        <h1 className="text-center">ToDos Dashboard</h1>
      </article>

      {currentUser.email === process.env.REACT_APP_ADMIN_EMAIL &&
        <div className="bg-dark p-2 mb-3 text-center">
        <button className="btn btn-info" onClick={() => setShowCreate(!showCreate)}>{!showCreate ? 'Create New Task' : 'Close Form'}</button>
        <div className="createContainer">
          {showCreate &&
            // Render resourceCreate
            <ToDoCreate setShowCreate={setShowCreate} getToDos={getToDos} toDo={toDos}/>
          }
        </div>
      </div>
      }

      <Container className='p-2'>
        <table className="table bg-info table-dark my-3">
        <thead className="table-secondary text-uppercase">
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Controls</th>
            </tr>
          </thead>
          <tbody>
            {/* READ UI */}
            {toDos.map(x => 
              <SingleToDo key={x.category.categoryId} toDo={x} getToDos={getToDos} />
            )}
            {/* END READ UI */}
          </tbody>
        </table>
      </Container>
    </section>
  )
}
