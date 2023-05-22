import React from 'react';

import { render } from '@testing-library/react-native';
import App from '../App';

describe('Render successfully', () => {
  it('renders App sucessfully', () => {
    const { toJSON } = render(<App/>);

    expect(toJSON()).toMatchSnapshot();
  });

  it('renders home components sucessfully', async () => {
    const { getByText, getByTestId } = render(<App/>);

    const button = await getByText('Entrar');
    const TitleHome = await getByTestId('textHome');

    expect(button).toBeTruthy();
    expect(TitleHome).toBeTruthy();
  });
});