import React, { PureComponent } from 'react'

export default class extends PureComponent {
    state={
        data:[0,1,2,3,4,5]
    }

    handleClick=()=>{
        const {data}=this.state
        data.unshift(-1)
        this.setState({data:[...data]})
    }
    render() {
        const {data}=this.state
        return (<div>
            <button onClick={this.handleClick}>click</button>
            {data.map((item,index)=>{
                if(index===2){
                return <div key={index}>div {item}</div>
                }
            return <span key={index}>span {item}</span>
            })}
        </div>)
    }
}