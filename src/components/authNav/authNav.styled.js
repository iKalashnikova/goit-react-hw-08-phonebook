import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #333;
  padding: 5px 10px;
  border-radius: 5px;

  &:hover {
    background-color: #f0f0f0;
  }

  &.active {
    background-color: #ccc;
  }
`;
  

export const Nav = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  li {
    margin-right: 10px;
  }
`;