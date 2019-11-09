import React from 'react'
//注意要install @types/react-router-dom和react-router-dom，两个缺一不可
import { BrowserRouter, Route, Switch } from 'react-router-dom'  
import Demo1 from '@/containers/demo1/index'
export default (
  <BrowserRouter>
    <Route path='/tsdemo' component={Demo1} />
  </BrowserRouter>
)