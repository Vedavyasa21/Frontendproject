import React from 'react'
import { Link } from 'react-router-dom'
import './TopNav.css'

export default function TopNav() {
  return (
    <header className="top-header">
      <div className="brand">HOME STAY CONNECT</div>
      <nav className="top-nav">
        <Link to="/home">Home</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/dashboard">Bookings</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <div className="location">Current Location</div>
    </header>
  )
}
