import React from 'react'
import { CiHeart ,CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
const Card = () => {

const data = [
    {
        title : "The Best Coding Channel",
        desc : "I have to create my channel  the best ever coding channel in hindi  for the first time  in the  world "
    },
    {
        title : "CPP Concpet",
        desc : "i need to clear basic of Cpp. Topics: Abstracrtion , Inheritance , Polyvmorphics , virtual"
    },
    {
        title : "Java Concpet",
        desc : "i need to clear basic of Java. Topics: Abstracrtion , Inheritance , Polyvmorphics , virtual"
    },
    {
        title : "Python Concpet",
        desc : "i need to clear basic of Python. Topics: Abstracrtion , Inheritance , Polyvmorphics , virtual"
    }
]

  return (
    <div className='grid grid-cols-3 gap-4 p-4'>
        {data.map((item, index) => (
            <div className='bg-gray-800 rounded-xl p-4 justify-between flex flex-col  ' key={index}>
            <div>
                <h2 className='text-xl font-semibold ' >{item.title}</h2>
                <p className='text-gray-300 my-3'>{item.desc}</p>
            </div>
            <div className='mt-4 w-full flex items-center'>
                <button className='bg-red-400 p-2 rounded w-3/6'>In Complete</button>
                <div className='text-white p-2 w-3/6 text-2xl font-semibold  flex justify-around bg-green-800 rounded'>
                    <button><CiHeart /></button>
                    <button><CiEdit /></button>
                    <button><MdDelete /></button>
                </div>
            </div>
            </div>
        ))}
        <div  className='flex flex-col justify-center items-center rounded-sm p-4 text-gray-300 bg-gray-800 hover:scale-105 hover:cursor-pointer transition-all duration-300 '>
        <IoIosAddCircleOutline className='text-5xl' />
            <h2 className='text-2xl mt-4 '>Add Task</h2>
        </div>
    </div>
  )
}

export default Card