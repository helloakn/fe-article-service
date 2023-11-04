
/* BEGIN style components*/
import styled from 'styled-components';

const COLOR_SCHEMS = {
  default:{backgroundColor:'var(--secondary-bg-color)',hover:'var(--main-bg-color)', fore:'var(--secondary-fore-color)',border:'var(--secondary-fore-color)'},
  primary:{backgroundColor:'#0dcaf0',hover:'#20a4d2', fore:'#fff',border:'#3c484c'},
  secondary:{backgroundColor:'#6c757d',hover:'#6c757d', fore:'#fff',border:'#3c484c'},
  success:{backgroundColor:'#198754',hover:'#198754', fore:'#fff',border:'#3c484c'},
  danger:{backgroundColor:'#dc3545',hover:'#dc3545', fore:'#fff',border:'#3c484c'},
  warning:{backgroundColor:'#ffc107',hover:'#ffc107', fore:'#fff',border:'#3c484c'},
  info:{backgroundColor:'#0dcaf0',hover:'#0dcaf0', fore:'#fff',border:'#3c484c'},
  dark:{backgroundColor:'#f8f9fa',hover:'#f8f9fa', fore:'#fff',border:'#3c484c'},
  light:{backgroundColor:'#212529',hover:'#212529', fore:'#fff',border:'#3c484c'}
}

export const MainContainer = styled.div.withConfig({
  shouldForwardProp: (props) => 'backgroundColor' !== props,
})`

  background-color:${props=>COLOR_SCHEMS[props.backgroundColor].backgroundColor};
  padding:10px;
  padding-left:20px;
  padding-right:20px;
  border-radius:5px;
  cursor: pointer;
  border:1px solid ${props=>COLOR_SCHEMS[props.backgroundColor].border};
  color:${props=>COLOR_SCHEMS[props.backgroundColor].fore};
  &:hover{
    background-color:${props=>COLOR_SCHEMS[props.backgroundColor].hover};
  }

`

/* END style components*/