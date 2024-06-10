
import React, { FormEvent, useState } from 'react';
import BredCrums from '../../components/BredCrums';
// import Model from './Components/Model.user';
import { useGetAllConsumersQuery } from '../../provider/queries/Users.query';
import Loader from '../../components/Loader';
// import TableCard from './Components/Card.user';
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import { useNavigate, useSearchParams } from 'react-router-dom';
import AddOrderModel from './components/AddOrder.model';
const OrdersPage = () => {
  const [visible, setVisible] = useState(false);

  const navigate = useNavigate()
  // const query= useSearchParams()  

  const [SearchParams] = useSearchParams();
  const [Search, setSearch] = useState(SearchParams.get("query") || '');
  return (
    <>
    
      <BredCrums PageLink='/orders' PageName='Orders' /> 


      <div className="mb-3 flex justify-end w-[90%] mx-auto">
        <button onClick={() => setVisible(!visible)} className="px-5 py-2 bg-purple-500 text-white rounded-sm">Add Orders</button>

      </div>
      <form onSubmit={()=>{}} className="mb-3 flex justify-end w-[90%] mx-auto">

        <input value={Search} onChange={(e: any) => setSearch(e.target.value)} className=" w-[90%] mx-auto lg:mx-0 lg:w-1/2 rounded-sm border py-3 px-5 outline-none " placeholder="Search Orders" />


      </form>



      {/* {isLoading || isFetching ? <> */}
     <div className="relative overflow-x-auto shadow">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Item
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>

{/* 
            {
              data.users && data.users.length > 0 && data.users.map((c: any, i: number) => {
                return <TableCard key={i} id={i + 1} data={c} />
              })
            } */}

          </tbody>
        </table>
      </div>

      <AddOrderModel visible={visible} setVisible={setVisible}  />




    </>
  )
}

export default OrdersPage