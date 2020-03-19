// import React, { useState, useEffect, ReactNode } from 'react';
// import styled, { CSSObject } from 'styled-components';

// const DivContainer = styled.div`
//     overflow: hidden;
//     ${(props: styleProps) => props.mutableStyle.wrapper};
// `;
// const UlContainer = styled.ul`
//     margin: 0;
//     padding: 0;
//     list-style: none;
//     list-style-position: inside;
//     white-space: nowrap;
//     ${(props: styleProps) => props.mutableStyle.container};
// `;
// const LiContainer = styled.li`
//     display: inline-block;
//     touch-action: pan-x;
//     ${(props: styleProps) => props.mutableStyle.liItem};
// `;

// interface style {
//     wrapper?:CSSObject,
//     container?:CSSObject,
//     liItem?:CSSObject,
// }

// interface styleProps {
//     mutableStyle: style
// }

// interface PropsData {
//     clientWidth?: number,
//     children: JSX.Element[],
//     selectedIndex:number,
//     onChange?:commonFunc,
//     style: style,
//     autoPlay: boolean,
//     speed:number,
// }

// type commonFunc = (arg: number) => void;

// let moveLastX = 0;
// let moveStartX = 0;
// let clientWidth = 0;
// let timerId = 0;
// /**
//  * TODO:自动轮播
//  */
// export default function Swipe(props:React.PropsWithChildren<PropsData>): any{
//     let [ startX, setStartX ] = useState<number>(0), // 滑动开始的位置
//         [ moveX, setMoveX ] = useState<number>(0), // 图片滑动的距离
//         [ activeIndex, setActiveIndex ] = useState<number>(0), 
//         [ prePosition, setPrePosition ] = useState<number>(0), // 滑动完成后ul的初始位置
//         [ transition, setTransition ] = useState<string>("");

//     let isFirst = () => {return activeIndex === 0};
//     let isLast = () => {return activeIndex === props.children.length-1};
    
//     let swipeContainer = React.useRef<HTMLDivElement>(null);
//     function getMoveWidth(){
//         let liList = swipeContainer.current!.getElementsByTagName('li')[0];
//         let computedStyle = window.getComputedStyle(liList);
//         let marginLeft = parseFloat(computedStyle.marginLeft!);
//         return parseFloat(computedStyle.width!) + marginLeft;
//     }
//     useEffect(() =>{
//         if(props.children.length === 1) return;
//         clientWidth = props.clientWidth ? props.clientWidth : getMoveWidth();
//         swipePosition(props.selectedIndex);
//         if(props.autoPlay){
//             setTransition('all ease 0.5s');
//             slider();
//         }
//         return () => {
//             clearInterval(timerId);
//         };
//     },[])

//     // useEffect(() =>{
        
//     //     // slider()
//     // },[activeIndex] )

//     // 初始化swipe位置
//     let swipePosition:commonFunc = (index) => {
//         setMoveX(index * -clientWidth);
//         setActiveIndex(index);
//     }
//     let changeActiveIndex:commonFunc = (index) => {
//         let { onChange } = props;
//         console.log(activeIndex);
//         swipePosition(index)
//         onChange && onChange(index);
//     }

//     let slider = () => {
//         timerId = setInterval(function(){
//             if(isLast()){
//                 changeActiveIndex(0);
//             }else{
//                 changeActiveIndex(activeIndex + 1);
//             }
//         },props.speed)
//     }

//     let handleTouchStart:React.ReactEventHandler = (e:React.TouchEvent) => {
//         if(timerId){
//             clearInterval(timerId);
//         }
//         let start = e.changedTouches[0].pageX - moveX;
//         setStartX(start);
//         // 滑动前的状态
//         setPrePosition(moveX);
//         setTransition("");
//         moveLastX = start;
//     }
    
//     let handlerTouchMove:React.ReactEventHandler = (e:React.TouchEvent) => {
//         let moveCurrentX = e.changedTouches[0].pageX;
//         let translateX = 0,additionalX = 50;
//         moveStartX = moveLastX;
//         if(moveCurrentX >= moveStartX && isFirst()){// 向右拖动
//             translateX = additionalX * moveCurrentX / (swipeContainer.current!.clientWidth)
//         }else if((moveCurrentX <= moveStartX && isLast())){ // 向左拖动
//             translateX = prePosition - additionalX * (clientWidth - moveCurrentX) / (swipeContainer.current!.clientWidth)
//         }else { 
//             translateX = moveCurrentX - startX
            
//         }
//         setMoveX(translateX);
//         moveLastX = moveCurrentX;
//     }
  
//     let handlerTouchEnd:React.ReactEventHandler = (e:React.TouchEvent) => {
//             let { children, onChange } = props;
//             let containerWidth = (children.length - 1) * clientWidth;
//             let absValue = Math.abs(moveX) - Math.abs(prePosition);
//             setTransition('all ease 0.5s');
//             if(Math.abs(absValue) / clientWidth >= 0.05 && moveX < 0 && moveX > -containerWidth) {
//                 if(absValue > 0 && activeIndex < children.length - 1) {
//                     ++activeIndex;
//                 }else if(absValue < 0 && activeIndex > 0) {
//                     --activeIndex;
//                 }
//                 onChange && onChange(activeIndex);
//             }
//             setActiveIndex(activeIndex);
//             setMoveX(activeIndex * (-clientWidth));
//     }
    
//     let renderSwipeItem: () => ReactNode = () => {
//         let { children } = props;
//         return children.map((item, index) => {
//             return (
//                 <LiContainer key={index} mutableStyle={props.style}>
//                     {item}
//                 </LiContainer>
//             );
//         });
//     }

//     let translateString:string = `translate3D(${moveX}px, 0, 0)`;
//     let Style = {
//             transform: translateString,
//             transitionTimingFunction:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",
//             transition
//         }
    
//     return(
//         <DivContainer mutableStyle={props.style} 
//             onTouchStart={handleTouchStart} 
//             onTouchMove={handlerTouchMove} 
//             onTouchEnd={handlerTouchEnd} 
//             ref={swipeContainer}>
//             <UlContainer mutableStyle={props.style} style={Style}>
//                 {renderSwipeItem()}
//             </UlContainer>
//         </DivContainer>
//     )
// }

// Swipe.defaultProps = {
//     selectedIndex: 0,
//     style:{
//         wrapper:{
//             "width": "100%"
//         },
//         container:{

//         },
//         liItem:{
//             width: "92%",
//             margin: "0 2%",
//             ":first-child":{
//                 marginLeft:"4%"
//             },
//             ":last-child":{
//                 marginRight:"4%"
//             }
//         }
//     },
//     autoPlay: true,
//     speed: 3000,
//     Dots : true,
// }