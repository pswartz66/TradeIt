import React from 'react';
import { View, Text } from 'react-native';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            null: ''
        };
    };

    render() {
        return (
            <View>
                <Text>Login Screen yoooo</Text>
            </View>
        )
    }

};
