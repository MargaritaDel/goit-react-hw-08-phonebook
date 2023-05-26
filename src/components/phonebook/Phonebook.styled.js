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

  display: flex;
  flex-direction: row;

  justify-content: space-between;
  top: 80px;


`;
export const Title = styled.h1`
  writing-mode: vertical-lr; /* Вертикальное направление слева направо */
  text-orientation: upright; /* Поворот текста в вертикальном направлении */
  color: yellow;
  animation: ${wiggleAnimation} 1s ease-in-out 5;
`;