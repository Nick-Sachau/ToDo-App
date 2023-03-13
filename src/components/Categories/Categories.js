import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext'
import { SingleCategory } from './SingleCategory'

export const Categories = () => {
  const [categories, setCategories] = useState([]);

  const { currentUser } = useAuth();

  const [showCreate, setShowCreate] = useState(false);

  const getCategories = () => {
    axios.get('http://todoapi.nickthedev.net/api/categories').then(res => {
      console.log(res);
      setCategories(res.data)
    })
  }

  useEffect(() => {
    getCategories()
  }, []);
  
  return (
    <section className="categories">
      <article className="bg-info p-5">
        <h1 className="text-center">Categories Dashboard</h1>
      </article>
      {currentUser.email === process.env.REACT_APP_ADMIN_EMAIL &&
        <div className="bg-dark p-2 mb-3 text-center">
          {showCreate ?
            <>
              <button className="btn btn-warning" onClick={() => setShowCreate(false)}>Cancel</button>
              {/* CatCreate */}
            </> :
            <button className="btn btn-info" onClick={() => setShowCreate(true)}>Create Category</button>
          }
        </div>
      }
      <Container className='p-2' >
        <table className="table bg-info table-dark my-3">
          <thead className="table-secondary text-uppercase">
            <tr>
              <th>Name</th>
              <th>Description</th>
              {currentUser.email === process.env.REACT_APP_ADMIN_EMAIL && 
                <th>Actions</th>
              }
            </tr>
          </thead>
          <tbody>
            {categories.map(x =>
              // Single Category here
              <SingleCategory key={x.categoryId} category={x} getCategories={getCategories} />
            )}
          </tbody>
        </table>
      </Container>
    </section>
  )
}
