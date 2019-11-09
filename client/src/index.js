import React from 'react'
import ReactDom from 'react-dom'
// import "./test.less"
// import "./test.css"
// import buyImg from "@/assets/img/icon_buy_task.png"
// import testImg from "@/assets/img/bg_store.png"
 class Home extends React.Component {
    render(){
        return (
            <div className="test test2">
                <p>hello world</p>
            </div>
        )
    }
}
ReactDom.render(<Home/>,document.getElementById("app"))