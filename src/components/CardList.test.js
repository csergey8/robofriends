import { shallow, mount, render } from 'enzyme';
import CardList from './CardList';
import React from 'react';

it('expect to render CardList compoenent', () =>  {
  const mockRobots = [
    {
      id: 1,
      name: 'John Snow',
      username: 'JohnJohn',
      email: 'john@gmail.com'
    }
  ]
  expect(shallow(<CardList robots={mockRobots} />).length).toEqual(1);
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});