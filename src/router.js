import React, {Component} from 'react';
import {Scene, Router} from 'react-native-router-flux';

import LoginView from './views/login_view';
import Mainview from './views/main_view';

class RouterComponent extends Component {
    render() {
        return (
            <Router hideNavBar={true}>
                <Scene key="root">
                <Scene key="login" component={LoginView} title="Login"/>
                <Scene key="main" component={Mainview} title="Main" initial/>
                </Scene>
            </Router>
        );
    }
}

export default RouterComponent;
