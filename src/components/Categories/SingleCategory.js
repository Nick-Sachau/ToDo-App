import React, { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { FaTrashAlt, FaEdit } from 'react-icons/fa'
import axios from 'axios'
import { CatEdit } from './CatEdit'

export const SingleCategory = ({ category, getCategories }) => {
  const [showEdit, setShowEdit] = useState(false);

  const { currentUser } = useAuth()

  const deleteCat = (id) => {
    if(window.confirm(`Are you sure you want to delete ${category.catName}`)) {
      axios.delete(`http://todoapi.nickthedev.net/api/categories/${category.categoryId}`).then(() => getCategories())
    }
  }

  return (
    <tr>
      <td>{category.catName}</td>
      <td>{category.catDesc}</td>
      {currentUser.email === process.env.REACT_APP_ADMIN_EMAIL &&
        <td>
          <button className="m-1 rounded" id='editLink' onClick={() => showEdit(true)}>
            <FaEdit />
          </button>
          <button className="m-1 rounded" id='deleteLink' onClick={() => deleteCat(category.categoryId)}>
            <FaTrashAlt />
          </button>
          {showEdit &&
            <CatEdit 
              setShowEdit={setShowEdit}
              showEdit={showEdit}
              getCategories={getCategories}
              category={category}
            />
          }
        </td>
      }
    </tr>
  )
}
