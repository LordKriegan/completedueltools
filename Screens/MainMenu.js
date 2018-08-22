import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, ImageBackground, TouchableOpacity, Image } from 'react-native';

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
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("CardViewer")}>
                            <Image source={require('../images/CardViewer.png')} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate("DeckBuilder")}>
                            <Image source={require('../images/DeckBuilder.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.ViewFlexRow}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Calculator")}>
                            <Image source={require('../images/Calculator.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("RulesResource")}>
                            <Image source={require('../images/RulesResource.png')} />
                        </TouchableOpacity>
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