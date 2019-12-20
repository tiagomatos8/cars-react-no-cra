import React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button';

describe('Button Component Test Suite', () => {

  it('Render Button component with no props', () => {
    const component = renderer.create(<Button />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});
