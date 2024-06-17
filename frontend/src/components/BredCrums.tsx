 
import { Link } from 'react-router-dom'

const BredCrums = ({ PageName, PageLink }: { PageName:string, PageLink:string }) => {
  return (
    <>
                    <div className=" w-[96%] lg:w-[90%] mx-auto     my-10 flex items-center justify-between">
              <h1 className='text-4xl font-semibold leading-tight'>{PageName}</h1>
                                <ul className="flex items-center gap-x-2 text-blue-500">
                  <li><span >Dashboard</span></li>
                  <li><span >/</span></li>
                  <li><Link to={PageLink}>{PageName}</Link></li>
                                </ul>
                    </div>
    </>
  )
}

export default BredCrums