import React, { useContext } from 'react';
import Switch from '@material-ui/core/Switch';
import { Container, SwitchesText } from './switches.style';
import { IPropsForToggle } from '../../types/types';
import { ThemeContext } from 'styled-components';

const Switches: React.FC<IPropsForToggle> = ({ toggleTheme }) => {
  const { title } = useContext(ThemeContext);

  return (
    <>
      <Container>
        <SwitchesText>Light</SwitchesText>
        <Switch
          checked={title === 'dark'}
          onChange={toggleTheme}
          name="checkedA"
          color="primary"
        />
        <SwitchesText>Dark</SwitchesText>
      </Container>
    </>
  );
};

export { Switches };
