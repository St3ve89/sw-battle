import React from 'react';
import { render } from '@testing-library/react';
import { Home } from '../../pages/home';
import { ThemeProvider } from 'styled-components';
import { MockedProvider } from '@apollo/client/testing';
import { ALL_PERSON } from '../../queries/people';

describe('<Home />', () => {
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

  const addResult = () => {};

  it('renders <Home /> without error', () => {
    const { getByText } = render(
      <MockedProvider mocks={mocks}>
        <ThemeProvider theme={theme}>
          <Home addResult={addResult} />
        </ThemeProvider>
      </MockedProvider>
    );
    expect(
      getByText('Your fighters will be loaded soon..')
    ).toBeInTheDocument();
  });
});
