import React from 'react'
import {Link} from 'react-router-dom'

export default function Navigation() {
  return (
    <div>
        <h1>Tasks App</h1>
        <Link to="/">Home</Link> | 
        <Link to="/tasks">Tasks</Link> | 
        <Link to="/tasks-create">Task Create</Link>
    </div>
  )
}
