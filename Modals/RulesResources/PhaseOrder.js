import React, { Component } from 'react';
import { Image, Dimensions, View, Text } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';

class PhaseOrder extends Component {
    render() {
        return (
            <View>
                <Text style={{fontSize: 20, alignSelf: 'center'}}>Phase Order</Text>
                <ImageZoom
                    cropWidth={Dimensions.get('window').width}
                    cropHeight={Dimensions.get('window').height}
                    imageWidth={247}
                    imageHeight={447}
                    minScale={2}
                >
                    <Image
                        resizeMode="contain"
                        source={require('../../images/RulesResources/PhaseOrder.png')}
                    />
                </ImageZoom>
            </View>
        )
    }
}

export default PhaseOrder;