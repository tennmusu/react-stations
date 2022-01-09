// DO NOT DELETE
import * as React from 'react';
export const BreedsSelect = (props) => {
    var list=Array(0);
    list=props.breeds;  
    
      return(
      <div>
      <select name="breeds" id="breeds"
       onChange={()=>props.setSelectedBreed(document.getElementById("breeds").value)}
      >
      {
          list.map((v, i) => {
            return (
            <option value={v}>{v}</option>
            );
          })
      }
 
      </select>
      </div>
      )

  }


