import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../';
import ShallowRenderer from 'react-test-renderer/shallow';

test('smoke testing Header component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
});

// Snapshot testing Header component
test('Shallow rendering Header component', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Header />);
  //   console.log(renderer.getRenderOutput());
  //   console.log(renderer.getRenderOutput().props.children);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
