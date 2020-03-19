import React from "react";
import { useState, useEffect, useRef, useCallback } from "react";
let timerId = "";

export default function TouchDemo(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const swipePosition = index => {
    setActiveIndex(index);
  };
  const changeActiveIndex = index => {
    swipePosition(index);
  };

  const slider = () => {
    timerId = setInterval(function() {
      changeActiveIndex(activeIndex=>{
         console.log('------------activeIndex-------------',activeIndex)
        return activeIndex + 1});
    }, props.speed);
  };

  useEffect(() => {
    slider();
    return () => {
      clearInterval(timerId);
    };
  }, []);

  return <div style={{ height: "100px" }}>{activeIndex}</div>;
}
TouchDemo.defaultProps = {
  selectedIndex: 0,
  speed: 1000
};

// export default function TouchDemo(props) {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const slider = () => {
//     timerId = setInterval(() =>{
//       setActiveIndex(activeIndex =>{
//         console.log("------------activeIndex----------", activeIndex);
//         return activeIndex + 1
//       } );

//     }, props.speed);
//   };

//   useEffect(() => {
//     slider();
//     return () => {
//       clearInterval(timerId);
//     };
//   }, []);

// return <div style={{ height: "100px" }}>{activeIndex}</div>;
// }
// TouchDemo.defaultProps = {
//   selectedIndex: 0,
//   speed: 1000
// };

// export default function App () {
//   const [ count, setCount ] = useState(0)
//   const timer = useRef(null)
//   let timer2

//   useEffect(() => {
//     let id = setInterval(() => {
//       setCount(count => count + 1)
//     }, 500)

//     timer.current = id
//     timer2 = id
//     return () => {
//       clearInterval(timer.current)
//     }
//   }, [])

//   const onClickRef = useCallback(() => {
//     clearInterval(timer.current)
//   }, [])

//   const onClick = useCallback(() => {
//     clearInterval(timer2)
//   }, [])

//   return (
//     <div>
//       点击次数: { count }
//       <button onClick={onClick}>普通</button>
//       <button onClick={onClickRef}>useRef</button>
//     </div>
//     )
// }
