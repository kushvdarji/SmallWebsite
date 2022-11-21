import React from 'react'
import { NavLink } from 'react-router-dom'

function About() {
  return (
    <>
    <NavLink to="/login/home">Back</NavLink>
    <div>
      <h1>Hello About</h1>
    </div>
    </>
  )
}

export default About
