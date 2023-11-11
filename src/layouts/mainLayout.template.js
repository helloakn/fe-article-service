import Link from 'next/link'
import Image from 'next/image'
import React from 'react';
import styles from 'app/styles/layouts/mainLayout.module.css'

import { SearchBox, IconText } from 'app/components';

import {
  MainContainer,
    MainHeader , 
      MainHeaderBanner, 
        LogoContainer,LogoText,SearchAndMenuContainer,MenuContainer ,SearchContainer,ProfileContainer,
      DivLine,DivProfile,DivNotification,

    LayoutBody,
    LayoutFooter,LayoutFooterInner
}
from 'app/layouts/mainLayout.element'

import NotificationList from 'app/components/notification/notificationList'

// import MainLayoutController from 'app/layouts/mainLayout.controllers';

export default class MainLayoutTemplate extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    const currentDate = (new Date()).getFullYear();
    const currentDateTab = <label>{currentDate}</label>
    return <>
    <MainContainer name="mainLayout">
    <NotificationList isShow={this.state.isShowNoti} />
      {/* HEADERS */}
      <MainHeader>
        <DivLine />
        <MainHeaderBanner>
          <LogoContainer>
            <Image
                src="/img/logo.svg"
                width={50}
                height={50}
                alt="LoGO"
              />
              <LogoText>Aura <br/> All In One</LogoText>
          </LogoContainer>
          <SearchAndMenuContainer>
              <MenuContainer>
                <Link href='test' className={styles.layoutLinkMenu}>
                  <IconText icon='home' text="HOME"/>
                </Link>
                <Link href='article' alt='Article' className={styles.layoutLinkMenu}>
                  <IconText icon='content' text="Articles"/>
                </Link> 
                <Link href='ezp' className={styles.layoutLinkMenu}>
                  <IconText icon='video' text="EZP"/>
                </Link> 
                <Link href='analystic' className={styles.layoutLinkMenu}>
                  <IconText icon='chart' text="Analystic"/>
                </Link> 
              </MenuContainer>
              <SearchContainer>
                <SearchBox />
              </SearchContainer>
          </SearchAndMenuContainer>
          <ProfileContainer>

            <DivNotification onClick={this.notificationClick}>
             <i className={'fas fa-comment-dots noti'} ></i>
            </DivNotification>
             
            <DivNotification onClick={this.notificationClick}>
             <i className={'fas fa-bell noti'} ></i>
            </DivNotification>
  
            <DivProfile
              src=''
              backgroundColor="var(--main-bg-color);"
            />
          </ProfileContainer>
        </MainHeaderBanner>
        <DivLine />
      </MainHeader>
      {/* END HEADERS */}
  
      {/* BODY */}
      <LayoutBody>
      {this.props.children}
      </LayoutBody>
      {/* END BODY */}
  
      {/* FOOTER */}
      <DivLine />
  
      <LayoutFooter>
        <LayoutFooterInner>
          <div>@ 2023 - {currentDateTab} <br/>All Rights Reserved</div>
        </LayoutFooterInner>
      </LayoutFooter>
      {/* END FOOTER */}
  
    </MainContainer>
    </>
  }
  
}
