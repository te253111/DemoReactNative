import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../styles/main_style';

import LoginForm from '../components/login_form';

const img = require('../images/logo.png');

class LoginView extends Component {
    render() {
        return (

            <View style={styles.container}>
                <Image style={styles.logo} source={img}/>
                <Text style={styles.font_black20}>MyApp !!</Text>
                <LoginForm/>
                <Text style={styles.font_black20}>Forgot Password</Text>
            </View>
        );
    }
}
export default LoginView;
