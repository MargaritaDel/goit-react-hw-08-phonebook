import styled from '@emotion/styled';

export const Nav = styled.nav`
height: 32px;
margin: 0;
line-height: 43px;
padding: 5px 10px;

font-size: 1rem;
font-weight: 600;
color:black;
border-radius: 5px;

&:hover {
  color: black;
  background-color: yellow;
  box-shadow: inset 0px 2px 4px rgb(244 0 255 / 30%),
    inset 0px 4px 8px rgb(127 0 255 / 30%),
    inset 0px 8px 16px rgb(255 0 240 / 30%);
  transition: 0.2s;
  transform: translateY(2px);
}
`;
