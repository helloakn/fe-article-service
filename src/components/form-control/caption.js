import styled from "styled-components";

const Caption = styled.label`
  width:100%;

  display:flex;
  flex-direction:column;

  padding-top:5px;
  padding-bottom:5px;

  color:${props=>props.color?props.color:"#fff"};
`;

export default Caption

