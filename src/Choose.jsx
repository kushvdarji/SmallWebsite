import { Field, Formik } from 'formik'
import React from 'react'
import { Form } from 'react-router-dom'

function Choose() {
  return (
    <div>
    <Formik initialValues={{file:""}}
    onSubmit={(values)=>{
        console.log(values)
    }}></Formik>
    {({values})=>(
      <Form>
        <Field type="file" name="file"/>
      </Form>
    )}
    </div>
  )
}
export default Choose
