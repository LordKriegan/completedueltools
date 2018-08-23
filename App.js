import React from 'react';
import { Platform, StatusBar, StyleSheet, Text, View, Image } from 'react-native';

import { createStackNavigator } from 'react-navigation';

//(screens)
import MainMenu from './Screens/MainMenu';
import CardViewer from './Screens/CardViewer';

import DeckBuilder from './Screens/DeckBuilder';
import Calculator from './Screens/Calculator';
import RulesResource from './Screens/RulesResource';
//(/screens)
//(modals)
import ModalContainer from './Modals/ModalContainer'
//(/modals)

export default class App extends React.Component {
  render() {
    return (
      <RootStack />
    );
  }
}

const ImageHeader = () => {
  return (
    <Image
      resizeMode="cover"
      style={{
        resizeMode: "contain",
        alignSelf: "center"
      }}
      source={require('./images/yugiohlogo.png')}
    />
  );
}

const AppStack = createStackNavigator({
  MainMenu: {
    screen: MainMenu
  },
  CardViewer: {
    screen: CardViewer
  },
  DeckBuilder: {
    screen: DeckBuilder
  },
  Calculator: {
    screen: Calculator
  },
  RulesResource: {
    screen: RulesResource
  }
}, {
  navigationOptions: {
    headerBackground: <ImageHeader style={{ justifyContent: "center" }}/>
  }
})

const RootStack = createStackNavigator(
  {
    Main: {
      screen: AppStack,
    },
    Modal: {
      screen: ModalContainer
    }
  },
  {
    mode: 'modal',
    headerMode: 'none',
    cardStyle: {
      paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
    }
  }
);

//background image from https://www.deviantart.com/slackermagician/art/millenium-rare-foil-Finished-product-546961387
//calc icon from https://png.icons8.com/color/100/calculator.png
//judgeman from https://uploads2.yugioh.com/card_images/1860/detail/2128.jpg?1385102516