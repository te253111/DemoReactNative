import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';

class LoginForm extends Component {
    state = {
        username: '',
        password: ''
    }

    handleUsername = (text) => {
        this.setState({username: text});
    }

    handlePassword = (text) => {
        this.setState({password: text});
    }

    actionLogin = (user, pass) => {
        if (user === 'admin' && pass === 'admin') {
            Actions.main();
        } else {
            alert('user and password not correct');
        }
    }

    render() {
        return (
            <View style={styles.login_container}>
                <View style={styles.input_container}>
                    <TextInput
                        placeholder='Username'
                        onChangeText={this.handleUsername}
                        style={styles.input}/>
                </View>

                <View style={styles.input_container}>
                    <TextInput
                        placeholder='Password'
                        onChangeText={this.handlePassword}
                        secureTextEntry={true}
                        style={styles.input}/>
                </View>
                <View style={styles.button_container}>
                    <TouchableOpacity
                        onPress={() => this.actionLogin(this.state.username, this.state.password)}>
                        <Text style={styles.font_button_white20}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    login_container: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    input_container: {
        padding: 10
    },
    input: {
        fontSize: 20,
        height: 40,
        width: 300
    },
    button_container: {
        backgroundColor: '#1A237E',
        width: 300
    },
    font_button_white20: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: 'white'
    }
});
export default LoginForm;
