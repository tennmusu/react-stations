// DO NOT DELETE
import * as React from 'react';
import './App.css';
import './Header.js';
import  {Description} from './Description.js';
import { Header } from './Header.js';
/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  
  return (
    <div>
    <Header/>
    <Description/>
    </div>
  )
}
