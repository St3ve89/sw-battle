import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IButtonProps } from '../types/types';

export const Container = styled.div`
  padding: 24px;
  display: flex;
  width: 1024px;
  margin: auto;
  flex-direction: column;
  @media (max-width: 1030px) {
    width: 100%;
  }
`;

export const Title = styled.div`
  margin: 24px 0;
  font-size: 32px;
  font-weight: bold;
`;

export const Button = styled.button<IButtonProps>`
  display: block;
  background: #2e67f8;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 0.875rem;
  font-weight: bold;
  line-height: 1.75;
  border-radius: 4px;
  letter-spacing: 0.02857em;
  cursor: pointer;
  padding: 6px 16px;
  text-decoration: none;
  box-sizing: border-box;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;
  margin-bottom: ${({ marginBottom }) => `${marginBottom}px`};
  &:focus,
  &:active {
    outline: none;
  }

  &:hover {
    box-shadow: 0 5px 15px rgba(46, 103, 248, 0.4);
  }
`;

export const CustomButtonLink = styled(Link)<IButtonProps>`
  display: block;
  background: #eb212e;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 0.875rem;
  font-weight: bold;
  line-height: 1.75;
  border-radius: 4px;
  letter-spacing: 0.02857em;
  cursor: pointer;
  padding: 6px 16px;
  text-decoration: none;
  box-sizing: border-box;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;
  margin-bottom: ${({ marginBottom }) => `${marginBottom}px`};

  &:hover {
    box-shadow: 0 5px 15px rgba(235, 33, 46, 0.4);
  }
`;
