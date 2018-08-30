import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

class DmgStep extends Component {

    state = {
        the5Steps: true,
        startDmg: false,
        b4Dmg: false,
        performDmg: false,
        postDmg: false,
        endDmg: false,
        monstersDestroyedByBattle: false,
        extraNotes: false
    }
    changeBoxState = (prop) => {
        this.setState({
            [prop]: !this.state[prop]
        })
    }

    render() {
        return (
            <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
                {/*5 steps*/}
                <TouchableOpacity onPress={() => this.changeBoxState("the5Steps")}>
                    <Text style={styles.title}>Damage Step Breakdown</Text>
                </TouchableOpacity>
                {(this.state.the5Steps)
                    ? <View>
                        <Text style={styles.psctTxt}>Start of Damage Step</Text>
                        <Text style={styles.psctTxt}>Before Damage Calculation</Text>
                        <Text style={styles.psctTxt}>Perform Damage Calculation</Text>
                        <Text style={styles.psctTxt}>After Damage Calculation</Text>
                        <Text style={styles.psctTxt}>End of Damage Step</Text>
                    </View>
                    : <View></View>}
                {/*Start of Damage Step*/}
                <TouchableOpacity onPress={() => this.changeBoxState("startDmg")}>
                    <Text style={styles.title}>Start of the Damage Step</Text>
                </TouchableOpacity>
                {(this.state.startDmg)
                    ? <View>
                        <Text style={styles.psctTxt}>Turn Player declares they are entering the Damage Step.</Text>
                        <Text style={styles.psctTxt}>Effects that apply during "the Damage Step (only)" begin applying immediately.</Text>
                        <Text style={styles.psctTxt}>Face-down monsters being attacked are NOT flipped up at this time. If that monster is destroyed by a card effect, it is never considered to have been flipped face up.</Text>
                        <Text style={styles.psctTxt}>Cards and effects that activate "at the start of the Dmage Step" can be activated. For cards without PSCT, the text "without (applying) damage calculation activates either here, or before damage calculation. Some effects indicate the start of the Damage Step by specifying a battling monster's position (face-up or face-down) or by stating that a face-down monster is not flipped face-up yet.</Text>
                        <Text style={styles.psctTxt}>Fast effects that alter ATK/DEF can be activated.</Text>
                    </View>
                    : <View></View>}

                {/*Before Damage Calculation*/}
                <TouchableOpacity onPress={() => this.changeBoxState("b4Dmg")}>
                    <Text style={styles.title}>Before Damage Calculation</Text>
                </TouchableOpacity>
                {(this.state.b4Dmg)
                    ? <View>
                        <Text style={styles.psctTxt}>At this point, flip face-down monsters face-up.</Text>
                        <Text style={styles.psctTxt}>If a monster has an effect that activates when flipped face up, it is NOT activated at this time. It will activate after damage calculation, even if it leaves the Monster Zone before then.</Text>
                        <Text style={styles.psctTxt}>Regardless of whether or not the attacked monster was initially face-down, if the monster is Set at this point or later in the Damage Step (up until damage calculation is completed) it will be immediately flipped face-up</Text>
                        <Text style={styles.psctTxt}>If a monster is flipped face-up and it has a Continuous Effect, generally that effect is immediately applied. Any continuous effects that prevent a monster from being targeted for an attack do not prevent the current attack from continuing.</Text>
                        <Text style={styles.psctTxt}>If the monster is flipped face-up and has a Continuous Effect that would destroy itself, it is NOT destroyed at this time. Same thing applies if the flipped monster conflicts with a "You can only control 1 ???" or "There can only be 1 ??? on the field" effect, or if "Rivalry of Warlords" or "Gozen Match" is active and the flipped monster has the wrong Type/Attribute. The appropriate action will be determined and taken after damage calculation.</Text>
                        <Text style={styles.psctTxt}>Cards and effects that activate "before damage calculation" can be activated. For cards without PSCT, the text "without (applying) damage calculation" indicates that the effect activates either here, or at the start of the Damage Step.</Text>
                        <Text style={styles.psctTxt}>Fast effects that alter ATK/DEF can be activated.</Text>
                        <Text style={styles.psctTxt}>After both players have agreed that they have finished activating cards and effects in this part of the Damage Step, damage calculation is entered. If a monster was attacked and left the Monster Zone by a card effect during this Damage Step (up to this point), damage calculation is not conducted, but the rest of the Damage Step proceeds normally (allowing for appropriate Trigger Effects to activate normally).</Text>
                    </View>
                    : <View></View>}

                {/*Perform Damage*/}
                <TouchableOpacity onPress={() => this.changeBoxState("performDmg")}>
                    <Text style={styles.title}>Perform Damage Calculation</Text>
                </TouchableOpacity>
                {(this.state.performDmg)
                    ? <View>
                        <Text style={styles.psctTxt}>Battle damage is calculated and inflicted. If two monsters are involved in the battle, it is determined which monster(s) are destroyed by battle (if any).</Text>
                        <Text style={styles.psctTxt}>Effects that apply "during damage calculation (only)" are applied immediately. Cards and effects that activate "during damage calculation" can be activated.</Text>
                        <Text style={styles.psctTxt}>If a monster is destroyed by battle, it is NOT sent to the Graveyard yet.</Text>
                        <Text style={styles.psctTxt}>If an effect prevents a monster from being destroyed by this battle by doing something else "instead", it is decided whether to apply or not at this point and will be done at the end of the Damage Step.</Text>
                        <Text style={styles.psctTxt}>In general, cards and effects that modify ATK/DEF cannot be activated at this point or for the rest of this Damage Step.</Text>
                    </View>
                    : <View></View>}

                {/*After Damage Calc*/}
                <TouchableOpacity onPress={() => this.changeBoxState("postDmg")}>
                    <Text style={styles.title}>After Damage Calculation</Text>
                </TouchableOpacity>
                {(this.state.postDmg)
                    ? <View>
                        <Text style={styles.psctTxt}>Monsters that were destroyed by battle are still not sent to the Graveyard yet.[</Text>
                        <Text style={styles.psctTxt}>If a monster that was flipped face-up during the Damage Step has a Continuous Effect that destroys itself, that effect will apply immediately if still appropriate, unless the monster was destroyed by battle. If its name conflicts with a "You can only control 1 ???," or "There can only be 1 ??? on the field," effect, the flipped monster will immediately be destroyed, unless it was destroyed by battle. If "Rivalry of Warlords"/"Gozen Match" is active, and the flipped monster has the wrong Attribute/Type, it will be immediately sent to the Graveyard.</Text>
                        <Text style={styles.psctTxt}>Cards and effects that activate "after damage calculation" can be activated.</Text>
                        <Text style={styles.psctTxt}>Effects that activate when a player takes battle damage are activated at this time.</Text>
                        <Text style={styles.psctTxt}>Effects that activate when flipped face-up, such as Flip effects, are activated at this time.</Text>
                    </View>
                    : <View></View>}

                {/*End of Dmg Step*/}
                <TouchableOpacity onPress={() => this.changeBoxState("endDmg")}>
                    <Text style={styles.title}></Text>
                </TouchableOpacity>
                {(this.state.endDmg)
                    ? <View>
                        <Text style={styles.psctTxt}>Monsters that were destroyed by battle are now sent to the Graveyard (or another appropriate location.</Text>
                        <Text style={styles.psctTxt}>If an effect prevented a monster from being destroyed by battle by doing something else "instead", and the action is determined to be done earlier, it is done at this time.</Text>
                        <Text style={styles.psctTxt}>Cards and effects that activate "at the end of the Damage Step", such as "Amazoness Sage" or "Enlightenment", can be activated.</Text>
                        <Text style={styles.psctTxt}>Most effects that activate when a monster is destroyed by battle are also activated at this time.</Text>
                        <Text style={styles.psctTxt}>Once there are no effects left to activate or resolve, the Damage Step ends, and the Battle Step is re-entered.</Text>
                        <Text style={styles.psctTxt}>Effects that state "until the end of the Damage Step" or "during the Damage Step (only)" now expire and stop applying.[</Text>
                    </View>
                    : <View></View>}

                {/**/}
                <TouchableOpacity onPress={() => this.changeBoxState("monstersDestroyedByBattle")}>
                    <Text style={styles.title}>Monsters that were destroyed by battle</Text>
                </TouchableOpacity>
                {(this.state.monstersDestroyedByBattle)
                    ? <View>
                        <Text style={styles.psctTxt}>The following rules apply to monsters that were be destroyed by battle, but have not been sent to the Graveyard yet (or another appropriate location).</Text>
                        <Text style={styles.psctTxt}>They are treated as "destroyed by battle" for Continuous/Continuous-like Effects that apply to those monsters and for effects that activate after damage calculation when a monster is destroyed by battle.</Text>
                        <Text style={styles.psctTxt}>Their Continuous Effects are no longer applied.</Text>
                        <Text style={styles.psctTxt}>They cannot activate their optional Quick Effects, nor be used as a cost to activate an optional card or effect. Note that this does not apply to mandatory effects.</Text>
                        <Text style={styles.psctTxt}>They can not be targeted by card effects, have their battle positions changed, or hav etheir ATK/DEF changed.</Text>
                        <Text style={styles.psctTxt}>They can still have their effects negated.</Text>
                        <Text style={styles.psctTxt}>They cannot be returned to the hand by card effects, unless they are being returned instead of being sent to the Graveyard.</Text>
                        <Text style={styles.psctTxt}>They can still be destroyed, sent to the Graveyard, or banished before being sent to the Graveyard as a result of battle. If a monster leaves the field before being destroyed by battle, cards and effects that activate when that monster is destroyed by battle do not activate.[</Text>
                    </View>
                    : <View></View>}

                {/*extra notes*/}
                <TouchableOpacity onPress={() => this.changeBoxState("extraNotes")}>
                    <Text style={styles.title}>Cards and Effects that can be activated</Text>
                </TouchableOpacity>
                {(this.state.extraNotes)
                    ? <View>
                        <Text style={styles.psctTxt}>Only following cards and effects can be activated during the Damage Step (unless the card states otherwise)</Text>
                        <Text style={styles.psctTxt}>Mandatory Effects</Text>
                        <Text style={styles.psctTxt}>Counter Trap Cards</Text>
                        <Text style={styles.psctTxt}>Monster and Trap cards that negate the activation of a card or effect. Continuous trap cards with an optional effect that negates the activation of a card or effect may be activated here, but the effec to negate must be activated in the same Chain Link.</Text>
                        <Text style={styles.psctTxt}>Fast effects that directly alter the ATK/DEF—increasing, decreasing, changing to a specific amount, etc.—of a monster(s) on the field (not necessarily the ones currently battling), until before damage calculation. Generally, during damage calculation and afterwards, they can no longer be activated. Note that cards that do not DIRECTLY alter the ATK/DEF of a monster can not be activated.</Text>
                        <Text style={styles.psctTxt}>Trigger and Trigger-like Effects—if that effect activates in response to the card itself being moved to a different location, being flipped face-up (including Flip effects), or having its battle position changed—unless the effect Fusion Summons. In general, other optional Trigger and Trigger-like Effects that have activation conditions that can be met both during and outside the Damage Step cannot be activated. For cards that have PSCT, these normally state "(except during the Damage Step)" in their activation conditions. Otherwise, these effects are associated with activation conditions that involve actions regarding other cards, such as "When/If ... is destroyed", "When/If ... is added from ... to your hand", "When/If ... is Special Summoned", etc. This includes Trigger Effects that activate in response to actions involving itself and/or other cards (but not just itself or other cards).</Text>
                        <Text style={styles.psctTxt}>Cards and effects that activate in response to an event that is inherent to the Damage Step (e.g. the five unique timings of the Damage Step, battle damage is inflicted, a monster is destroyed by battle, etc.). Continuous Trap Cards with an optional effect that specifies an event in the Damage Step can be activated, but the effect must also be activated in the same Chain Link. This does not apply if the effect is mandatory.</Text>
                        <Text style={styles.psctTxt}>Cards that cannot be labeled as any of the above cards, but have rulings stating that they and/or their effect(s) are allowed to be activated during the Damage Step.</Text>
                        <Text style={styles.psctTxt}>A card or effect only needs to meet one of the above requirements to be able to activate during the Damage Step, even if it fails all the others.</Text>
                    </View>
                    : <View></View>}
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

export default DmgStep;