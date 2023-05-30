import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
export const Nav = styled.nav`
& a {
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: yellow;
}
& .active {
  color: white;
}
`;

export const NavPages = styled(NavLink)`
  position: relative;
  ::after {
    content: '';
    width: 100%;
    height: 2px;
    background-color: -webkit-link;
    transition: transform 0.25s cubic-bezier(0.075, 0.82, 0.165, 1);
    display: block;
    position: absolute;
    bottom: -2px;
    left: 0;
    transform: scale(0);
  }
  .active::after {
    background-color: white;
  }
  :hover::after {
    transform: scale(1);
  }
  span {
    display: inline-block;
    font-size: 20px;
  }
`;