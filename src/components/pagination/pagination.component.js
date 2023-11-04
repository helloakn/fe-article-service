import Link from 'next/link'
// import styles from 'app/styles/components/pagination.module.css'

import { MainContainer, DivBody,
  ATab
} from './pagination.element';

import getConfig from 'next/config'
const { serverRuntimeConfig,publicRuntimeConfig } = getConfig();

export default function Pagination({...props}) {
  const _Url = 'https://google.com'
  let {totalPage,maxLength,activePage,prefixHref} = props
  activePage -=1

  const start = Math.floor(activePage/maxLength) * maxLength
  const end = Math.floor((start+maxLength)/maxLength) * maxLength

  const paginateElement = []

  // let prevHtml = <Link key={`paginationkeyPrevi`}  href={publicRuntimeConfig.NEXT_PUBLIC_AppDomain+prefixHref+(start)} className={`${styles.divButtonPrevNext}`}> Prev </Link>
  // let nextHtml =  <Link  key={`paginationkeyNext`}  href={publicRuntimeConfig.NEXT_PUBLIC_AppDomain+prefixHref+(end+1)} className={`${styles.divButtonPrevNext}`}> Next </Link>
const prevHtml = <ATab
key={`paginateKeyprev`}
href={_Url}
isActive={false}
>
Previous
</ATab>
const nextHtml = <ATab
key={`paginateKeynext`}
href={_Url}
isActive={false}
>
Next
</ATab>

  if(activePage>=maxLength) paginateElement.push(prevHtml);
  
  for(let i = start + 1; i <= end; i++){
    const search = props.query.search ? `?search=${props.query.search}` : ''; 
    const _Url= publicRuntimeConfig.NEXT_PUBLIC_AppDomain+prefixHref + i  + search;
   // console.log('_Url',_Url)
  //  const cc = <Link key={`paginationkey${i}`} href={_Url} className={`${(i==activePage+1? styles.divButtonActive : '')}  ${styles.divButton}`} > {i} </Link>
    const link = <ATab
    key={`paginateKey${i}`}
      href={_Url}
      isActive={i==activePage+1}
    >
      {i}
      </ATab>
      if(totalPage>i) paginateElement.push(link)
  }

  paginateElement.push(nextHtml);
//<div  className={`${styles.divButton} ${styles.divButtonActive}`}> 3 </div>
  return (
     <MainContainer>
      <DivBody>
        {paginateElement}
      </DivBody>
     </MainContainer>
  );
}