import React from 'react';

import { render } from '@testing-library/react-native';
import App from '../App';

describe('Render successfully', () => {
  it('renders App sucessfully', () => {
    const { toJSON } = render(<App/>);

    expect(toJSON()).toMatchSnapshot();
  })
});