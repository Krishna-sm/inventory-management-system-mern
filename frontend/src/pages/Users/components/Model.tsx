import React from 'react'
import { Dialog } from 'primereact/dialog';
import { Formik, ErrorMessage,Field } from 'formik';
import * as yup from 'yup'
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
const Model = ({visible,setVisible}:any) => {


    const validationSchema = yup.object({
        name: yup.string().required("Cunsumer name is Required"),
        email: yup.string().required("Cunsumer Email is Required"),//primary
        mobile: yup.string().required("Cunsumer Mobile No is Required"),//primary
        birth_date: yup.date().required("Cunsumer Birth Date is Required"),
        address: yup.string().required("Cunsumer Adddress is Required"),
    })



    const initialValues = {
        name:'',
        email:'',
        mobile:'',
        birth_date:new Date(),
        address:''

    }


    const onSubmitHandler = async()=>{
        try {
            
        } catch (error) {
            
        }
    }

  return (
    <>
            <Dialog  draggable={false} header="Add User" visible={visible} className="w-[90%] lg:w-1/2" position='top' onHide={() => setVisible(false)}>
              <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={onSubmitHandler}>

            {({ values,setFieldValue })=>(
                <>
                            <form className="w-full">
                                <div className="mb-3">
                                    <label htmlFor="name">Name</label>
                                    <Field name="name" id="name" type="text" className="w-full px-5 py-2 rounded-md outline-none border-1 border" placeholder="Enter Consumer Name" />
                                    <ErrorMessage name='name' component={'p'} className='text-red-500 text-sm' />
                                </div>

                              <div className="mb-3">
                                  <label htmlFor="address">DOB</label>
                                  <Calendar inputStyle={{outline:'none' , border:'none'}} inputClassName='outline-none ring-0' dateFormat='dd/mm/yy' className='w-full px-5 py-2 rounded-md outline-none border-1 border' onChange={(e: any) => { setFieldValue('birth_date', e.value)}} value={values.birth_date} maxDate={new Date()} />
                                  {/* <Field rows="3" as="textarea" name="address" id="address" className="w-full px-5 py-2 rounded-md outline-none border-1 border" placeholder="Enter Consumer Address" /> */}
                                  <ErrorMessage name='address' component={'p'} className='text-red-500 text-sm' />
                              </div>
                              <div className="mb-3">
                                  <label htmlFor="email">Email</label>
                                  <Field name="email" id="email" type="email" className="w-full px-5 py-2 rounded-md outline-none border-1 border" placeholder="Enter Consumer Email" />
                                  <ErrorMessage name='email' component={'p'} className='text-red-500 text-sm' />
                              </div>

                              <div className="mb-3">
                                  <label htmlFor="mobile">Mobile</label>
                                  <Field name="mobile" id="mobile"  className="w-full px-5 py-2 rounded-md outline-none border-1 border" placeholder="Enter Consumer Mobile" />
                                  <ErrorMessage name='mobile' component={'p'} className='text-red-500 text-sm' />
                              </div>
                              <div className="mb-3">
                                  <label htmlFor="address">Address</label>
                                  <Field rows="3" as="textarea" name="address" id="address" className="w-full px-5 py-2 rounded-md outline-none border-1 border" placeholder="Enter Consumer Address" />
                                  <ErrorMessage name='address' component={'p'} className='text-red-500 text-sm' />
                              </div>

                              <Button className='w-full bg-blue-600 text-center text-white py-3 flex items-center justify-center ' >Add</Button>

                                </form>   
                </>
            )}

              </Formik>
</Dialog>

{/* name,mobile,email,birth */}
    
    </>
  )
}

export default Model