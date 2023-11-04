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
const ATab = styled.a`
  background-color:var(--primary-bg-color);
  padding:5px 20px 5px 20px;
  border-radius:5px;
  text-decoration:none;
  color:#fff;

  &:hover {
    background-color: red; // <Thing> when hovered
  }
`;

const ServiceTitle = styled.div`
  padding-left:10px;
  font-size:14px;

  color:#fff;
`;

const Table = styled.table`
  width:95%;
  min-height: 10vh;
  border:1px solid var(--secondary-bg-color);

  tr{
    padding-top:50px;
    padding-bottom:50px;
  }

  th{
    padding-top:15px;
    padding-bottom:15px;
    background-color:var(--main-bg-color);
    color: var(--main-fore-color);
  }
  tbody{
    color:#fff;
  }
  thead th:nth-child(1) {
    width: 5%;
    text-align:center;
  }

  thead th:nth-child(4) {
    width: 10%;
    text-align:center;
  }
  thead th:nth-child(5) {
    width: 10%;
    text-align:center;
  }
  thead th:nth-child(6) {
    width: 10%;
    text-align:center;
  }


  tbody td:nth-child(1) {
    width: 5%;
    text-align:center;
  }
  tbody td:nth-child(4) {
    width: 5%;
    text-align:center;
  }
  tbody td:nth-child(5) {
    width: 5%;
    text-align:center;
  }
  tbody td:nth-child(6) {
    width: 5%;
    text-align:center;
  }

  
  tbody tr:nth-child(odd) {
    background-color:var(--secondary-bg-color);
    padding-top:50px;
    padding-bottom:50px;
    
  }

  tbody tr:hover {
    background-color: var(--main-hover-bg-color);
    
  }

  td{
    padding-top:10px;
    padding-bottom:10px;
  }

`;

export {
  MainContainer,MainContainerBody,
  HeadRow,HeadAction, ATab, ServiceTitle,
  Table
}