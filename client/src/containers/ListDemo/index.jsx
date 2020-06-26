import React, { PureComponent } from 'react'

const mockList = [{
    key: 1,
    name: "test1"
}, {
    key: 2,
    name: "test2"
}, {
    key: 3,
    name: "test3"
}]
export default class ListDemo extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            mockList:mockList
        }
    }
    componentDidMount() {
        console.log('111111111111')
        fetch('http://127.0.0.1:3000/getAllBooks').then(res=>res.json()).then(res=>{
            console.log('res',res)
        })

    }


    add = () => {
        const { count,mockList } = this.state
        const obj={name:'test'+mockList.length}
        this.setState({ mockList:[...mockList,obj] })
    }
    render() {
        const {count,mockList}=this.state
        return <div style={{height:count>5?"1000px":'auto'}}>

          {mockList.map(item=><div key={item.name} style={{height:"150px",backgroundColor:"#ccc"}}>{item.name}</div>)}

            <div>{this.state.count}</div>
            <button onClick={this.add}>add</button>
            <button onClick={() => { this.props.history.push({ pathname: './hooktest' }) }}>go </button>
            <div>test</div>
        </div >
    }
}