/* begin style components*/
import styled from 'styled-components';

export const MainContainer = styled.div`
  height:100%;  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left:10px;
  padding-right:10px;
  
  &:hover{
    color:var(--secondary-fore-color);
  }
  &:hover i{
    color:var(--secondary-fore-color);
  }
`
export const Icon = styled.i`
  color:var(--main-fore-color);
  width:5%;
  text-align: center;
  font-size:20px;
`
export const Label = styled.label`
  margin-left:5px;
  font-size:12px
`
/* end style components*/

const icons = {
  'home': 'fas fa-home',
  'search' : 'fas fa-search',
  'content' : 'fas fa-file-alt',
  'video' : 'fas fa-video',
  'chart' : 'fas fa-chart-line'
}
export default function IconText({ children, ...props }) {
  return (
  <MainContainer>
    <Icon className={`${icons[props.icon]} `} />
    <Label>{props.text}</Label>
  </MainContainer>
  )
}