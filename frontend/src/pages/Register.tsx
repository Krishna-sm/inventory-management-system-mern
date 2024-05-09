import { ErrorMessage, Field, Formik } from 'formik'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import React from 'react'
import { ImSpinner, ImSpinner2 } from 'react-icons/im'
import { Link } from 'react-router-dom'
import * as yup from 'yup'

const Register = () => {

  type User = {
    name: string,
    email: string,
    password: string
  }

  const initialValues: User = {
    name: '',
    email: '',
    password: ''
  }

  const validationSchema = yup.object({
    name: yup.string(). required("Name is required"),
    email: yup.string().email("email must be valid").required("email is required"),
    password: yup.string().min(5, "Password must be grather than 5 characters").required("password is required"),
  })

  const OnSubmitHandler = async (e: User, { resetForm }: any) => {
        console.log({e});
        resetForm()
        
  }

  return (
    <div className='min-h-screen flex items-center justify-center w-full bg-[#eee]'>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={OnSubmitHandler}>
        {({ values, setFieldValue, handleSubmit }) => (
          <>
            <form onSubmit={handleSubmit} className="w-1/3 shadow-md rounded-md pt-10 pb-3 px-4 bg-white">
            
              <div className="mb-3 py-1">
                <label htmlFor="name">Name</label>
                <Field id='name' name='name' className='w-full outline-none py-3 px-2 border-[.1px] border-zinc-400 rounded-lg' placeholder='Enter Email Address' />
                <ErrorMessage component={'p'} className='text-red-500 text-sm ' name='name' />
              </div>
              <div className="mb-3 py-1">
                <label htmlFor="email">Email</label>
                <Field id='email' name='email' className='w-full outline-none py-3 px-2 border-[.1px] border-zinc-400 rounded-lg' placeholder='Enter Email Address' />
                <ErrorMessage component={'p'} className='text-red-500 text-sm ' name='email' />
              </div>
              <div className="mb-3 py-1">
                <label htmlFor="password">Password</label>

                <Field name='password' id='password' className='w-full outline-none py-3 px-2 border-[.1px] border-zinc-400 rounded-lg' placeholder='*****' />
                <ErrorMessage component={'p'} className='text-red-500 text-sm ' name='password' />

              </div>
              <div className="mb-3 py-1">
                <Button raised type='submit'   className='w-full bg-red-500 text-white py-3 px-2 flex items-center justify-center'>Submit

                </Button>
              </div>
              <div className="mb-3 py-1 flex items-center justify-end">
                <p className="inline-flex items-center gap-x-1">   Already Have An Account?<Link className='font-semibold' to={'/login'}>Login</Link></p>
              </div>
              
            </form>
          </>
        )}
      </Formik>
    </div>
  )
}

export default Register