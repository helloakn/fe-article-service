import styled from "styled-components";

const Row = styled.div.withConfig({
  shouldForwardProp: (props) => 'justifyContent' !== props,
})`
  width:${props=>props.width?props.width:"100%"};

  display:flex;
  flex-direction:${props=>props.direction?props.direction:"column"};
  justify-content:${props=>props.justifyContent?props.justifyContent:"flex-start"};
  align-items:${props=>props.alignItems?props.alignItems:"flex-start"};

  &.halfWidth{
    width:50%;
  }
`;

export default Row