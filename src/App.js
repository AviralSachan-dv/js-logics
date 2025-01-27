import React from 'react'
import Registration from './Components/Registration'
import { BrowserRouter , Routes, Route} from 'react-router-dom'
import List from './Components/List'

function App() {
  return (
    <div>
  
   <BrowserRouter>
   <Routes>
   <Route path='/' element ={  <List/>}/> 
    <Route path='/registration' element ={  <Registration/>}/> 

   </Routes>
   </BrowserRouter>
   
   </div>
  )
}

export default App
