import React, {Component} from 'react';
import {View, Text, Stylesheet, ImageBackground} from 'react-native';

class RulesResource extends Component {
    render() {
        return (
            <ImageBackground
            source={require('../images/background.png')}
            style={{
                flex: 1,
                flexDirection: 'column',
                alignContent: 'center'
            }}
        >
                <Text>Rules Resource Screen</Text>
            </ImageBackground>
        );  
    }
}

export default RulesResource;