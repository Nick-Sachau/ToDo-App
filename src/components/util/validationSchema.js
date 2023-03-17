import * as Yup from 'yup'

const catSchema = Yup.object().shape({
  CatName: Yup.string().max(25, 'Max 25 characters').required('*Required'),
  CatDesc: Yup.string().max(100, 'Max 100 characters')
})

const toDoSchema = Yup.object().shape({
  name: Yup.string().max(100, 'Max 100 characters').required('*Required'),
  description: Yup.string().max(100, 'Max 100 characters'),
  categoryID:  Yup.number()
})

export { catSchema, toDoSchema }