import styles from 'app/styles/components/searchbox.module.css'
import React,{ useEffect, useState } from "react";


import getConfig from 'next/config'
const { serverRuntimeConfig,publicRuntimeConfig } = getConfig();

export default function SearchBox({...props}) {

  const [searchWord, setSearchWord] = React.useState(props.search);

  const onChange= (e)=>{
    setSearchWord(e.target.value)
  }
  return (
    <form  action={publicRuntimeConfig.NEXT_PUBLIC_AppDomain} className={styles.formSearch} onSubmit={()=>{}}>
      <input 
        className={styles.txtSearch} 
        placeholder='Search, discover and more!'
        type="text" 
        name="search" 
        value={searchWord}
        autoComplete="off"
        onChange={onChange}
      />
      <i className={`fas fa-search ${styles.searchIcon}`}></i>
    </form>
  );
}