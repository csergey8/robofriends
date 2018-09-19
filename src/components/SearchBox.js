import React from 'react'

export default (props) => {
  return (
    <div className="pa3 ba b--green bg-lightest-blue">
      <input
      onChange={props.searchChange} 
      type="search" 
      placeholder="Enter Robot Name" />
    </div>
  )
}
