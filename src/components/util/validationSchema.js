import * as Yup from 'yup'

const catSchema = Yup.object().shape({
  CatName: Yup.string().max(25, 'Max 25 characters').required('*Required'),
  CatDesc: Yup.string().max(50, 'Max 50 characters')
})

const toDoSchema = Yup.object().shape({
  Name: Yup.string().max(100, 'Max 100 characters').required('*Required'),
  CategoryID:  Yup.number()
})

export { catSchema, toDoSchema }