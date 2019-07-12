import React, { Component } from 'react';
import  { View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Axios from 'axios';

const ROOT_URL = "https://us-central1-one-time-password-a58c0.cloudfunctions.net";

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = { phone: '', code: '' };
    }

    handleSubmit = async () => {
        try {
            await Axios.post(`${ROOT_URL}/verifyingOneTimePassword`, { 
                phone: this.state.phone, 
                code: this.state.code });
        } catch (err)  { 
            console.log(err);
        }
    }

    render() {
        return (
            <View>           
                <View style={styles.ViewStyle}>
                    <Text>
                        Sign In
                    </Text>
                </View>
                <View style={styles.ViewStyle}>         
                    <Input containerStyle={styles.ContainerStyle}
                    labelStyle="Enter Phone Number:"
                    leftIcon={{ type: 'font-awesome', name: 'mobile'}}/>
                </View>
                <Button onButtonClick={this.handleSubmit}
                    title="Submit" />
                <View style={styles.ViewStyle}>         
                    <Input containerStyle={styles.ContainerStyle}
                    labelStyle="Enter Code:"/>
                </View>
                <Button onButtonClick={this.handleSubmit}
                    title="Submit" />
            </View>
        );
    }
}

    
const styles = {
    ContainerStyle: {
        width: '90%'
    }, 
    ViewStyle: {
        marginBottom: 10
    }
}


export default SignUp;