import React, {Component} from 'react';

import {ImageBackground} from 'react-native';

class Background extends Component {
    render() {
        return(
            <ImageBackground 
                source={require('../images/background.png')}
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    alignContent: 'center'
                }}
            />
        );
    }
}

export default Background;