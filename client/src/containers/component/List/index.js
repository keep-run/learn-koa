import React, { PureComponent } from 'react'


export default class extends PureComponent {
    render() {
        return <div>
            {this.props.data.map(item => {
                <div key={item.key}>
                    <span>{item.name}</span>
                </div>
                
            })}
        </div>
    }
}