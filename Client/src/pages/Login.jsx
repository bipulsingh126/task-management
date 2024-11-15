import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className=" h-[90vh] flex items-center justify-center ">
      <div className="p-4 w-2/6 rounded bg-gray-800  ">
        <div className="text-2xl font-semibold">Login</div>
        <input
          type="username"
          placeholder="username"
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
            Login
          </button>
          <Link to="/signup" className="text-gray-400 hover:text-gray-200">
            Not having an account? signup here{' '}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
