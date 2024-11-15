import React, { useState } from 'react'
import { CiHeart, CiEdit } from 'react-icons/ci'
import { MdDelete } from 'react-icons/md'
import { IoIosAddCircleOutline } from 'react-icons/io'
const Card = ({ home, setInputDiv }) => {
  const [important, setImportant] = useState('Incomplete')

  const data = [
    {
      title: 'The Best Coding Channel',
      desc:
        'I have to create my channel  the best ever coding channel in hindi  for the first time  in the  world ',
      status: 'In Complete',
    },
    {
      title: 'CPP Concpet',
      desc:
        'i need to clear basic of Cpp. Topics: Abstracrtion , Inheritance , Polyvmorphics , virtual',
      status: 'In Complete',
    },
    {
      title: 'Java Concpet',
      desc:
        'i need to clear basic of Java. Topics: Abstracrtion , Inheritance , Polyvmorphics , virtual',
      status: 'In Complete',
    },
    {
      title: 'Python Concpet',
      desc:
        'i need to clear basic of Python. Topics: Abstracrtion , Inheritance , Polyvmorphics , virtual',
      status: 'In Complete',
    },
  ]

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {data.map((item, index) => (
        <div
          className="bg-gray-800 rounded-xl p-4 justify-between flex flex-col  "
          key={index}
        >
          <div>
            <h2 className="text-xl font-semibold ">{item.title}</h2>
            <p className="text-gray-300 my-3">{item.desc}</p>
          </div>
          <div className="mt-4 w-full flex items-center">
            <button
              className={`${
                item.status === 'In Complete' ? 'bg-red-400' : 'bg-green-700'
              } bg-red-400 p-2 rounded w-3/6`}
            >
              {item.status}{' '}
            </button>
            <div className="text-white p-2 w-3/6 text-2xl font-semibold  flex justify-around rounded">
              <button>
                <CiHeart />
              </button>
              <button>
                <CiEdit />
              </button>
              <button>
                <MdDelete />
              </button>
            </div>
          </div>
        </div>
      ))}
      {home === 'true' && (
        <button
          className="flex flex-col justify-center items-center rounded-sm p-4 text-gray-300 bg-gray-800 hover:scale-105 hover:cursor-pointer transition-all duration-300 "
          onClick={() => setInputDiv('fixed')}
        >
          <IoIosAddCircleOutline className="text-5xl" />
          <h2 className="text-2xl mt-4 ">Add Task</h2>
        </button>
      )}
    </div>
  )
}

export default Card
