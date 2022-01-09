// DO NOT DELETE
import * as React from 'react';
import './App.css';
import './Header.js';
import {DogImage} from './DogImage.js';
import  {Description} from './Description.js';
import { Header } from './Header.js';
import { DogListContainer } from './DogListContainer';
/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  
  return (
    <div>
    <Header/>
    <Description/>
    <DogListContainer/>
    </div>
  )
}
