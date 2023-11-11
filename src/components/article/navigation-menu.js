
/* BEGIN style components*/
import styled from 'styled-components';

export const MainContainer = styled.div.withConfig({
  shouldForwardProp: (props) => 'backgroundColor' !== props,
})`

height:100%;
background-color: blue;

display:flex;

  &.hide{
    display: none;
  }

  &.show{
    display: flex;
  }
`
/* END style components*/

export default function NavigationMenu({ children, ...props }) {
  return <>
    <MainContainer>tes
    </MainContainer>
  </>
}