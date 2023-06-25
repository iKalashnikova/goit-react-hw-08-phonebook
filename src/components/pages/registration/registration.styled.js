import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
//   height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Label = styled.label`
  font-size: 18px;
`;

export const Input = styled.input`
  padding: 5px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const LoginLink = styled(Link)`
  font-size: 16px;
  color: #007bff;
`;