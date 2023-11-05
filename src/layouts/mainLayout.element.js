/* begin style components*/
import styled from 'styled-components';

export const MainContainer = styled.div`
  background-color: var( --main-bg-color);
  min-width: 100vw;
  min-height: 100vh;

  display:flex;
  flex-direction: column;
`
export const MainHeader = styled.div`
  background-color: var( --secondary-bg-color);
  min-width: 90vw;
  min-height: 16vh;
  position: fixed;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:center;
`

export const MainHeaderBanner = styled.div`
 width:95%;
  height: 15vh;

  display:flex;
  flex-direction:row;
`

export const DivLine = styled.div`
  width: 100vw;
  height:2px;
display:flex;
background: linear-gradient(90deg, #1fa4d350 0%, #07759b90 34%, #07759b90 61%, #1fa4d350 100%);
`

export const LogoContainer = styled.div`
  width: 20%;
  height:100%;

display:flex;
flex-direction:row;
justify-content:flex-start;
align-items:center;
`
export const LogoText = styled.div`
height:100%;

display:flex;
flex-direction:row;
justify-content:flex-start;
align-items:center;

color:var(--main-fore-color)
`

export const SearchAndMenuContainer = styled.div`
  width: 60%;
  height:100%;
  display:flex;
  flex-direction:column;
`
export    const MenuContainer = styled.div`
      width: 100%;
      height:50%;

      display:flex;
      flex-direction:row;
      justify-content:space-around;
      align-items:center;
    `
    export    const SearchContainer = styled.div`
    width: 100%;
    height:50%;

    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
  `
  export const ProfileContainer = styled.div`
  width: 20%;
  height:100%;

  display:flex;
  flex-direction:row;
  justify-content:flex-end;
  align-items:center;
`

export const DivProfile = styled.div.withConfig({
  shouldForwardProp: (props) => 'backgroundColor' !== props,
})`
  width:50px;
  height:50px;
  border-radius:50%;
  background-color: ${props => props.backgroundColor || "var(--secondary-bg-color)"};
  background-image: url("http://localhost:3000/img/user.png");
  background-repeat: no-repeat;
  background-size: 100%;
  margin-right:5px;
`
export const DivNotification = styled.div`
  width:50px;
  height:50px;
  border-radius:50%;
  background-color: var(--main-bg-color);
  margin-right:5px;
  display:flex;
  justify-content:center;
  align-items:center;

  .noti{
    font-size:25px;
    color:var(--main-fore-color);
  }
`


/* BODY */
export const LayoutBody = styled.div`
  background-color: var( --main-bg-color);
  width: 100%;
  min-height: 74vh;
  min-height: 200px;
  margin-top:16vh;

  
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  font-size:12px;
`

/* END BODY*/

/* FOOTER */
export const LayoutFooter = styled.div`
  background-color: var( --secondary-bg-color);
  width: 100%;
  min-height: 10vh;

  display:flex;
  justify-content: center;
`

export const LayoutFooterInner = styled.div`
  width: 90%;
  min-height: 10vh;

  display:flex;
  flex-direction:row;
  justify-content: center;
  align-items:center;

  text-align:center;
  font-size:12px;
  color:var(--main-fore-color);
`
/* END FOOTER */

/* end style components*/