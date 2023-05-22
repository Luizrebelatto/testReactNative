import React from 'react';

import { render, fireEvent, act } from '@testing-library/react-native';
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

  //it('renders home components sucessfully', async () => {
    //const { getByText } = render(<App/>);

    //const button = await getByText('Entrar');

    //await getByText('Voce não está logado');

    //fireEvent.press(button);

    //await getByText('Voce está logado');
  //});

  it('call github api when user clicked login button', async () => {
    const { getByText } = render(<App/>);

    const button = await getByText('Entrar');

    await act(() => fireEvent.press(button)); 

    

    jest.advanceTimersByTime(1000);

    await getByText('Luiz Gabriel');
  })

});