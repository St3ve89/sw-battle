import React from 'react';
import { Switches } from '../switches';
import { Container, Logo } from './header.style';
import { IPropsForToggle } from '../../types/types';

const Header: React.FC<IPropsForToggle> = ({ toggleTheme }) => {
  return (
    <Container>
      <Logo>Star Wars Battle Ground</Logo>
      <Switches toggleTheme={toggleTheme} data-testid="switcher" />
    </Container>
  );
};

export { Header };
