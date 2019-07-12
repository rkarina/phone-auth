import React, { Component } from 'react';
import  { View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Axios from 'axios';
import SignUp from "./SignUp";
import SignIn from "./SignIn";

class LoginForm extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>           
                <SignUp />
                <SignIn />
            </View>
        );
    }
}

export default LoginForm;