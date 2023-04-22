import React, { useState } from "react";
import { Text, Dimensions, ScrollView, StyleSheet, ImageBackground, View } from "react-native"
import Card from "./Card/Card"
import CardOne from "./Message/CardOne/CardOne"
import CardTwo from "./Message/CardTwo/CardTwo";
import CardThree from "./Message/CardThree/CardThree";

export default function Surprise() {

    const fullWidth = Dimensions.get('window').width;

    const [isCardOne, setCardOne] = useState(false);
    const [isCardTwo, setCardTwo] = useState(false);
    const [isCardThree, setCardThree] = useState(false);

    return (
        <React.Fragment>
            {
                (isCardOne) ?
                    <CardOne onClick={() => { setCardOne(!isCardOne) }} />
                    : (isCardTwo) ?
                        <CardTwo onClick={() => { setCardTwo(!isCardTwo) }} />
                        : (isCardThree) ?
                        <CardThree onClick={() => { setCardThree(!isCardThree) }} />
                        
                            :
                            <ImageBackground
                                source={require("./background.gif")}
                                style={{ width: fullWidth }}
                            >
                                <ScrollView showsVerticalScrollIndicator={false} >

                                    <ImageBackground
                                        source={require("./textBox.png")}
                                        style={Styles.textBox}
                                    >
                                        <Text style={Styles.Font}>
                                            ❤️ WISH YOU HAPPIEST BIRTHDAY ❤️
                                        </Text>
                                    </ImageBackground>

                                    <View style={Styles.Cards}>
                                        <Card
                                            Style={Styles.SurpriseContainer}
                                            Source={require("./msgPuppy.gif")}
                                            Size={{ height: 220, width: 200 }}
                                            onClick={() => setCardOne(!isCardOne)}
                                        />

                                        <Card
                                            Style={Styles.SurpriseContainer}
                                            Source={require("./wishesCat.gif")}
                                            Size={{ height: 150, width: 230 }}
                                            onClick={() => setCardTwo(!isCardTwo)}
                                        />
                                        <Card
                                            Style={Styles.SurpriseContainer}
                                            Source={require("./partyCat.gif")}
                                            Size={{ height: 150, width: 230 }}
                                            onClick={() => setCardThree(!isCardThree)}
                                        />
                                    </View>

                                </ScrollView>
                            </ImageBackground>
            }
        </React.Fragment>
    )
}

const Styles = StyleSheet.create({
    SurpriseContainer: {
        minWidth: 230,
        backgroundColor: 'yellow',
        borderWidth: 5,
        borderColor: 'white',
        shadowOffset: { height: 5, width: 5 },
        shadowColor: 'black',
        shadowRadius: 1,
        padding: 20,
        margin: 8,
        alignItems: 'center'
    },
    Font: {
        margin: 22,
        fontSize: 38,
        transform: [{ rotate: '-10deg' }],
        fontStyle: 'italic',
        color: 'white',
        fontWeight: 'bold',
        textShadowOffset: { width: 2, height: 2 },
        textShadowColor: '#696969',
        textShadowRadius: 1,
        textAlign: 'center'
    },
    textBox: {
        height: 380,
        margin: 0,
        padding: 30,
        paddingTop: 80
    },
    Cards: {
        backgroundColor: '#00ffff',
        borderTopWidth: 5,
        borderTopColor: 'white'
    }
})