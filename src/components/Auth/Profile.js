import React from 'react'
import { useAuth } from '../../contexts/AuthContext'

export const Profile = () => {
  const { currentUser } = useAuth()

  return (
    <span className='profile p-2'>
      Hello {!currentUser.displayName ? currentUser.email : currentUser.displayName.split(" ")[0] }!
      <img src={currentUser.photoURL} alt="users profile"/>
    </span>
  )
}
