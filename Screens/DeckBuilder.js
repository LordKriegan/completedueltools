import React, {Component} from 'react';
import {View, Text, Stylesheet, ImageBackground} from 'react-native';

class DeckBuilder extends Component {
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
                <Text>Deck Builder Screen</Text>
            </ImageBackground>
        );  
    }
}

export default DeckBuilder;