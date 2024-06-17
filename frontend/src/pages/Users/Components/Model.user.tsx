 
import { Dialog } from 'primereact/dialog';
import { ErrorMessage, Field, Formik } from 'formik';
import { Calendar } from 'primereact/calendar';
import * as yup from 'yup'
import {toast} from 'sonner'
import { useRegisterConsumerMutation } from '../../../provider/queries/Users.query';
import { Button } from 'primereact/button';
const Model = ({ visible, setVisible }:any) => {

  const [RegisterConsumer, RegisterConsumerResponse ] = useRegisterConsumerMutation()
    const validationSchema = yup.object({
      name: yup.string().required("Name is required"),
      email: yup.string().email("Email must be valid").required("email is required"),
      mobile: yup.string().required("Mobile is required"),
      address: yup.string().required("Address is required"),
      dob: yup.string().required("DOB is required"),
    })

    const initialValues={
      name:'',
      email:'',
      mobile:'',
      address:'',
      dob:new Date()
    }

    const onSubmitHandler = async(e:any,{resetForm}:any)=>{
            try{
              // console.log(e)
              const {data,error }:any = await RegisterConsumer(e)

              if (error) {
                toast.error(error.data.message);
                return

              }



              toast.success(data.msg)
                resetForm()
                setVisible(false)
            }catch(e:any){
toast.error(e.message)
            }
    }

  return (
    <> 
        <Dialog draggable={false} header="Add User" position='top' visible={visible} className=" w-full md:w-[70%] lg:w-1/2" onHide={() => setVisible(false)}>
         
        <Formik onSubmit={onSubmitHandler} initialValues={initialValues} validationSchema={validationSchema}>
            {({values,setFieldValue,handleSubmit})=>(
              <>  
                     <form onSubmit={handleSubmit} className="w-full" >
                   <div className="mb-3">
                        <label htmlFor="name">Name <span className="text-red-500 text-sm">*</span> </label>

                <Field name="name" id="name" type="text" placeholder='Enter Consumer Name' className="w-full my-2 border outline-none py-3 px-4" />
                        <ErrorMessage name='name' className='text-red-500 capitalize' component={'p'} />
                      </div>

              <div className="mb-3">
                <label htmlFor="email">Email <span className="text-red-500 text-sm">*</span> </label>

                <Field name="email" id="email" type="text" placeholder='Enter Consumer Email' className="w-full my-2 border outline-none py-3 px-4" />
                <ErrorMessage name='email' className='text-red-500 capitalize' component={'p'} />
              </div>
              <div className="mb-3">
                <label htmlFor="mobile">Mobile No <span className="text-red-500 text-sm">*</span> </label>

                <Field name="mobile" id="mobile" type="text" placeholder='Enter Consumer Mobile' className="w-full my-2 border outline-none py-3 px-4" />
                <ErrorMessage name='mobile' className='text-red-500 capitalize' component={'p'} />
              </div>

              <div className="mb-3">
                <label htmlFor="email">DOB <span className="text-red-500 text-sm">*</span> </label>
 
                <Calendar className='w-full my-2 border outline-none py-3 px-4 ring-0' maxDate={new Date()} inputClassName='outline-none ring-0' placeholder='Enter Consumer DOB' dateFormat='dd/mm/yy' value={values.dob}  onChange={(e)=>{
                    setFieldValue('dob',e.value)
                }} />

                <ErrorMessage name='email' className='text-red-500 capitalize' component={'p'} />
              </div>
              
              <div className="mb-3">
                <label htmlFor="address">Address <span className="text-red-500 text-sm">*</span> </label>

                <Field as="textarea" rows={3} name="address" id="address" type="text" placeholder='Enter Consumer Address' className="w-full my-2 border outline-none py-3 px-4" />
                <ErrorMessage name='address' className='text-red-500 capitalize' component={'p'} />
              </div>
                      <div className="flex justify-end">
                  <Button loading={RegisterConsumerResponse.isLoading} className="text-white px-5 rounded-sm bg-indigo-500 py-3 text-center ">Add Consumer</Button>
                        </div>
                
                      </form>
              </>
            )}

        </Formik>

        </Dialog> 
    </>
  )
}

export default Model