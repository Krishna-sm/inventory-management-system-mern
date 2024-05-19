 
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button'; 
import BredCrums from '../../components/BredCrums';
import { FaPlus } from "react-icons/fa6";
import { TreeNode } from 'primereact/treenode';
import Model from './Components/Model.user';
import { LuView } from "react-icons/lu";
import { FaRegEdit ,FaRegTrashAlt} from "react-icons/fa"; 
const UserPage = () => {
  const [visible, setVisible] = useState(false);

  
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
          

<div className="relative overflow-x-auto shadow">
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
                Array(10).fill(null).map((c,i)=>{
                  return  <tr  key={i} className="bg-white border-b  ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Harish
                </th>
                <td className="px-6 py-4">
                    hari@gmail.com
                </td>
                <td className="px-6 py-4">
                    11224568525
                </td>
                <td className="px-6 py-4">
                   <button title="View " className="p-4 bg-teal-500 text-white rounded-sm mx-2"><LuView  className="text-xl" /> </button>
                        <button title="Edit " className="p-4 bg-orange-400 text-white rounded-sm mx-2"><FaRegEdit  className="text-xl" /> </button>
                            <button title="delete " className="p-4 bg-red-500 text-white rounded-sm mx-2"><FaRegTrashAlt  className="text-xl" /> </button>
                </td>
            </tr>
                })
              }
            
        </tbody>
    </table>
</div>


            </div>

      <Model visible={visible} setVisible={setVisible} />

    </>

  )
}

export default UserPage