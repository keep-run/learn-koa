// import React,{useState,useEffect,useRef} from 'react'
// function useCurrentValue(value1,value2) {
//   const ref = useRef(0);
//   useEffect(() => {
//     ref.current = value1;
//     console.log('---------value---------')
//   });
//   return ref;
// }

//  function Counter(props) {
//   const [count, setCount] = useState(0);
//   const [number,setNumer]=useState(0)
//   const currentCount = useCurrentValue(number,count);
//   return (
//     <div>
//       <p>Number: {number}</p>
//       <p>You clicked {count} times</p>
//       <p>props data {props.value}</p>
//       <button onClick={()=>{setCount(count+1)}}>Click me</button>
//       <button onClick={()=>{setNumer(number+1)}}>add number</button>
//     </div>
//   );
// }
// export default function TestProps(){
//   const [propsData,setData]=useState(0)
//   return (<div >
//     <Counter value={propsData}/>
//     <button onClick={()=>{setData(propsData+1)}}>增加props</button>
//   </div>)
// }
import React, {useState, useMemo, useCallback} from 'react';
import './index.css'
import './index.less'
const Child = function({data}){
    return useMemo(()=>{
        console.log('data',data)
        return(
            <div>
                {data}
            </div>
        )
    },[data])
    
}

const TestHooks = function(){
    let [count, setCount] = useState(0);
    let [name, setName] = useState('qwer');
    // let Tchild = Child(name)

    // console.log(Tchild)
    const handleChange=()=>{

    }

    return(
        <div>
            {count}
            <button onClick={() => setCount(count + 1)} className='btn'>update count</button>
            <button onClick={() => setName('hello '+name)}>update Name</button>
            <Child data={name}></Child>

            {/* <input type="text" onClick={}/> */}
            {/* <Tchild></Tchild> */}
        </div>
    )
}

// export default function TestHook(){
//     return(
//         <div>
//             <TestHooks></TestHooks>
//         </div>
//     )
// }
export default TestHooks;