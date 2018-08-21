import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, ImageBackground, TouchableHighlight, Image } from 'react-native';

class MainMenu extends Component {
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
                <View style={styles.CenterMenu}>
                    <View style={styles.ViewFlexRow}>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate("CardViewer")}>
                            <Image source={require('../images/CardViewer.png')} />
                        </TouchableHighlight>

                        <TouchableHighlight onPress={() => this.props.navigation.navigate("DeckBuilder")}>
                            <Image source={require('../images/DeckBuilder.png')} />
                        </TouchableHighlight>
                    </View>
                    <View style={styles.ViewFlexRow}>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate("Calculator")}>
                            <Image source={require('../images/Calculator.png')} />
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate("RulesResource")}>
                            <Image source={require('../images/RulesResource.png')} />
                        </TouchableHighlight>
                    </View>
                </View>

            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    CenterMenu: {
        flex: 1,
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center'
    },
    ViewFlexRow: {
        flexDirection: 'row',
        height: 100,
        margin: 10,
        alignContent: 'center',
        justifyContent: 'center'
    }
})
export default MainMenu;