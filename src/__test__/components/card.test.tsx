import React from 'react';
import { render } from '@testing-library/react';
import { Card } from '../../components/card';
import { ThemeProvider } from 'styled-components';

describe('<Card />', () => {
  const theme = {
    title: 'dark',

    colors: {
      background: '#000',
      text: '#fff',
      border: '#FFE81F',
    },
  };
  it('renders <Card /> with populated data', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Card>
          <h2>Player One</h2>
        </Card>
      </ThemeProvider>
    );

    expect(getByText('Player One')).toBeTruthy();
  });
});
