import React, { Component } from 'react'

class Counter extends Component {
    constructor(){
        super()
        this.state = {
            count: 0
        }
    }

    incrementOne(){
        // React bundles all the same method call into one call
        // this.setState({
        //     count: this.state.count + 1
        // }, ()=>{console.log(this.state.count)})

        // To increase count with multiple calls at the same method
        this.setState((prevState) => ({
            count: prevState.count + 1
        }), ()=>{console.log(this.state.count)})

        // console.log(this.state.count) // have to pass as a 2nd argument of setState to get the current value
    }

    incrementFive(){
        this.incrementOne()
        this.incrementOne()
        this.incrementOne()
        this.incrementOne()
        this.incrementOne()
    }

    render() {
        return (
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={()=>this.incrementFive()}>Click me</button>
            </div>
        )
    }
}

export default Counter