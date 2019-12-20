import React from 'react';
import renderer from 'react-test-renderer';
import TitleSection from './TitleSection';

describe('TitleSection Component Test Suite', () => {

  it('Render TitleSection component with no props', () => {
    const component = renderer.create(<TitleSection />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  
});