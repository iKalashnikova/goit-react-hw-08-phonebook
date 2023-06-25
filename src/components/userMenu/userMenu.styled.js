import styled from '@emotion/styled'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const WelcomeMessage = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

export const LogoutButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    background-color: #0056b3;
  }
`