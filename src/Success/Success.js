import React from 'react'
import { Link } from 'react-router-dom'

const Success = () => {
    
  return (
    <div>
        <nav>
            <Link to="/timetable">Timetable</Link>
            <Link to="/examday">Examday</Link>
            <Link to="/stopwatch">Stopwatch</Link>
        </nav>
    </div>
  )
}

export default Success

