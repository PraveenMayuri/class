import React from "react";

class Mycomponent extends React.Component{

    constructor(){
        super();

        this.state= {
            message:"Please click the button",
            btnvalue:"click me"
        }
    }

    btnClick =() =>{

        this.setState({
            message:"Button is clicked",
            btnvalue:"clicked"
        })
    }
    

    render() {
        const {name,day}= this.props;
        return(
            <div>
                <h1>This is from class component by {name}</h1>
                <h2>{this.state.message}</h2>

                <button onClick={this.btnClick}>{this.state.btnvalue}</button>
            </div>
        );
    }
}

export default Mycomponent;