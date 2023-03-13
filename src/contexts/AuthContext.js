import React, { useState, useEffect, useContext } from 'react'
import { auth } from '../base';
import { GithubAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const githubAuthProvider = new GithubAuthProvider()

  const login = () => {
    return (signInWithPopup(auth, githubAuthProvider).then(authData => {
      console.log(authData);
      setCurrentUser(authData.user)
    }))
  }

  const logout = () => {
    signOut(auth).then(setCurrentUser(null))
  }

  const value = { currentUser, login, logout }

  useEffect(() => {
    const authChange = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return authChange
  }, []);

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
