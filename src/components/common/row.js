import styled from "styled-components";

const Row = styled.div.withConfig({
  shouldForwardProp: (props) => 'justifycontent' !== props,
})`
  width:${props=>props.width?props.width:"100%"};

  display:flex;
  flex-direction:${props=>props.direction?props.direction:"column"};
  justify-content:${props=>props.justifycontent?props.justifycontent:"flex-start"};
  align-items:${props=>props.alignitems?props.alignitems:"flex-start"};

  &.halfWidth{
    width:50%;
  }
`;

export default Row