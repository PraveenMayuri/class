import React,{Components} from "react";

class Message extends Components { 
    constructor(){
        super()
        this.state={
            message:"Welcome visitor"

        }
    }
    
    render(){
    return (
        <div>
           <h1>{this.state.message}</h1>
        <button>Subscribe</button>
        </div>   
    )
    
}
}

export default Message