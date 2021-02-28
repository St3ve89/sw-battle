import React from 'react';
import { Container } from './card.style';

const Card: React.FC = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

export { Card };
