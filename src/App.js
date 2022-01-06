// DO NOT DELETE

import * as React from 'react'
import { useState } from 'react';

import './App.css'

/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl,setDogUrl] = useState('https://images.dog.ceo/breeds/akita/Akina_Inu_in_Riga_1.jpg');
  return (
    <div>
      <header>
        わんこの写真
      </header>
      <p>可愛いわんちゃんの写真を表示するサイトです</p>
      <img src={dogUrl}></img>
    </div>
  )
}
