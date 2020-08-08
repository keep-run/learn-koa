import React from 'react'
import './index.styl'
export default function FlexDemo() {

  return (<div className='flex-container'>
    <div className='left-wrap'>
      <div className='left_item_1'>left-item-1 假设这里很长很长</div>
      <div className='left_item_2'>
        <div className='left_item_2_1'>left-item-2-1</div>
        <div className='left_item_2_2'>left-item-2-2</div>
      </div>
    </div>
    <div className='right-wrap'>
      <div className='right_item_1'>right-item-1</div>
      <div className='right_item_2'>right-item-2</div>
    </div>
  </div>)
} 