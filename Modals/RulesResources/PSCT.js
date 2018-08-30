import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';


class PSCT extends Component {
    state = {
        textStruct: true,
        termNPhrase: false,
        conjunctives: false,
        glossary: false
    }
    changeBoxState = (prop) => {
        this.setState({
            [prop]: !this.state[prop]
        })
    }
    render() {
        return (
            <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
                {/*Text Structure*/}
                <TouchableOpacity onPress={() => this.changeBoxState("textStruct")}>
                    <Text style={styles.title}>Text Structure</Text>
                </TouchableOpacity>
                {(this.state.textStruct)
                    ? <View>

                        <Text style={styles.psctTxt}>All cards follow this format: "Activation conditions: costs and/or targets; effect."</Text>

                        <Text style={styles.psctTxt}>All card effects that make a Chain Link include a ";" or ':' somewhere in the text, possibly both. If itdoes not, then it does not use the Chain. The activation of a Spell or Trap Card always makes a Chain Link, but its effect that resolves with the card itself (if any) does not necessarily use a colon or semicolon. This effect is usually the first effect listed in the card's text.</Text>

                        <Text style={styles.psctTxt}>Text before a ":" denotes activation conditions. Conditions only need to be met when the card is activated, unless otherwise stated. Conditions other than target requirements that have be met during both activation and resolution are specifically noted in a seperate sentence after the effect sentence.</Text>

                        <Text style={styles.psctTxt}>Text before a ";" denote any actions that must be taken when a card or effect is activated (such as costs or target declarations).</Text>

                        <Text style={styles.psctTxt}>Built-In Special Summons (other than Synchro, Xyz, Pendulum, or Link) are denoted by parentheses " () " stating the location from which the monster can be Special Summoned.</Text>

                        <Text style={styles.psctTxt}>Cards with bulleted effects (●) that resolve in the same Chain Link specify whether they resolve simultaneously or sequentially (if sequentially, effects are applied in the order they are listed). In these cases, each effect activated resolves independent of the success of the other(s).</Text>

                    </View>
                    : <View></View>
                }

                {/*Terminology and Phrasing*/}
                <TouchableOpacity onPress={() => this.changeBoxState("termNPhrase")}>
                    <Text style={styles.title}>Terminology and Phrasing</Text>
                </TouchableOpacity>
                {(this.state.termNPhrase)
                    ? <View>

                        <Text style={styles.psctTxt}>The terms "that target" or "those targets" and "it" or "they/them" have specific meanings in the resolution of the effect. "That target" and "those targets" indicate that targets must still meet the target requirements at resolution to be affected. "Both (those) targets" and "all three targets" indicate that all targets must still meet the target requirements at resolution for any of them to be affected. "It" and "they/them" indicate that the targets do not need to meet the target requirements at resolution, only when targeted.</Text>

                        <Text style={styles.psctTxt}>Cards and effects that state "You can only ACTIVATE this card/effect once per turn/Duel" can be activated again in the same turn/Duel if the activation is negated. However, if it is stated as "You can only USE this card/effect once per turn/Duel", it can not be activated again if it is negated.</Text>

                    </View>
                    : <View></View>
                }
                {/*Conjunctives*/}
                <TouchableOpacity onPress={() => this.changeBoxState("conjunctives")}>
                    <Text style={styles.title}>Conjunctives</Text>
                </TouchableOpacity>
                {(this.state.conjunctives)
                    ? <View>

                        <Text style={styles.psctTxt}><Text style={styles.boldText}>Then</Text> - In "Do A, then do B", B happens after A. These things happen in sequence, not simultaneously. A is required for B, but NOT vice-versa: if A does not happen, then stop; even if B cannot happen, you still do A. </Text>

                        <Text style={styles.psctTxt}><Text style={styles.boldText}>And</Text> - In "Do A and B", both A and B happen simultaneously. BOTH A and B are required. If you cannot do both, you do nothing.</Text>

                        <Text style={styles.psctTxt}><Text style={styles.boldText}>And if you do</Text> - In "Do A, and if you do, do B", both A and B happen simultaneously. A is required for B, but NOT vice-versa: if A does not happen, then stop; even if B cannot happen, you still do A.</Text>

                        <Text style={styles.psctTxt}><Text style={styles.boldText}>Also</Text> - In "Do A, also do B", both A and B happen simultaneously. Neither is required for the other to occur.</Text>

                        <Text style={styles.psctTxt}><Text style={styles.boldText}>Also, after that</Text> - In "Do A, also, after that, do B", B happens after A. These things happen in sequence, not simultaneously. Neither is required for the other to occur.</Text>

                    </View>
                    : <View></View>
                }

                {/*glossary*/}
                <TouchableOpacity onPress={() => this.changeBoxState("glossary")}>
                    <Text style={styles.title}>Glossary</Text>
                </TouchableOpacity>
                {(this.state.glossary)
                    ? <View>

                        <Text style={styles.psctTxt}><Text style={styles.boldText}>Banish</Text> - remove card from play. cards are usually kept off to the side, but must remain visible to both players.</Text>

                        <Text style={styles.psctTxt}><Text style={styles.boldText}>Excavate</Text> - reveal cards from the top of the deck. unless effect states otherwise, excavated cards are returned in the same order and the deck is not shuffled.</Text>

                        <Text style={styles.psctTxt}><Text style={styles.boldText}>LP</Text> - Life Points</Text>

                        <Text style={styles.psctTxt}><Text style={styles.boldText}>GY</Text> - Graveyard</Text>

                        <Text style={styles.psctTxt}><Text style={styles.boldText}>Possession</Text> - refers to ownership of the card (in context of game state, not actual ownership). For example: if Player A activates Exchange, and takes Left Leg of the Forbidden One from Player B's hand, then Player A currently possesses the Left Leg of the Forbidden One. A card can be said to be in a player's possession as long as it is in any area of play which belongs to the player (Deck, Graveyard, etc. etc.)</Text>

                        <Text style={styles.psctTxt}><Text style={styles.boldText}>Control</Text> - refers to which side of the field a card is on. Similar to possession but only in the context of the field.</Text>

                        <Text style={styles.psctTxt}><Text style={styles.boldText}>Piercing Battle Damage</Text> - This is a type of effect that inflicts battle damage even if the opposing monster is in Defense Mode. Calculate damage by subtracting the DEF of the opposing monster from the attacking monster's ATK.</Text>

                        <Text style={styles.psctTxt}><Text style={styles.boldText}>Leaves the Field</Text> - Any card that was on the field, then is moved to either the Graveyard, hand, or is banished is considered to have left the field. Note that effects that activate when it leaves the field do NOT activate if it goes from the field to the Deck, since it get's lost in the shuffle.</Text>

                    </View>
                    : <View></View>
                }
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        textDecorationLine: 'underline',
        textAlign: 'center'
    },
    psctTxt: {
        textAlign: 'center'
    }, 
    boldText: {
        fontWeight: 'bold'
    }
})
export default PSCT;