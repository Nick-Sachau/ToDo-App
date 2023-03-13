import React, { useState, useEffect } from 'react'
import { Formik, Form, Field } from 'formik'
import { toDoSchema } from '../util/validationSchema'
import axios from 'axios'

export const ToDoForm = ({setShowCreate, getToDos, toDo, setShowEdit}) => {
  const [categories, setCategories] = useState([]);

  const getCategories = () => {
    axios.get(`http://todoapi.nickthedev.net/api/categories`).then(res => {
      console.log(res);
      setCategories(res.data)
    })
  }

  const handleSubmit = (values) => {
    console.log(values);
    if(!toDo) {
      const toDoToCreate = values;

      axios.post('http://todoapi.nickthedev.net/api/ToDos', toDoToCreate).then(() => {
        getToDos()
        setShowCreate(false)
      })
    }
    else {
      const taskToEdit = {
        toDoId: toDo.toDoId,
        Name: values.Name,
        Done: values.Done,
        categoryId: values.categoryId
      }

      axios.put(`http://todoapi.nickthedev.net/api/todos/${toDo.toDoId}`, taskToEdit).then(() => {
        getToDos()
        setShowEdit(false)
      })
    }
  }

  useEffect(() => {
    getCategories()
  }, []);

  return (
    <Formik
    initialValues={{
      name: toDo ? toDo.name : '',
      // TODO: Add later
      // description: toDo ? toDo.description : '',
      categoryId: toDo ? toDo.category.categoryId : ''
    }}
    validationSchema={toDoSchema}
    onSubmit={values => handleSubmit(values)}>
      {({errors, touched}) => (
        <Form id='toDoForm'>
          <div className="form-group m-3">
            <Field name='name' className='form-control' placeholder='Name' />
            {errors.name && touched.name ?
              <div className="text-danger">{errors.name}</div>:
              null
            }
          </div>

          {/* Add Later */}
          {/* <div className="form-group m-3">
            <Field name='description' as='textarea' className='form-control' placeholder='Description' style={{resize: 'none', height: '5em'}} />
            {errors.description && touched.description ?
              <div className="text-danger">{errors.description}</div>:
              null
            }
          </div> */}

          <div className="form-group m-3">
            <Field as='select' name='categoryId' className='form-control'>
              <option value='' disabled>
                [-- Choose a Category --]
              </option>
              {/* Below we will map an option for every category in the API */}
              {categories.map(cat => 
                <option key={cat.categoryId} value={cat.categoryId}>{cat.catName}</option>
              )}
            </Field>
            {errors.categoryId && touched.categoryId ?
              <div className="text-danger">{errors.categoryId}</div>:
              null
            }
          </div>
          <div className="form-group m-3">
            <button type='submit' className="btn btn-success m-3">Submit Resource to API</button>
          </div>
        </Form>
      )}
    </Formik>
  )
}
