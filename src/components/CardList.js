import React from 'react';
import Card from './Card';

export default ({robots}) => {
  const renderCards = robots.map(robot => {
    return <Card id={robot.id} name={robot.name} email={robot.email} key={robot.id}/>
  })
  return (
    <div>
      {renderCards}
    </div>
  )
}
