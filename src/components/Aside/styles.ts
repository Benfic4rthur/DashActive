import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Container = styled.div`
  grid-area: AS;
  background-color: ${props => props.theme.colors.secondary};
  padding-left: 20px;
  height: 100vh;
  width: 250px;
  border-right: 1px solid ${props => props.theme.colors.gray};
`;
export const Header = styled.header`
  display: flex;
  align-items: center;
  width: 229px;
  height: 70px;
`;
export const LogImg = styled.img`
  height: 40px;
  width: 40px;
`;
export const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;
export const MenuItemLink = styled(Link)`
  color: ${props => props.theme.colors.info};
  text-decoration: none;
  margin: 10px 0;
  display: flex;
  align-items: center;
  opacity: 1;
  transition: opacity 0.4s;
  &:hover {
    opacity: 0.7;
  }
  > svg {
    font-size: 18px;
    margin-right: 10px;
  }
`;
export const Title = styled.h3`
  color: ${props => props.theme.colors.white};
  margin-left: 10px;
`;
export const Button = styled.button`
  color: ${props => props.theme.colors.info};
  text-decoration: none;
  margin: 10px 0;
  display: flex;
  align-items: center;
  opacity: 1;
  transition: opacity 0.4s;
  background-color: ${props => props.theme.colors.secondary};
  &:hover {
    opacity: 0.7;
  }
  > svg {
    font-size: 18px;
    margin-right: 10px;
  }
`;
