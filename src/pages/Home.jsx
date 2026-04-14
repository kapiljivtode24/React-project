import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Kya dekh raha hai ??</h1>
       <Link to="/dashboard">  <h2>Dashboard</h2></Link> 
    </div>
  )
}

export default Home
