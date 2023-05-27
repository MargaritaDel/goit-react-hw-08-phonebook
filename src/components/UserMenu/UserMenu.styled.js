import styled from '@emotion/styled';

export const ButtonLogOut  = styled.button`
    text-decoration: none;
    padding: 12px;
    font-weight: 700;
    color: yellow;
    background-color:  #231196;   
display: flex;
// justify-content: space-between;
// align-items: center;
border-radius:  solid transparent;
box-shadow: 0px 7px 5px -5px rgba(245, 244, 244);
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
  border-radius: 5px;
//   text-align: center;
  color:yellow;
  font-weight: 700;
`;