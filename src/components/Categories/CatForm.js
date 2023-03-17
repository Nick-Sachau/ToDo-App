import React from 'react'
import { Formik, Form, Field } from 'formik'
import { catSchema } from '../util/validationSchema'
import axios from 'axios'

export const CatForm = ({ setShowCreate, getCategories, setShowEdit, category }) => {

  const handleSubmit = (values) => {
    if(!category) {
      const toDoToCreate = values;

      axios.post('http://todoapi.nickthedev.net/api/categories', toDoToCreate).then(() => {
        getCategories()
        setShowCreate(false)
      })
    }
    else {
      const catToEdit = {
        CategoryId: category.categoryId,
        catName: values.CatName,
        catDesc: values.CatDesc
      }

      console.log(catToEdit)

      axios.put(`http://todoapi.nickthedev.net/api/categories/${category.categoryId}`, catToEdit).then(() => {
        getCategories()
        setShowEdit(false)
      })
    }
  }

  return (
    <Formik
    initialValues={{
      CatName: category ? category.catName : '',
      CatDesc: category ? category.catDesc : ''
    }}
    validationSchema={catSchema}
    onSubmit={values => handleSubmit(values)}>
      {({errors, touched}) => (
        <Form id='toDoForm'>
          <div className="form-group m-3">
            <Field name='CatName' className='form-control' placeholder='Name' />
            {errors.CatName && touched.CatName ?
              <div className="text-danger">{errors.CatName}</div>:
              null
            }
          </div>

          <div className="form-group m-3">
            <Field name='CatDesc' as='textarea' className='form-control' placeholder='Description' style={{resize: 'none', height: '5em'}} />
            {errors.CatDesc && touched.CatDesc ?
              <div className="text-danger">{errors.CatDesc}</div>:
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
