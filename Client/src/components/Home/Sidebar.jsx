import React from 'react'
import { CgNotes } from "react-icons/cg";
import { MdNotificationImportant } from "react-icons/md";   
import { FaCheck } from "react-icons/fa6";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
const Sidebar = () => {

const data = [
    {
        title : "All Tasks",
        icons : <CgNotes /> ,
        link : '/'
    },
    {
        title : "Important Tasks",
        icons : <MdNotificationImportant />,
        link : '/importantTask'
    },
    {
        title : "Completed Tasks",
        icons : <FaCheck />,
        link : '/completeTask'
    },
    {
        title : "Incompleted Tasks",
        icons  : <IoCheckmarkDoneCircleOutline />,
        link : '/incompleteTask'
    }
]


  return (
   <> 
        <div>
            <h2 className='text-xl font-semibold '> Task management</h2>
            <h4 className='my-1 text-gray-400'>Example@user.com</h4>
            <hr />
        </div>
        <div>
            {data.map((item, i)=>(
                <Link to={item.link} key={i} className='my-2 flex items-center hover:bg-gray-600 p-2 rounded  transition-all duration-300 '> 
                   {item.icons}&nbsp; {item.title}
                </Link>
            ))}
        </div>
        <div>
            <div>
                <button className='bg-gray-600 w-full p-2 rounded '>Log Out </button>
            </div>
        </div>
        </>

  )
}

export default Sidebar