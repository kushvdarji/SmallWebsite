import React from 'react'
import { Link } from 'react-router-dom'

function Call() {
  return (
    <div>
      <h1>Hello</h1>
      <Link to="/login/home/about">Back</Link>
    </div>
  )
}

export default Call
