import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    margin: 0;
    font-family: Arial, sans-serif;
    transition: all 0.3s;
  }

  a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.form.border};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.form.background};

  input,
  select,
  button {
    padding: 0.5rem;
    border: 1px solid ${({ theme }) => theme.form.inputBorder};
    border-radius: 4px;
    font-size: 1rem;
    background-color: ${({ theme }) => theme.form.inputBackground};
    color: ${({ theme }) => theme.form.inputText};
  }

  button {
    background-color: ${({ theme }) => theme.form.buttonBackground};
    color: ${({ theme }) => theme.form.buttonText};
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${({ theme }) => theme.form.buttonHoverBackground};
    }
  }

  select {
    appearance: none;
    background-color: ${({ theme }) => theme.form.inputBackground};
  }
`;

export const DivRow = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Container2 = styled.div`
  margin-bottom: 20px;
  padding: 10px;
`;