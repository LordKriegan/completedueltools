import React, {Component} from 'react';
import {View, Text, Stylesheet, ImageBackground} from 'react-native';

class CardViewer extends Component {
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
                <Text>Card Viewer Screen</Text>
            </ImageBackground>
        );  
    }
}

export default CardViewer;