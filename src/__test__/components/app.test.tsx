import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { App } from '../../components/app';
import { ThemeProvider } from 'styled-components';
import { MockedProvider } from '@apollo/client/testing';
import { ALL_PERSON } from '../../queries/people';

describe('<App />', () => {
  const theme = {
    title: 'dark',

    colors: {
      background: '#000',
      text: '#fff',
      border: '#FFE81F',
    },
  };

  const mocks = [
    {
      request: {
        query: ALL_PERSON,
      },
      result: {
        data: {
          allPeople: {
            people: [
              {
                id: 'cGVvcGxlOjE=',
                name: 'Luke Skywalker',
                height: 172,
              },
              {
                id: 'cGVvcGxlOjI=',
                name: 'C-3PO',
                height: 167,
              },
            ],
          },
        },
      },
    },
  ];

  it('renders <App /> with populated data', () => {
    const { getByText } = render(
      <MockedProvider mocks={mocks}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </MockedProvider>
    );

    expect(getByText('Star Wars Battle Ground')).toBeTruthy();
  });

  it('should toggle the theme', () => {
    const { getByRole } = render(
      <MockedProvider mocks={mocks}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </MockedProvider>
    );

    getByRole('checkbox').click();
    fireEvent.change(getByRole('checkbox'), { target: { checked: '' } });

    expect(window.localStorage.getItem('theme')).toBe(JSON.stringify(theme));
  });
});
