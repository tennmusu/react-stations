// DO NOT DELETE
import * as React from 'react';
import { useState } from 'react';
import {DogImage} from './DogImage.js';
 export const Description = () =>  {
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
        <p>可愛いわんちゃんの写真を表示するサイトです。</p>
        <DogImage url={dogUrl}/>
        <button 
        onClick={() => getDogUrl()}
        >
        更新！
        </button>
        </div>
    )
  }