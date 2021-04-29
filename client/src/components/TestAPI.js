import * as React from "react";


class TestAPI extends React.Component{
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }


    callAPI() {
        fetch("http://localhost:3001/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }
    
    componentWillMount() {
        this.callAPI();
    }
    render (){

        { console.log (this.state);}

        return(<h1 >{this.state.apiResponse}</h1>
        )
                
    };

}

export default TestAPI;