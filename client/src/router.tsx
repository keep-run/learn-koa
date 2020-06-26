import React from 'react'
//注意要install @types/react-router-dom和react-router-dom，两个缺一不可
import { BrowserRouter, Route, Switch } from 'react-router-dom'  
import Demo1 from '@/containers/demo1/index'
import TouchDemo from '@/containers/touchDemo/index.jsx'
import Demo3 from '@/containers/demo3/index.jsx'
import HookTest from '@/containers/hookTest/index.jsx'
import EventLoop from '@/containers/EventLoop/index.jsx'
import List from '@/containers/ListDemo/index.jsx'
// import TouchDemo from '@/containers/ListDemo/index.jsx'
export default (
  <BrowserRouter>
    <Route path='/tsdemo' component={Demo1} />
    <Route path='/test' component={TouchDemo}/>
    <Route path='/demo3' component={Demo3}/>
    <Route path='/hooktest' component={HookTest}/>
    <Route path='/event/loop' component={EventLoop}/>
    <Route path='/list' component={List}/>
  </BrowserRouter>
)