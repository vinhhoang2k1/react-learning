import React, { Component } from 'react';
export default class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           now :new Date()
        }
    }
    componentDidMount(){
        this.timer = setInterval(this.tick , 1000)
    }
    // componentWillMount(){
    //     clearInterval(this.timer)
    // }
    tick=() =>{
        this.setState({now :new Date() })
    }
    render(){
        return <div>{this.state.now.toLocaleTimeString()}</div>
    }
}