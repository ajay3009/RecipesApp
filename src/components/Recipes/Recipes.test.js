import { render } from '@testing-library/react';
import React from 'react';
import Recipes from './Recipes';

test('renders ', () => {
    const {container} = render(<Recipes />);
    expect(container.getElementsByClassName('title').length).toBe(1);
  });
