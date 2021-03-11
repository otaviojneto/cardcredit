import styled, { css } from 'styled-components';
import Colors from '../../styles/colors';

interface CardProps {
  isRorate: boolean;
}

// ------- form ------

export const Container = styled.div`
  background-color: ${Colors.greyMedium};
  height: 100vh;
  padding-top: 50px;
  perspective: 1000px;

  h1 {
    text-align: center;
    padding-bottom: 50px;
  }
`;

export const Base = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 30px;
`;

export const Fill = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;

  label {
    color: ${Colors.secondary};
    font-size: 12px;
    letter-spacing: 0.5px;
    line-height: 20px;
    padding-left: 10px;
  }

  input {
    border: 2px solid ${Colors.light};
    border-radius: 4px;
    font-size: 16px;
    height: 40px;
    padding: 10px;
    transition: 0.18s ease-in-out;
    width: 490px;

    &:focus {
      border: 2px solid ${Colors.black};
    }
  }
`;

export const Security = styled.div`
  display: flex;
  margin: 12px 0;

  input {
    width: 240px;
  }
`;

// ---- Card ---

export const Card = styled.div<CardProps>`
  max-height: 251px;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  display: flex;
  align-items: center;
  width: 400px;

  h6 {
    color: grey;
  }

  img {
    width: 60px;
  }

  ${props =>
    props.isRorate &&
    css`
      transform: rotateY(180deg);
    `}
`;

export const CardFront = styled.div`
  backface-visibility: hidden;
  background-color: ${Colors.warning};
  border-radius: 22px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  color: black;
  height: 54vw;
  max-height: 251px;
  margin: 0 auto;
  width: 400px;
  padding: 40px;
  position: absolute;

  span {
    display: flex;
    font-size: 50px;
    justify-content: space-between;
    padding-bottom: 30px;
  }
`;

export const Number = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
`;

export const Code = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardBack = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  backface-visibility: hidden;
  border-radius: 22px;
  background-color: ${Colors.warning};
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  color: black;
  height: 54vw;
  max-height: 251px;
  margin: 0 auto;
  width: 400px;
  padding: 20px;
  position: absolute;
  transform: rotateY(180deg);

  &::before {
    background-color: ${Colors.black};
    content: '';
    width: 400px;
    height: 40px;
    position: absolute;
    top: 40px;
    right: 0;
  }

  &::after {
    content: '';
    width: 280px;
    height: 30px;
    left: 20px;
    position: absolute;
    background-color: ${Colors.white};
  }
`;
