import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 350px;
`;
export const Form = styled.form`
  border: 1px solid #000000;
  padding: 5px;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
`;

export const AddBtn = styled.button`
  cursor: pointer;
  &:hover {
    background-color: #0066cc;
  }
`;
