import Link from 'next/link'
import Image from 'next/image'

import styles from 'app/styles/layouts/mainLayout.module.css'

import { SearchBox,IconText} from 'app/components';

/* begin style components*/
import styled from 'styled-components';
const MainContainer = styled.div`
  background-color: var( --main-bg-color);
  min-width: 100vw;
  min-height: 100vh;

  display:flex;
  flex-direction: column;
`
/* end style components*/
export default function MainLayout({ children, ...props }) {

  const currentDate = (new Date()).getFullYear();
  const currentDateTab = <label>{currentDate}</label>

  return <>
  <MainContainer>

    {/* HEADERS */}
    <div className={styles.layoutHeader}>

      <div className={styles.layoutHeaderInner}>
        <div className={`${styles.layoutRowOne} ${styles.fullHeight}`} >
          
          <div className={styles.logoContainer}>
          <Image
            src="/img/logo.svg"
            width={50}
            height={50}
            alt="LoGO"
          />
          <div className={styles.logoText} >Aura All In One</div>
          </div>
          

          <div className={styles.layoutSearchNMenuContainer}>
            <div className={`${styles.layoutRowTwo} ${styles.fullHeight}`} >
                <Link href='test' className={styles.layoutLinkMenu}>
                  <IconText icon='home' text="HOME"/>
                </Link>
                <Link href='test' className={styles.layoutLinkMenu}>
                  <IconText icon='search' text="this is"/>
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
              </div>
              
              <div className={styles.layoutSearchContainer}>
                <SearchBox />
              </div>
              
            </div> 
         
          <label>this is fucking profile</label>
        </div>
      </div>

    </div>
    {/* END HEADERS */}

    {/* BODY */}
    <div className={styles.layoutBody}>
    {children}
    </div>
    {/* END BODY */}

    {/* FOOTER */}
    <div className={styles.layoutFooter}>
      <div className={styles.layoutFooterInner}>
        copy Right @{currentDateTab}
      </div>
    </div>
    {/* END FOOTER */}

  </MainContainer>
  </>
}
