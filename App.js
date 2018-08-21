import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import {createStackNavigator} from 'react-navigation';

//(screens)
import MainMenu from './Screens/MainMenu';
import CardViewer from './Screens/CardViewer';
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

const AppNavigator = createStackNavigator({
  MainMenu: { 
    screen: MainMenu, 
    navigationOptions: { 
      title: "Main Menu",
    }
  },
  CardViewer: { 
    screen: CardViewer, 
    navigationOptions: { 
      title: "Card Viewer"
    }
  },
  DeckBuilder: { 
    screen: DeckBuilder, 
    navigationOptions: { 
      title: "Deck Builder"
    }
  },
  Calculator: { 
    screen: Calculator, 
    navigationOptions: { 
      title: "Calculator"
    }
  },
  RulesResource: { 
    screen: RulesResource, 
    navigationOptions: { 
      title: "Rules Resource"
    }
  }
})


//background image from https://www.deviantart.com/slackermagician/art/millenium-rare-foil-Finished-product-546961387