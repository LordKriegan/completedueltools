import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, ImageBackground, TouchableOpacity, Image, ScrollView } from 'react-native';

class ModalContainer extends Component {
    render() {
        var NewComponent = this.props.navigation.state.params.comp
        return (
            <ImageBackground
                source={require('../images/background.png')}
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    alignContent: 'center'
                }}
            >
                <TouchableOpacity style={{ paddingTop: 5, paddingLeft: 5 }} onPress={() => this.props.navigation.goBack()}>
                    <Text>X</Text>
                </TouchableOpacity>
                <NewComponent myProps={this.props.navigation.state.params.myProps} />
            </ImageBackground>
        );
    }
}
export default ModalContainer;