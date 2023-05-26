import styled from '@emotion/styled';

export const FormLogin = styled.form`
display: flex;
flex-direction: column;
align-items: center;
margin: 180px auto;
padding: 40px 20px;
max-width: 350px;
gap: 20px;

background-repeat: no-repeat;
background: yellow
  radial-gradient(circle at 50% 0, white, yellow);

box-shadow: inset rgba(0, 0, 0, 0.6) 0 -3px 8px,
 
`;

export const LabelLogin = styled.label`
font-size: 18px;
font-weight: 600;
color:  blue;
`;
export const InputLogin  = styled.input`
display: flex;
flex-direction: column;
gap: 5px;
font-size: 12px;
`;

export const ButtonLogin  = styled.button`
display: block;
width: 175px;
padding: 8px 10px;
border-radius: 5px;
background-color: #4d4292;
font-size: 16px;
color: #f5f5f5;
cursor: pointer;
box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
  rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
  rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
& .hover {
  background-color:orange;
}

`;