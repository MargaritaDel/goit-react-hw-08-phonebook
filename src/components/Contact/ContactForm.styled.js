import styled from '@emotion/styled';

export const ContactFormContainer = styled.form`
padding: 12px;
min-width: 300px;
display: flex;
gap: 16px;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top:30px;
border-radius: 10px;
border: 2px white;
 box-shadow: rgb(0 0 0 / 20%) 0px 9px 9px -6px,
    rgb(0 0 0 / 14%) 0px 9px 12px 0px, rgb(0 0 0 / 12%) 0px 3px 24px 0px;
`;

export const ContactFormInput = styled.label`
padding: 12px;
display: flex;
gap: 16px;
flex-direction: column;
justify-content: center;
align-items: center;
border: 2px grey;
border-radius: 7px;
  box-shadow: rgb(0 0 0 / 20%) 0px 9px 9px -6px,
    rgb(0 0 0 / 14%) 0px 9px 12px 0px, rgb(0 0 0 / 12%) 0px 3px 24px 0px; */
  border-radius: 7px;
  color:white
`;

export const ContactFormButton = styled.button`
display: flex;
justify-content: center;
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


export const ContactInput = styled.input`
width: 250px;
padding: 5px;
border-radius: 5px;
font-size: 14px;
`;
