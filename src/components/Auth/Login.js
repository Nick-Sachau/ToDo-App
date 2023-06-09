import React from 'react'

import { useAuth } from '../../contexts/AuthContext'
import { Container, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleAuth = async () => {
    await login()

    return navigate('/')
  }

  return (
    <div className="login">
      <article className="bg-info mb-5 p-5 text-dark">
        <h1 className="text-center">Welcome to To-Do App!</h1>
      </article>
      <Container>
        <Card className='m-2 border-dark text-center'>
          <Card.Header className='bg-dark text-white'>
            <h2>Login for full functionality</h2>
          </Card.Header>
          <Card.Body>
            <button className="btn btn-success" onClick={() => handleAuth()}>
              login w/ GitHub  
            </button> 
          </Card.Body>
        </Card>
      </Container>
    </div>
  )
}
