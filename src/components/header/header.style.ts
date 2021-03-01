import styled from 'styled-components';

export const Container = styled.div`
  height: 64px;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
`;

export const Logo = styled.div`
  font-weight: bold;
  font-size: 35px;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 1030px) {
    font-size: 18px;
  }
`;
