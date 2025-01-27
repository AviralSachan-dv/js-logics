import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function List() {
   const navigate =  useNavigate()
    
  return (
    <NavLink to={"/registration"} >
        <button >

        Add table</button>
    </NavLink>
  )
}

export default List