import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, ImageBackground, FlatList, TouchableHighlight } from 'react-native';
import Card from '../Modals/Card';
class CardViewer extends Component {
    state = {
        cardList: '',
        cardName: '',
        filteredList: ''
    }
    filterCards = (cardName) => {
        if (this.state.cardList === '' || cardName === '') {
            console.log("No cardlist yet!")
            this.setState({
                filteredList: ''
            })
        } else {
            this.setState({
                filteredList: this.state.cardList.filter((card) => card.toLowerCase().includes(cardName.toLowerCase()))
            })
        }
    }
    componentDidMount() {
        fetch("https://www.ygohub.com/api/all_cards", { method: "GET" })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    cardList: responseJson.cards
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
                    alignContent: 'center',
                    padding: 10
                }}
            >
                <TextInput
                    style={styles.InputBox}
                    placeholder="Enter card name"
                    textAlign="center"
                    onChangeText={(cardName) => this.setState({ cardName })}
                    onSubmitEditing={() => this.filterCards(this.state.cardName)}
                />
                {
                    (this.state.filteredList !== '') 
                        ? <FlatList 
                            data={this.state.filteredList}
                            renderItem={
                                ({item}) => {
                                    return(
                                        <TouchableHighlight style={styles.ListItem} onPress={() => this.props.navigation.navigate('Modal', { myProps: { cardName: item }, comp: Card })}>
                                            <Text>{item}</Text>
                                        </TouchableHighlight>
                                    )
                                }
                            }
                            keyExtractor={(item, index) => index.toString()}
                          /> 
                        : <View></View>
                }
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    InputBox: {
        height: 40,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 20
    },
    ListItem: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    }
})
export default CardViewer;