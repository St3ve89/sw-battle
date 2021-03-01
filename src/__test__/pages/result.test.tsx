import React from 'react';
import { render } from '@testing-library/react';
import { Results } from '../../pages/results';
import { ThemeProvider } from 'styled-components';
import { MockedProvider } from '@apollo/client/testing';
import { ALL_PERSON } from '../../queries/people';
import { generateRandomId } from '../../helpers/utils';
import { BrowserRouter as Router, Route } from 'react-router-dom';

describe('<Results />', () => {
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
  const randomId = generateRandomId();

  const mockResult = [
    {
      personOne: { name: 'C-3PO', value: 167 },
      personTwo: { name: 'Luke Skywalker', value: 172 },
      id: randomId(),
    },
  ];

  it('renders <Results /> without error', () => {
    const { getByText } = render(
      <MockedProvider mocks={mocks}>
        <ThemeProvider theme={theme}>
          <Router>
            <Route>
              <Results results={mockResult} />
            </Route>
          </Router>
        </ThemeProvider>
      </MockedProvider>
    );
    expect(getByText('C-3PO')).toBeInTheDocument();
    expect(getByText('Luke Skywalker')).toBeInTheDocument();
  });
});
