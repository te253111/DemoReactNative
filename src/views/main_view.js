import React, {Component} from 'react';
import {View, Text} from 'react-native';

import axios from 'axios';

import Header from '../components/header';

class Mainview extends Component {

    state = {
        test: []
    };

    componentWillMount() {
        axios
            .get('http://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=b1b15e88fa797225412429c1c50c122a1')
            .then(response => this.setState({test: response.data})); 
    }

    render() {
        console.log(this.state);
        return (
            <View>
                <Header name={'Main'}/>
                <Text>Hello: {this.state.test.base}</Text>
                <Text>Hello: {this.state.test.main[0].temp}</Text>
            </View>
        );
    }
}

export default Mainview;
