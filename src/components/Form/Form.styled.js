import styled from '@emotion/styled'

export const FormEl = styled.form`
display: flex;
flex-direction: column;
// width: 90%;
margin-bottom: 32px;
background-color: #f4f4f4;
border-radius: 8px;
padding: 16px;
box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);`

export const LabelEl = styled.label`
display: flex;
flex-direction: column;
margin-bottom: 16px;
font-size: 18px;
color: #333;
  `

export const InputContact = styled.input`
padding: 8px;
font-size: 18px;
border-radius: 4px;
border: none;
margin-top: 8px;
background-color: #ebebeb;
&:focus {
  outline: none;
  background-color: #d4d4d4;
}
  `

export const InputSubmit = styled.button`
background-color: #50a3a2;
color: white;
border: none;
border-radius: 4px;
padding: 12px;
font-size: 16px;
cursor: pointer;
margin-top: 16px;
&:hover {
  background-color: #408c8a;
}
  `