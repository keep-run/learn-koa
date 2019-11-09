import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Demo1 from '@/containers/demo1/index'
export default (
  <BrowserRouter>
    <Route path='/tsdemo' component={Demo1} />
  </BrowserRouter>
)