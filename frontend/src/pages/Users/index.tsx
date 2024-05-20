 
import React, { useState } from 'react'; 
import BredCrums from '../../components/BredCrums'; 
import Model from './Components/Model.user'; 
import { useGetAllConsumersQuery } from '../../provider/queries/Users.query';
import Loader from '../../components/Loader';
import TableCard from './Components/Card.user';
const UserPage = () => {
  const [visible, setVisible] = useState(false);

    const {isLoading,data } = useGetAllConsumersQuery({})
 
  return (



    <>  
        <BredCrums PageLink='/user' PageName='Users' /> 
 
              <div className="mb-3 flex justify-end w-[90%] mx-auto">
                <button onClick={()=>setVisible(!visible)} className="px-5 py-2 bg-purple-500 text-white rounded-sm">Add User</button>

              </div>
           <form className="mb-3 flex justify-end w-[90%] mx-auto">

                          <input className=" w-[90%] mx-auto lg:mx-0 lg:w-1/2 rounded-sm border py-3 px-5 outline-none " placeholder="Search User" />
                      

              </form>
          
            <div className="w-full ">
          

              {isLoading ? <>
                        <Loader/>
              </>:<div className="relative overflow-x-auto shadow">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    Mobile
                </th>
                <th scope="col" className="px-6 py-3">
                    Actions
                </th>
            </tr>
        </thead>
        <tbody>
           

              {
                                  data.users.length>0&&data.users.map((c:any,i:number)=>{
                                      return <TableCard key={i}  data={c}/>
                })
              }
            
        </tbody>
    </table>
</div>}


            </div>

      <Model visible={visible} setVisible={setVisible} />

    </>

  )
}

export default UserPage