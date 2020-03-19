import React,{useState,useEffect,useRef} from 'react'
function useCurrentValue(value1,value2) {
  const ref = useRef(0);
  useEffect(() => {
    ref.current = value1;
    console.log('---------value---------')
  });
  return ref;
}

 function Counter(props) {
  const [count, setCount] = useState(0);
  const [number,setNumer]=useState(0)
  const currentCount = useCurrentValue(number,count);
  return (
    <div>
      <p>Number: {number}</p>
      <p>You clicked {count} times</p>
      <p>props data {props.value}</p>
      <button onClick={()=>{setCount(count+1)}}>Click me</button>
      <button onClick={()=>{setNumer(number+1)}}>add number</button>
    </div>
  );
}
export default function TestProps(){
  const [propsData,setData]=useState(0)
  return (<div >
    <Counter value={propsData}/>
    <button onClick={()=>{setData(propsData+1)}}>增加props</button>
  </div>)
}
