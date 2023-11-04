import styled from 'styled-components';



export const MainContainer = styled.div.withConfig({
  shouldForwardProp: (props) => 'isShow' !== props,
})`
width:60%;
display: flex;
justify-content: center;
align-items: center;
padding-top:20px;
padding-bottom:25px;

`

export const DivBody = styled.div.withConfig({
  shouldForwardProp: (props) => 'isShow' !== props,
})`
width:60%;
display: flex;
flex-direction: row;
justify-content: space-between;
padding-top:20px;

`

export const ATab = styled.a.withConfig({
  shouldForwardProp: (props) => 'isActive' !== props,
})`
  background-color: ${props=>props.isActive?" var(--main-fore-color)":" var(--secondary-bg-color)"};
  border:1px solid  var(--main-fore-color);
  border-radius: 5px;
  padding:15px;
  color:  ${props=>props.isActive?" var(--main-bg-color)":" var(--secondary-fore-color)"};
  text-decoration: none;
  cursor:pointer;

  &:hover{
    background-color: var(--secondary-fore-color);
    color:var(--secondary-bg-color);

  }
`