import styled from "styled-components";

const MainContainer = styled.div`
  width:100%;
  min-height:74vh;
  margin-top:10px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  background-color: var(--main-bg-color);
`;

const MainContainerBody = styled.div`
width:100%;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items:center;
background-color: var(--main-bg-color);
`;

const HeadRow = styled.div`
  width:95%;
  height:50px;

  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  
  background-color: var(--secondary-bg-color);
  border-top-left-radius:10px;
  border-top-right-radius:10px;
`;

const HeadAction = styled.div`
  width:50%;
  height:50px;

  display:flex;
  flex-direction:row;
  justify-content:flex-end;
  align-items:center;
  
  padding-right:10px;
`;

const ServiceTitle = styled.div`
  padding-left:10px;
  font-size:14px;

  color:var(--secondary-fore-color);
`;


export {
  MainContainer,MainContainerBody,
  HeadRow,HeadAction, ServiceTitle
}