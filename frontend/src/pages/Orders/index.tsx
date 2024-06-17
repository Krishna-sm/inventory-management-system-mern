
import  { FormEvent, useState } from 'react';
import BredCrums from '../../components/BredCrums';
// import Model from './Components/Model.user'; 
import Loader from '../../components/Loader';
// import TableCard from './Components/Card.user';
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import { useNavigate, useSearchParams } from 'react-router-dom';
import AddOrderModel from './components/AddOrder.model';
import { useGetAllOrdersQuery } from '../../provider/queries/Orders.query';
import TableCard from './components/Card.order';
const OrdersPage = () => {
  const [visible, setVisible] = useState(false);

  const navigate = useNavigate()
  // const query= useSearchParams()  

  const [SearchParams] = useSearchParams();
  const [Search, setSearch] = useState(SearchParams.get("query") || '');
  const { data, isLoading, isError } = useGetAllOrdersQuery({ query: SearchParams.get("query") || '', page: SearchParams.get("page") || 1 })


  if(isLoading){
    return <Loader/>
  }

  if(isError){
    return <h1>something wrong wrong</h1>
  }

  const SearchHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   
    let string = `?query=${Search}&page=${1}`
    navigate(`/orders` + string);



  }




  const OnNextPageHandler = () => {

    const page = Number(SearchParams.get("page")) || 1;
    const query = SearchParams.get("query") || '';

    let string = ``;
    if (query) {
      string = `?query=${query}&page=${page + 1}`
    } else {
      string = `?page=${page + 1}`

    }

    console.log(page);


    navigate(`/orders` + string);

  }

  const onPrevPageHandler = () => {

    const page = Number(SearchParams.get("page")) || 1;
    const query = SearchParams.get("query") || '';

    let string = ``;
    if (query) {
      string = `?query=${query}&page=${page - 1}`
    } else {
      string = `?page=${page - 1}`

    }



    navigate(`/orders` + string);

  }





  return (
    <>
    
      <BredCrums PageLink='/orders' PageName='Orders' /> 


      <div className="mb-3 flex justify-end w-[90%] mx-auto">
        <button onClick={() => setVisible(!visible)} className="px-5 py-2 bg-purple-500 text-white rounded-sm">Add Orders</button>

      </div>
      <form onSubmit={SearchHandler} className="mb-3 flex justify-end w-[90%] mx-auto">

        <input value={Search} onChange={(e: any) => setSearch(e.target.value)} className=" w-[90%] mx-auto lg:mx-0 lg:w-1/2 rounded-sm border py-3 px-5 outline-none " placeholder="Search Orders" />


      </form>

      <div className={`mb-3 flex  ${(Number(SearchParams.get("page")) || 1) > 1 ? 'justify-between' : 'justify-end'}  w-[90%]  mx-auto`}>

        {(Number(SearchParams.get("page")) || 1) > 1 && <button onClick={onPrevPageHandler} title='Prev Page' className="text-black  text-xl lg:text-3xl p-2"><BsArrowLeftCircle /></button>}


        {data && data.hasMore && <button onClick={OnNextPageHandler} title='Next Page' className="text-black  text-xl lg:text-3xl p-2"><BsArrowRightCircle /></button>}
      </div>

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
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Items
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>

            {/* {JSON.stringify(data)} */}

            {
              data.data && data.data.length > 0 && data.data.map((c: any, i: number) => {
                return <TableCard key={i} id={i + 1} data={c} />
              })
            }

          </tbody>
        </table>
      </div>

      <AddOrderModel visible={visible} setVisible={setVisible}  />




    </>
  )
}

export default OrdersPage