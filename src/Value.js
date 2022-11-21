import React from 'react'
import {NavLink} from "react-router-dom"
function Value() {
  return (
    <>
        <NavLink to="/login/home">Back</NavLink>

    <div>
        <table className='table' style={{width:"100%"}}>
            <tr>
                <th>Number</th>
                <th>Name</th>
                <th>Email</th>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
            </tr>
        </table>
    </div>
    </>
  )
}

export default Value;
