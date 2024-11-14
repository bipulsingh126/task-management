import { useState } from 'react'
import './App.css'
import Home from './pages/Home.jsx'
import { Routes , Route} from 'react-router-dom';
import AllTask from './pages/AllTask.jsx'
import Important from './pages/Important.jsx';
import Complete from './pages/Complete.jsx';
import Incomplete from './pages/Incomplete.jsx';

function App() {
  
  return (
    <div className='bg-gray-900 text-white h-screen p-2 relative ' >
      <Routes>
        <Route  path='/' element={<Home/>}> 
        <Route index element={<AllTask/>} /> 
        <Route path='/importantTask' element={<Important/>} /> 
        <Route path='/completeTask' element={<Complete/>} /> 
        <Route path='incompleteTask' element={<Incomplete/>} /> 

        
        </Route>
        
      </Routes>
    </div>
  )
}

export default App
