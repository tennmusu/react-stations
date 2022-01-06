// DO NOT DELETE

import * as React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css'

/**
 * 
 * @type {React.FC}
 */


export const App = () => {
  const getDogUrl=()=>{
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(
        (result) => {
         setDogUrl(result.message)
        },
        (error) => {
         
        }
      )
}
  const [dogUrl,setDogUrl] = useState(getDogUrl);
  
  return (
    <div>
      <header>
        わんこの写真🐾
      </header>
      <p>可愛いわんちゃんの写真を表示するサイトです。</p>
      <img src={dogUrl}></img>
      <button 
      onClick={() => getDogUrl()}
      >
      更新！
      </button>
    </div>
  )
}
