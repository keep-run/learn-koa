import React from "react";
import { useState} from "react";
let moveStartX=0,moveLastX=0;

let  test=12345;
export default function TouchDemo() {
  const [currentX, setCurrentX] = useState(0)
  const [clientX,setClientX]=useState(0)
  
   console.log('------------render------------------')
  const handleTouchMove=(e)=>{
    test='touch move'
   console.log('-------touch move----------',e.changedTouches[0].pageX)
   setCurrentX(e.changedTouches[0].pageX)
  }
  const handTouchEnd=()=>{
    console.log('--------touchEnd---------',test)
  }
  const handleTouchStart=(e)=>{
    test='touch start'
    let start=e.targetTouches[0].pageX
    console.log('------------touch start----------',e.targetTouches[0].clientX)
    setClientX( e.targetTouches[0].clientX )
    
  }
  return <div style={{height:"100px"}}
  onTouchStart={handleTouchStart}
  onTouchEnd={handTouchEnd}
  onTouchMove={handleTouchMove}
  >touch demo</div>;
}
