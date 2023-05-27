import styled from '@emotion/styled';

export const ButtonLogOut  = styled.button`
display: flex;
justify-content: center;
padding: 8px 10px;
border-radius: 5px;
background-color: yellow;
color: blue;
font-size: 16px;
cursor: pointer;
box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
  rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
  rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  & .active {
    color: white;
  }

`;

export const GreetingUser = styled.h1 `
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 16px;
  color:yellow;
  font-weight: 700;
`;

export const MenuUser = styled.div `
display: flex;
align-items: center;
gap: 20px;
`;