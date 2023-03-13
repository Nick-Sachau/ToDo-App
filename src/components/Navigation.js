import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export const Navigation = () => {
  const { currentUser } = useAuth() 
  return (
    <Navbar variant='dark' bg='dark' expand='lg' className='p-3'>
      <Navbar.Brand href='/'>ResourcePlus</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className='justify-content-end'>
        {/* Links for each page will go here. In this project we are using react-router-dom, which carries a link
        component that will render the anchor tag associated with the router in App.js. To implement:
          1) npm i react-router-dom (we did this while working in app.js)
          2) import { Link } from 'react-router-dom' (see above)*/}
        <Nav>
          <Link to='/todos' className='nav-link'>ToDos</Link>
          {currentUser && 
          <>
            <Link to='/categories' className='nav-link'>Categories</Link>
          </>
          }
          {!currentUser && 
            <Link to='/login' className='nav-link'>
              Login
            </Link>
          }

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
