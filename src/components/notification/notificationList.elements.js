/* begin style components*/
import styled from 'styled-components';



export const MainContainer = styled.div.withConfig({
  shouldForwardProp: (props) => 'isShow' !== props,
})`
  position:fixed;
  z-index:1000;

  width:20vw;
  height:500px;
  margin-right:0px;
  margin-left:78vw;
  margin-top:100px;

  overflow-x:auto;
  background-color:var(--main-bg-color);

  border-radius:10px;
  
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display:${props=>props.isShow?"flex":"none"};

`
/* end style components*/