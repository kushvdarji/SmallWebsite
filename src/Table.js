import React from 'react'
import Addition from './Addition';
import { Link } from 'react-router-dom';
import "./App.css"

export default function Table() {
  return (
    <div>
    <Link to="/login/home/upload"><button id='but' style={{padding:"10px 10px 10px 10px",borderRadius:"15%"}}>Back</button></Link>
    <div className='card bg-secondary p-5'>
      <table className='table table-hover'>
        <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>       
        </thead>
        <tbody>
            <Addition></Addition>
        </tbody>
      </table>
      </div>

    </div>
  )
}
