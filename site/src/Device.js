import React, { Component } from 'react';
import axios from 'axios';

class Device extends Component {
    constructor(props) {
    super(props);
    console.log('in constructor');
}

state = {
    data : [],
};

getMyData = async () => {
    const data = await axios.get('https://www.everdevel.com/ReactJS/axios/json/');
    console.log('data is ' + JSON.stringify(data));
};
componentDidMount() {
    console.log('in componentDidMount');
    this.getMyData();
}

componentDidUpdate() {
    console.log('in componentDidUpdate');
}
componentWillUnmount() {
    console.log('in componentWillUnmount');
}

render() {
    return <div>Here is Device Component</div>;
}
}

export default Device;