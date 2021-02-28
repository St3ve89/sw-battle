import React from 'react';
import { Link } from 'react-router-dom';
import { Switches } from '../switches';
import { Container } from './header.style';
import * as ROUTES from '../../constants/routes';
import Button from '@material-ui/core/Button';
import { IPropsForToggle } from '../../types/types';

const Header: React.FC<IPropsForToggle> = ({ toggleTheme }) => {
  return (
    <Container>
      hello
      <Button variant="contained" color="primary">
        <Link to={ROUTES.HOME}>Back to main screen</Link>
      </Button>
      <Button variant="contained" color="primary">
        <Link to={ROUTES.RESULTS}>See Results</Link>
      </Button>
      <Switches toggleTheme={toggleTheme} />
    </Container>
  );
};

export { Header };
