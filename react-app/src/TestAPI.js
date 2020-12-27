import React, { Component } from "react";

class TestAPI extends React.Component {

    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }
    
    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }
    
    componentWillMount() {
        this.callAPI();
    }

    render() {
        return (
            <p className="App-intro">{this.state.apiResponse}</p>
        );
    }

}

export default TestAPI;