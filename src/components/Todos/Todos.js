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
  const [doneTasks, setDoneTasks] = useState(false);

  const getToDos = () => {
    axios.get(`http://todoapi.nickthedev.net/api/todos`).then(res => {
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

      {currentUser === null || currentUser.email !== process.env.REACT_APP_ADMIN_EMAIL ?
        null
        :
        <div className="bg-dark p-2 mb-3 text-center">
          <button className="btn btn-info mx-3" onClick={() => setShowCreate(!showCreate)}>{!showCreate ? 'Create New Task' : 'Close Form'}</button>
          <button className='btn btn-warning mx-3' onClick={() => setDoneTasks(!doneTasks)}>Toggle Done Tasks</button>
          <div className="createContainer">
            {showCreate &&
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
              <th>Description</th>
              {currentUser.email === process.env.REACT_APP_ADMIN_EMAIL &&
                <th>Controls</th>
              }
            </tr>
          </thead>
          <tbody>
            {toDos.map(x => 
              !doneTasks ?
                !x.done && <SingleToDo currentUser={currentUser} key={x.toDoId} toDo={x} getToDos={getToDos} />
              :
              <SingleToDo currentUser={currentUser} key={x.toDoId} toDo={x} getToDos={getToDos} />
            )}
          </tbody>
        </table>
        <div className="container text-center mt-5">
          {currentUser.email !== process.env.REACT_APP_ADMIN_EMAIL &&
            <h2>Log in to edit tasks</h2>
          }
        </div>
      </Container>
    </section>
  )
}
