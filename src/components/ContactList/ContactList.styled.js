import styled from '@emotion/styled';

export const ContainerList = styled.ul`
top: 460px;
padding: 0;
min-width: 300px;
display: flex;
gap: 4px;
flex-direction: column;
justify-content: start;
align-items: flex-start;
overflow: auto;
`;

export const ContainerItem = styled.li`
padding: 6px 0;
min-width: 300px;
display: flex;
gap: 16px;
flex-direction: colum;
justify-content: left;
align-items: center;
color:white;
`;


export const Title = styled.h2`
  display: block;
  color: white;
`;

export const DeleteButton = styled.button`
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
`;