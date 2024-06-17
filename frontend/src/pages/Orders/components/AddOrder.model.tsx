 
import { Dialog } from 'primereact/dialog';
import { ErrorMessage, Field, Formik, FieldArray } from 'formik';  
import { toast } from 'sonner'
import * as yup from 'yup';
import { useGetForSearchUserQuery } from '../../../provider/queries/Users.query';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { FaTrashAlt } from "react-icons/fa";
import Loader from '../../../components/Loader';
import moment from 'moment';
import { useCreateOrderMutation } from '../../../provider/queries/Orders.query';
const AddOrderModel = ({ visible, setVisible }: any) => { 

    const [CreateOrder] = useCreateOrderMutation()


    const { isLoading,isFetching,data }= useGetForSearchUserQuery({});

    if (isLoading ||isFetching){
        return <Loader/>
    }

    // const countries = [
    //     { name: 'Australia', code: 'AU' },
    //     { name: 'Brazil', code: 'BR' },
    //     { name: 'China', code: 'CN' },
    //     { name: 'Egypt', code: 'EG' },
    //     { name: 'France', code: 'FR' },
    //     { name: 'Germany', code: 'DE' },
    //     { name: 'India', code: 'IN' },
    //     { name: 'Japan', code: 'JP' },
    //     { name: 'Spain', code: 'ES' },
    //     { name: 'United States', code: 'US' }
    // ];

    const selectedCountryTemplate = (option:any, props:any) => {
        if (option) {
            return (
                <div className="flex align-items-center">
                
                    <div className='capitalize'>{option.name}- {moment(new Date(option.dob)).format("L")} </div>
                </div>
            );
        }

        return <span>{props.placeholder}</span>;
    };

    const countryOptionTemplate = (option:any) => {
        return (
            <div className="flex align-items-center">
                <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`mr-2 flag `} style={{ width: '18px' }} />
                <div>{option.name} - {moment(new Date(option.dob)).format("L")}  </div>
            </div>
        );
    }; 
    const validationSchema = yup.object({
        // user: yup.string().required("Name is required"),
        user: yup.mixed().required("User is required"),
        // items: yup.array().of(
        //     yup.object().shape({
        //         name: yup.string().required("Item Name required"),
        //         price: yup.number()
        //             .required("Item Price required") 
        //     })
        // )


        
    })

    const initialValues = {
        user:null,
        items:[ 
        ]
    }
    // @ts-ignore
    const onSubmitHandler = async (e: any, { resetForm }: any) => {
        try {
            // console.log(e)
            const { data, error }: any = await CreateOrder({ ...e,user:e.user._id})

            if (error) {
                toast.error(error.data.message);
                return

            }

 
            // toast.success(data.msg)
            console.log(data); 
            resetForm()
            setVisible(false)
        } catch (e: any) {
            toast.error(e.message)
        }
    }

  return (
    <>
    
          <Dialog draggable={false} header="Add Order" position='top' visible={visible} className=" w-full md:w-[70%] lg:w-[60%]" onHide={() => setVisible(false)}>

              <Formik onSubmit={onSubmitHandler} initialValues={initialValues} validationSchema={validationSchema}>
                  {({ values, setFieldValue, handleSubmit }) => (
                      <>
                          <form onSubmit={handleSubmit} className="w-full" >
                              <div className="mb-3">
                                  <label htmlFor="name">User <span className="text-red-500 text-sm">*</span> </label> 

                                  <Dropdown value={values.user} onChange={(e) => setFieldValue('user', e.value)} filterBy='name' options={data && data.users} filterPlaceholder='Search User By Name' optionLabel="user" placeholder="Select a User"
                                  emptyFilterMessage="No User Found"
                                  emptyMessage="You Have No User"
                                      filter valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} className="w-full my-2 border outline-none  ring-0" />

                                  <ErrorMessage name='user' className='text-red-500 capitalize' component={'p'} />
                              </div>

                              <div className="mb-3">
                                  <label htmlFor="name">Items <span className="text-red-500 text-sm">*</span> </label>
                                        <FieldArray name='items'>
                                                        {({ push,remove })=>(
                                                                    <>
                                        <div className="mb-3 flex justify-end">
                                                  <button type='button' onClick={() => { push({name:'',price:''})}} className='bg-purple-500 px-4  text-white py-2 rounded-md'>Add +</button>
                                        </div>
                                                                                {
                                                  values.items.length>0 &&  values.items.map((_,i)=>{
                                                            

                                                            return<div className='w-full flex items-center justify-between gap-x-4' key={i}>
                                                                            <div className="w-1/2">
                                                                    <Field name={`items[${i}].name`} className="w-full my-2 border outline-none py-3 px-4" placeholder="Item Name" />
                                                                    {/* <ErrorMessage name={`items[${i}].name`} className='text-red-500 capitalize' component={'p'} /> */}


                                                                            </div>
                                                                <div className="w-1/2">
                                                                    <Field type="number" name={`items[${i}].price`} className="w-full my-2 border outline-none py-3 px-4" placeholder="Item Price" />
                                                                    {/* <ErrorMessage name={`items[${i}].price`} className='text-red-500 capitalize' component={'p'} /> */}

                                                                </div>
                                                                <div className="">
                                                                    <button onClick={() => { remove(i)}} type='button' className="px-3 py-3 rounded-full bg-black text-white"><FaTrashAlt/></button>
                                                                </div>
                                                            </div>
                                                  })  
                                                                                }

                                                                    </>           
                                                        )}

                                        </FieldArray>
 

                                  <ErrorMessage name='items' className='text-red-500 capitalize' component={'p'} />
                              </div>





                                          
                              <div className="flex justify-end">
                                  <Button  className="text-white px-5 rounded-sm bg-indigo-500 py-3 text-center ">Add Consumer</Button>
                              </div>

                          </form>
                      </>
                  )}

              </Formik>

          </Dialog> 
    </>
  )
}

export default AddOrderModel