import React from 'react';
import renderer from 'react-test-renderer';
import Column from './Column';

describe('Column Component Test Suite', () => {

  it('Render Column component with no props', () => {
    const component = renderer.create(<Column />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});