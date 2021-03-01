import React from 'react';
import { render } from '@testing-library/react';
import { Header } from '../../components/header';
import { ThemeProvider } from 'styled-components';

describe('<Header />', () => {
  const theme = {
    title: 'dark',

    colors: {
      background: '#000',
      text: '#fff',
      border: '#FFE81F',
    },
  };
  it('renders <Header /> with populated data', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );

    expect(getByText('Star Wars Battle Ground')).toBeTruthy();
  });
});
