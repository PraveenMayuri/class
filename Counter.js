import React from "react";
import { Component} from "react";

class Counter extends Component {
    constructor(props){
        super(props)

        this.state = {
            count:0
    }
}

increment(){
    this.setstate({count:this.state.count +1})
    console.log(this.state.count)
}
    
    
    render(){
    return(
        <div>
            <div>count-{this.state.count}</div>
            <button onClick={() =>this.increment()}>Increment</button>
        </div>
    )
}}

export default Counter