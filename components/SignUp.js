import React, { Component } from 'react';
import  { View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Axios from 'axios';

const ROOT_URL = "https://us-central1-one-time-password-a58c0.cloudfunctions.net";

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = { phone: '' };
    }

    handleSubmit = async () => {
        try {
            await Axios.post(`${ROOT_URL}/createUser`, { phone: this.state.phone });
            await Axios.post(`${ROOT_URL}/requestOneTimePassword`, { phone: this.state.phone });
        } catch (err)  { 
            console.log(err);
        }
    }

    render() {
        return (
            <View>           
                <View>
                    <Text>
                        Sign Up
                    </Text>
                </View>
                <View style={styles.MobileInput}>         
                    <Input
                    labelStyle="Enter Phone Number:"
                    leftIcon={{ type: 'font-awesome', name: 'mobile'}}/>
                </View>
                <Button
                    onButtonClick={this.handleSubmit}
                    title="Submit" />
            </View>
        );
    }
}

    
const styles = {
    MobileInput: {
        marginBottom: 10
    }
}


export default SignUp;