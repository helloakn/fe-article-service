import styled from 'styled-components';

export const NavigationToggle = styled.div`
  width:40px;
  height:40px;
  border-radius:50%;
  background-color: var(--main-bg-color);
  margin-left:5px;

  display:flex;
  justify-content:center;
  align-items:center;

  .navigationtoggle{
    font-size:16px;
    color:var(--main-fore-color);
  }

  &:hover{
    background-color:var(--main-fore-color);
  }

  &:hover .navigationtoggle{
    color:var(--secondary-fore-color);
  }
`

export default NavigationToggle