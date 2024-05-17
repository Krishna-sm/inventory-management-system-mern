 
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button'; 
import BredCrums from '../../components/BredCrums';
import { FaPlus } from "react-icons/fa6";
import Model from './components/Model';
import { TreeNode } from 'primereact/treenode';
const UserPage = () => {

  const [Visible,setVisible] = useState(false);
 
  return (
    <>  
        <BredCrums PageLink='/user' PageName='Users' /> 

            <div className="flex justify-end  w-[90%] mx-auto lg:w-[90%]">
        <button type='button' onClick={() => setVisible(!Visible)} className="px-6 rounded-md py-2 bg-indigo-500 text-white inline-flex items-center gap-x-2">Add<FaPlus/></button>
              </div>


      <div className="flex   py-4 justify-end  w-[90%] mx-auto lg:w-[90%]">
        <input type="text" className="w-[90%]  mx-auto lg:mx-0 lg:w-[30%] border outline-none rounded-md py-3 px-5 border-zinc-400"  placeholder='Search User'/>
        </div>


      <div className="relative  w-[90%] mx-auto lg:w-[90%] overflow-x-auto  sm:rounded-lg">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
      <tr>


        <th scope="col" className="px-6 py-3">
          Product name
        </th>
        <th scope="col" className="px-6 py-3">
          Color
        </th>
        <th scope="col" className="px-6 py-3">
          Category
        </th>
        <th scope="col" className="px-6 py-3">
          Price
        </th>
        <th scope="col" className="px-6 py-3">
          <span className="sr-only">Edit</span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr className="bg-white  border-b   hover:bg-gray-50 ">
             
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          Apple MacBook Pro 17"
        </th>
        <td className="px-6 py-4">
          Silver
        </td>
        <td className="px-6 py-4">
          Laptop
        </td>
        <td className="px-6 py-4">
          $2999
        </td>
        <td className="px-6 py-4 text-right">
          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
        </td>
      </tr>
     
    </tbody>
  </table>
</div>
      <Model visible={Visible} setVisible={setVisible} />

    </>

  )
}

export default UserPage