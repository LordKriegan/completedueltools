import React, { Component } from 'react';
import { Dimensions, View, Text, StyleSheet, ImageBackground, Button } from 'react-native';

//rules resources
import FastEffectFlowchart from '../Modals/RulesResources/FastEffectFlowchart';
import PhaseOrder from '../Modals/RulesResources/PhaseOrder';
import PSCT from '../Modals/RulesResources/PSCT';

class RulesResource extends Component {
    goto = (compName) => {
        this.props.navigation.navigate('Modal', { comp: compName })
    }
    render() {
        return (
            <ImageBackground
                source={require('../images/background.png')}
                style={styles.img}
            >
                <View style={styles.btnContainer}>
                    <Button onPress={() => this.goto(FastEffectFlowchart)} title="Fast Effect Timing Chart" />
                    <Button onPress={() => this.goto(PhaseOrder)} title="Phase Order" />
                    {/* <Button onPress={() => console.log("will open modal")} title="Battle Phase" /> */}
                    <Button onPress={() => console.log("will open modal")} title="Damage Step" />
                    <Button onPress={() => this.goto(PSCT)} title="PSCT Definitions" />
                    {/* <Button onPress={() => console.log("will open modal")} title="Tournament Policies" /> */}
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    btnContainer: {
        margin: 20,
        width: "90%"
    },
    img: {
        flex: 1,
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center'
    }
})

export default RulesResource;