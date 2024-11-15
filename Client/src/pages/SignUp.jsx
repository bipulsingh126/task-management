import React from 'react'
import { Link } from 'react-router-dom'
const SignUp = () => {
  return (
    <div className=" h-[90vh] flex items-center justify-center ">
      <div className="p-4 w-2/6 rounded bg-gray-800  ">
        <div className="text-2xl font-semibold">Signup</div>
        <input
          type="username"
          placeholder="username"
          className="bg-gray-700 px-3 py-2 my-3 w-full rounded"
          required
        />
        <input
          type="email"
          placeholder="example@email.com"
          className="bg-gray-700 px-3 py-2 my-3 w-full rounded"
          required
        />
        <input
          type="password"
          placeholder="password"
          className="bg-gray-700 px-3 py-2 my-3 w-full rounded"
          required
        />
        <div className="w-full flex justify-between items-center">
          <button className="bg-blue-400 text-xl font-semibold text-black px-3 py-2 rounded">
            SignUp
          </button>
          <Link to="/login" className="text-gray-400 hover:text-gray-200">
            Alredy having an account? login here{' '}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignUp
