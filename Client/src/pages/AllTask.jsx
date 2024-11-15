import React, { useState } from 'react'
import Card from '../components/Home/Card'
import { IoIosAddCircleOutline } from 'react-icons/io'
import InputData from '../components/Home/InputData.jsx'
const AllTask = () => {
  const [inputDiv, setInputDiv] = useState('hidden')
  return (
    <>
      <div>
        <div className="w-full  flex justify-end p-2">
          <button onClick={() => setInputDiv('fixed')}>
            {' '}
            <IoIosAddCircleOutline className="text-4xl text-gray-400  hover:text-gray-100 transition-all  duration-300" />
          </button>
        </div>
        <Card home={'true'} setInputDiv={setInputDiv} />
      </div>
      <InputData inputDiv={inputDiv} setInputDiv={setInputDiv} />
    </>
  )
}

export default AllTask
