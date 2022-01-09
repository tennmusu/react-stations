// DO NOT DELETE
import * as React from 'react';
import { useState,useEffect} from 'react';
import { BreedsSelect } from './BreedsSelect';
import { DogImage } from './DogImage';
import './App.css';
export const DogListContainer = () => {
    const [breeds, setbreeds] = useState(Array(0).fill(null));
    const [selectedBreed,setSelectedBreed] = useState("");
    const [ImageList,setImageList] = useState(Array(0).fill(null));
    const list=Array(0).fill(null);
    const list2=Array(0).fill(null);
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/list/all")
          .then((response) => response.json())
          .then((data) => {
            var names=Object.keys(data.message);
           // var details=Object.values(data.message);
            for (var i = 0; i < names.length; i++) {
                list.push(names[i]);
              /*  if(details[i].length!=0){
                    details[i].forEach(element => {
                        list.push(element);
                    });
                }*/
              }
        
           setbreeds(list);
           setSelectedBreed(list[0]);
          });
      }, []);
      const getimagelist =()=>{
          var url="https://dog.ceo/api/breed/"+selectedBreed+"/images/random/12";
        fetch(url)
        .then(res => res.json())
        .then(
          (result) => {
            var image=Object.values(result.message);
            for (var i = 0; i < image.length; i++) {
                list2.push(image[i]);
              }
           setImageList(list2)
          },
          (error) => {
           
          }
        )
      }
      const Images=ImageList.map((v, i) => {
        return (
        
         <DogImage url={v}/>
        );
      })
      return(
      <div>
      <BreedsSelect breeds={breeds}
      setSelectedBreed={setSelectedBreed.bind()}
      />
      <button
      onClick={getimagelist}
      >
      表示！     
      </button>
      <div className='ImageList'>
      {Images}
      </div>
      </div>
      )

  }

