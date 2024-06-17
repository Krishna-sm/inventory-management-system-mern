 
import { useDispatch,  } from 'react-redux'
import { collapsedSidebar  ,toggleSidebar } from '../provider/slice/Sidebar.slice';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoLogOutOutline } from "react-icons/io5";
import { removeUser } from '../provider/slice/user.slice';
import { useNavigate } from 'react-router-dom';
const Header = () => {

  const disptach = useDispatch(); 

  const sidebarHandler = () => disptach(collapsedSidebar())
  const sidebarHandlerToggle = () => disptach(toggleSidebar())
  const navigate = useNavigate()


  const logoutHandler = ()=>{
    try {
          localStorage.removeItem("token");
      disptach(removeUser())
      navigate("/login");
    } catch (error:any) {
      console.log(error.message)
    }
  }

  return (
    <>
                <header className="py-4 shadow md px-10">
              <div className="nav flex items-center justify-between">
                <div className="btn"> 
            <button className='lg:hidden' onClick={sidebarHandlerToggle}><HiOutlineMenuAlt3 className='text-2xl' /> </button>
            <button className='hidden lg:flex' onClick={sidebarHandler}><HiOutlineMenuAlt3 className='text-2xl' /> </button></div>
            <div className="end">
            <button title='logout' className='hidden lg:flex' onClick={logoutHandler}><IoLogOutOutline className='text-2xl' /> </button>
            </div>
              </div>
                </header>
    </>
  )
}

export default Header