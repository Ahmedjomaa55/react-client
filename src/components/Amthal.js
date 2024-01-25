import React,{Component} from "react";

class Amthal extends Component{

    constructor(){
        super();
        this.state= {mathal:{}};
    }

componentDidMount(){
    fetch("https://tough-earrings-frog.cyclic.app/amthal/random")
    .then(response => (response.json())
    .then(json=> this.setState({mathal:json}))
    )
}

    render() {
        return (
            <div>
             <h2>Today's Amthal</h2>
             <p>{this.state.mathal.title}</p>
             </div>
        );
    }
}

export default Amthal;