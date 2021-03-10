import styled from 'styled-components';
import Colors from '../../styles/colors';

export const Container = styled.div`
  background-color: ${Colors.greyMedium};

  h1 {
    margin-top: 10px;
    text-align: center;
  }

  div {
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
  }
`;

export const Card = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    font-size: 12px;
    line-height: 20px;
    color: ${Colors.secondary};
    padding-left: 10px;
  }

  input {
    border: 2px solid ${Colors.light};
    border-radius: 4px;
    height: 40px;
    width: 490px;
  }
`;

export const Security = styled.div`
  input {
    width: 240px;
  }
`;
