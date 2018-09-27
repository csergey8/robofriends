import { shallow, mount, render } from 'enzyme';
import Card from './Card';
import React from 'react';

it('expect to render Card compoenent', () =>  {
  expect(shallow(<Card />).length).toEqual(1);
  expect(shallow(<Card />)).toMatchSnapshot();
});