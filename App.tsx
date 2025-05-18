

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './container/Home'
import Login from './component/Login'
import logou from './component/logou';

function App() {
  

  return (
    <>
      <Routes>
        <Route path='Login' element={<Login/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/logou' element={<logou/>}/>
      </Routes>

    </>
  )
}

export default App
