import React from 'react'
import { Login } from '../Auth/Login'
import './home.css'
import { useAuth } from '../../contexts/AuthContext'
import { Todos } from '../Todos/Todos'

export const Home = () => {
  const { currentUser } = useAuth()

  return (
    <>
      {currentUser === null || currentUser.email !== process.env.REACT_APP_ADMIN_EMAIL ?
        <div className='container'>
          <div className="body">
            <Login />
            <div className="container text-center mb-5">
              <h3>To Access the app please login</h3>
            </div>
            <div className="about mt-5">
              <h1 className="title text-center">About the App</h1>
              <hr />
              <div className="content row">
                <div className="col-md-6">
                  <h2 className='text-center'>Tasks</h2>
                  <hr className='w-50' style={{"margin": "0 auto"}}/>
                </div>
                <div className="col-md-6">
                  <h2 className='text-center'>Categories</h2>
                  <hr className='w-50' style={{"margin": "0 auto"}} />
                </div>
              </div>
            </div>
          </div>
        </div>
      :
        <Todos />
      }
    </>
  )
}
