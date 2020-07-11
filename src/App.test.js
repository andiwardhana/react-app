import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


test('Change Language', () => {
  const component = renderer.create(
  <App />  
  )
let tree = component.toJSON();
expect(tree).toMatchSnapshot()

component.getInstance()._handleClick();
tree = component.toJSON();
expect(tree).toMatchSnapshot();

component.getInstance()._handleClick();
tree = component.toJSON();
expect(tree).toMatchSnapshot();


});

test('5 tambah 5 adalah 10', () => {
  expect(5 + 5).toBe(10);
})

test('obyek equality', () => {
  const iniObject = {pertama: 1}
  iniObject['kedua'] = 2

  expect(iniObject).toEqual({
    pertama: 1,
    kedua: 2
  })
})
let sesuatu;
expect(sesuatu).toBeUndefined();

let iniNull = null;
expect(iniNull).toBeNull();
expect(iniNull).toBeDefined();

expect(false).toBeFalsy();
expect(true). toBeTruthy();

let number = 4;
expect(number).toBeGreaterThan(3);
expect(number).toBeGreaterThanOrEqual(4);
expect(number).toBeLessThan(4.5);

let kata = 'NgapNgap'
expect(kata).not.toMatch(/n/);
expect(kata).toMatch(/N/);

let array = [1,2,3];
expect(array).toContain(3);