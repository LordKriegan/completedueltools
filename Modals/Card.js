import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, ImageBackground, TouchableOpacity, Image, ScrollView } from 'react-native';

class Card extends Component {
    state = {
        card: ''
    }

    componentDidMount() {
        fetch("https://www.ygohub.com/api/card_info?name=" + this.props.navigation.state.params.cardName, { method: "GET" })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson.card, responseJson.card['thumbnail_path']);
                this.setState({
                    card: responseJson.card
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }
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
                <TouchableOpacity style={{ paddingTop: 5, paddingLeft: 5 }} onPress={() => this.props.navigation.goBack()}>
                    <Text>X</Text>
                </TouchableOpacity>   
                {
                    (this.state.card !== '')
                    ? <ScrollView contentContainerStyle={{alignItems: 'center'}}>
                        <Image 
                            source={{uri: this.state.card['image_path']}}
                            style={{
                                height: 433,
                                width: 300
                            }}
                         />
                        <Text>{this.state.card['name']}</Text>
                        {
                            (this.state.card['is_monster'])
                            ? <View>
                                <Text>Attribute: {this.state.card['attribute']}</Text>
                                <Text>Type: {this.state.card['species']}</Text>
                                {
                                    (this.state.card['materials'])
                                    ? <Text>Materials: {this.state.card['materials']}</Text>
                                    : <View></View>
                                }
                                <Text>Attack: {this.state.card['attack']}</Text>
                                {
                                    (this.state.card['defense'] !== "") 
                                    ? <Text>Defense: {this.state.card['defense']}</Text> 
                                    : <Text>Link Rating: {this.state.card['link_number']}</Text> 
                                }
                              </View>
                            : <View>
                                <Text>{this.state.card['type']}/{this.state.card['property']}</Text>
                              </View>
                        }
                        <Text>Card Text: {this.state.card['text']}</Text>
                      </ScrollView>
                    : <Text>Loading Card Info...</Text> 
                }
            </ImageBackground>
        );
    }
}
export default Card;