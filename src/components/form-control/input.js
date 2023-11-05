import styled from "styled-components";

const 
Input =styled.input.attrs((props)=>(
    { 
      type: props.$type 
    }
  ))`
  
    padding:10px;
    border-radius:5px;
    background-color: var(--secondary-bg-color);
    border:1px solid var(--main-fore-color);
    color:#fff;
    outline: none;
    width:100%;

  `;

export default Input