import React, { Component } from 'react';
export default class Welcome extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: 'hello',
            count: 0
        }
    }
    countUp = () => {
        // var c = this.state.count;
        // c++;                         như dưới 
        // this.setState({ count: c })
      
        this.setState((prevstate)=>{
            return {count :prevstate.count +1}
        })
    }
    render() {
        return <div>
            <p>welcome {this.props.user.id}, {this.props.user.name}</p>
            <p>{this.state.text}</p>
            <button onClick={() => {
                this.setState({ text: 'change me!' })
            }}>change text!</button>
            <button onClick={this.countUp}>change text! {this.state.count}</button>

            { this.state.count >=1 && <Logout />}
        </div>
    }
}
class Logout extends Component {
    render() {
        return <a href="#">Logout</a>

    }
}
