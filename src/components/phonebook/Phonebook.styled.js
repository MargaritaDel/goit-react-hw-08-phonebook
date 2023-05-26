import styled, { keyframes } from 'styled-components';

const wiggleAnimation = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  25% {
    transform: rotateZ(-5deg);
  }
  75% {
    transform: rotateZ(5deg);
  }
  100% {
    transform: rotateZ(0deg);
  }
`;

export const ContainerSettings = styled.div`
  /* position: fixed; */
  display: flex;
  flex-direction: row;
  /* min-width: 900px; */
  /* gap: 100px; */
  justify-content: space-between;
  top: 80px;
  /* max-width: 360px; */
  /* min-width: 300px; */
  /* z-index: 2; */
  /* background-color: white; */
  /* padding: 0 6%; */
  /* padding-left: auto; */
  /* width: 90%; */
  /* left: 6%; */
  /* right: 6%; */
  /* margin: 6px auto;
  max-width: 800px; */
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: center; */
  /* align-items: center; */
`;
export const Title = styled.h1`
  writing-mode: vertical-lr; /* Вертикальное направление слева направо */
  text-orientation: upright; /* Поворот текста в вертикальном направлении */
  color: red;
  animation: ${wiggleAnimation} 1s ease-in-out 5;
`;