import React, { useState } from 'react'
import { RxCross2 } from 'react-icons/rx'
const InputData = ({ inputDiv, setInputDiv }) => {
  return (
    <>
      <div
        className={` ${inputDiv} fixed top-0 left-0 bg-gray-800 opacity-50 h-screen w-full`}
      ></div>
      <div
        className={` ${inputDiv} top-0 left-0 flex items-center justify-center h-screen w-full`}
      >
        <div className="w-2/6 bg-gray-900 p-4  rounded ">
          <div className="flex justify-end">
            <button className="text-2xl" onClick={() => setInputDiv('hidden')}>
              {' '}
              <RxCross2 />
            </button>
          </div>
          <input
            type="text"
            placeholder="Title"
            name="title"
            className="px-3 rounded w-full bg-gray-700 my-3 py-2"
          />
          <textarea
            name="desc"
            cols="30"
            rows="10"
            className="px-3 py-2 w-full rounded bg-gray-700"
            placeholder="Description"
          ></textarea>
          <button className="px-3 py-2 bg-blue-500 rounded text-white font-semibold my-3 text-xl">
            Submit
          </button>
        </div>
      </div>
    </>
  )
}

export default InputData
