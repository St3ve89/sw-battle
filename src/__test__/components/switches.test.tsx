import React from 'react';
import { render } from '@testing-library/react';
import Switch from '@material-ui/core/Switch';
import {
  Container,
  SwitchesText,
} from '../../components/switches/switches.style';
import { ThemeProvider } from 'styled-components';

describe('<Switches />', () => {
  const theme = {
    title: 'dark',

    colors: {
      background: '#000',
      text: '#fff',
      border: '#FFE81F',
    },
  };

  it('renders <Switches /> with populated data', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Container>
          <SwitchesText>Light</SwitchesText>
          <Switch
            checked={theme.title === 'dark'}
            name="checkedA"
            color="primary"
          />
          <SwitchesText>Dark</SwitchesText>
        </Container>
      </ThemeProvider>
    );

    expect(getByText('Light')).toBeTruthy();
    expect(getByText('Dark')).toBeTruthy();
  });
});
