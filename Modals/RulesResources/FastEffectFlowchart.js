import React, { Component } from 'react';
import { Image, Dimensions, View, Text } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';

class FastEffectFlowchart extends Component {
    render() {
        return (
            <View>
                <Text style={{fontSize: 20, alignSelf: 'center'}}>Fast Effect Timing Chart</Text>
                <ImageZoom
                    cropWidth={Dimensions.get('window').width}
                    cropHeight={Dimensions.get('window').height}
                    imageWidth={700}
                    imageHeight={879}
                    minScale={2}
                >
                    <Image
                        resizeMode="center"
                        source={require('../../images/RulesResources/FastEffectTiming.jpg')}
                    />
                </ImageZoom>
            </View>
        )
    }
}

export default FastEffectFlowchart;