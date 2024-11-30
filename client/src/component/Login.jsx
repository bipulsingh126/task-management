import React, { useState } from "react";
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
 

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle login logic here
    }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">  
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">  
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>  
        <form onSubmit={handleSubmit}>  
          <div className="mb-4">  
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">  
              Email  
            </label>  
            <input  
              type="email"  
              id="email"  
              value={email}  
              onChange={(e) => setEmail(e.target.value)}  
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  
              placeholder="your.email@example.com"  
              required  
            />  
          </div>  
          <div className="mb-6">  
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">  
              Password  
            </label>  
            <input  
              type="password"  
              id="password"  
              value={password}  
              onChange={(e) => setPassword(e.target.value)}  
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  
              placeholder="********"  
              required  
            />  
          </div>  
          <button  
            type="submit"  
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"  
          >  
            Login  
          </button>  
        </form>  
      </div>  
    </div>  
  );
};

export default Login;
