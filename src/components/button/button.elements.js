
/* BEGIN style components*/
import styled from 'styled-components';

const BackgroundColors = {
  primary:{normal:'#0dcaf0',hover:'#20a4d2', fore:'#fff'},
  secondary:{normal:'#6c757d',hover:'#6c757d', fore:'#fff'},
  success:{normal:'#198754',hover:'#198754', fore:'#fff'},
  danger:{normal:'#dc3545',hover:'#dc3545', fore:'#fff'},
  warning:{normal:'#ffc107',hover:'#ffc107', fore:'#fff'},
  info:{normal:'#0dcaf0',hover:'#0dcaf0', fore:'#fff'},
  dark:{normal:'#f8f9fa',hover:'#f8f9fa', fore:'#fff'},
  light:{normal:'#212529',hover:'#212529', fore:'#fff'}
}

export const MainContainer = styled.div.withConfig({
  shouldForwardProp: (props) => 'backgroundColor' !== props,
})`

  background-color:${props=>BackgroundColors[props.backgroundColor].normal};
  padding:10px;
  padding-left:20px;
  padding-right:20px;
  border-radius:5px;
  cursor: pointer;
  border:1px solid #3c484c;
  color:${props=>BackgroundColors[props.backgroundColor].fore};
  &:hover{
    background-color:${props=>BackgroundColors[props.backgroundColor].hover};
    border:1px solid #fff;
  }

`

/* END style components*/