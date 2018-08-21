import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { createStackNavigator } from 'react-navigation';

//(screens)
import MainMenu from './Screens/MainMenu';
import CardViewer from './Screens/CardViewer';
import Card from './Screens/Card';
import DeckBuilder from './Screens/DeckBuilder';
import Calculator from './Screens/Calculator';
import RulesResource from './Screens/RulesResource';
//(/screens)

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator />
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

const AppNavigator = createStackNavigator({
  MainMenu: {
    screen: MainMenu,
    navigationOptions: {
      headerBackground: <ImageHeader style={{ justifyContent: "center" }}/>
    }
  },
  CardViewer: {
    screen: CardViewer,
    navigationOptions: {
      headerBackground: <ImageHeader />
    }
  },
  Card: {
    screen: Card,
    navigationOptions: {
      headerBackground: <ImageHeader />
    }
  },
  DeckBuilder: {
    screen: DeckBuilder,
    navigationOptions: {
      headerBackground: <ImageHeader />
    }
  },
  Calculator: {
    screen: Calculator,
    navigationOptions: {
      headerBackground: <ImageHeader />
    }
  },
  RulesResource: {
    screen: RulesResource,
    navigationOptions: {
      headerBackground: <ImageHeader />
    }
  }
})


//background image from https://www.deviantart.com/slackermagician/art/millenium-rare-foil-Finished-product-546961387
//calc icon from https://png.icons8.com/color/100/calculator.png
//judgeman from https://uploads2.yugioh.com/card_images/1860/detail/2128.jpg?1385102516