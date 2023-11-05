import styled from "styled-components";

const Group = styled.div`
  width:${props=>props.width?props.width:"100%"};

  display:flex;
  flex-direction:${props=>props.direction?props.directin:"column"};
  justify-content:flex-start;
  align-items:center;
  padding:10px;

  &.alignRight{
    justify-content:flex-start;
    align-items:flex-end;
  }
`;

export default Group