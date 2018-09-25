import React from 'react'

export default (props) => {
  return (
    <div className="pa3 ba b--green bg-lightest-blue">
      <label for="search"></label>
      <input
      id="search"
      aria-label="Search Robots"
      onChange={props.searchChange} 
      type="search" 
      placeholder="Enter Robot Name" />
    </div>
  )
}
