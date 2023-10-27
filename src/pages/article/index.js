
import styled from "styled-components";

import MainLayout from "app/layouts/mainLayout";

import styles from 'app/styles/pages/article.module.css'

const HeadRow = styled.div`
  width:100%;
  padding-top:10px;
  padding-bottom:10px;

  display:flex;
  flex-direction:row;
  justify-content:space-between;
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

const ServiceTitle = styled.text`
  
`;


export default function Article() {
  return (
    <MainLayout>
      <div className={styles.MainContainer}>
        <div className={styles.SecondaryContainer}>
            <HeadRow>
              <ServiceTitle>Article Serive : List</ServiceTitle>
              <ATab href='article/new'> New  </ATab>

            </HeadRow>
        </div>
      </div>
    </MainLayout>
  )
}
