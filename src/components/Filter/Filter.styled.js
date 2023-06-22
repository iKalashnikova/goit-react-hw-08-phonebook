import styled from '@emotion/styled'

export const FilterInput = styled.input`
padding: 8px;
font-size: 18px;
border-radius: 4px;
border: none;
margin-top: 8px;
background-color: #e8f0fe;
border: 1px solid #ccc;
box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
transition: background-color 0.2s, box-shadow 0.2s;
// width: 90%;

&:focus {
  outline: none;
  background-color: #d9e7fd;
  box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.2);
}`

export const LabelFilter = styled.label`
display: flex;
// width: 300px;
flex-direction: column;
margin-bottom: 16px;
font-size: 18px;
color: #555;`