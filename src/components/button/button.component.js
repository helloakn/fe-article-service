
import {
  MainContainer
} from './button.elements'

export default function Button({ children, ...props }) {

  const onClick=(e)=>{
    e.preventDefault();
    
    window.location = props.href
  }
  const backgroundColor = props.buttonType||'primary'
  return (
    <MainContainer 
      isShow={props.isShow}
      backgroundColor={backgroundColor}
      onClick={props.onClick?props.onCLick:onClick}
    >
      {props.caption}
    </MainContainer>
  )
}
/*
USAGE : =>

  <Button
    caption="Setup"
    href="demo/setup"
    buttonType="default"
  />
  
*/