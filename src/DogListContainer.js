// DO NOT DELETE
import * as React from 'react';
import { useState,useEffect} from 'react';
export const DogListContainer = () => {
    const [breads, setbreads] = useState(Array(0).fill(null));
    const list=Array(0).fill(null);
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/list/all")
          .then((response) => response.json())
          .then((data) => {
            var names=Object.keys(data.message);
            var details=Object.values(data.message);
            for (var i = 0; i < names.length; i++) {
                list.push(names[i]);
                if(details[i].length!=0){
                    details[i].forEach(element => {
                        list.push(element);
                    });
                }
              }
        
           setbreads(list);
          });
      }, []);
      const data=breads.map((value, i) => {

        return (
          <option>{value}</option>
        );
      });
      
      
      
    
      return(
      <div>
      <select>{data}</select>
      </div>
      )

  }

