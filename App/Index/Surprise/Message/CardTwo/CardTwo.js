import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, TouchableOpacity, Image, Text, View } from "react-native";

const fullWidth = Dimensions.get('window').width;

export default function CardTwo(props) {
    const [isCakeBlow, setCakeBlow] = useState(false)
    const [showElement, setShowElement] = useState(true);

    useEffect(() => {
        if (isCakeBlow) {
            const timer = setTimeout(() => {
                setShowElement(false);
            }, 900);
            return () => clearTimeout(timer);
        }
    }, [isCakeBlow]);

    const CakeBlowHandler = () => {
        setCakeBlow(true)
    }

    return (
        <React.Fragment>
            <TouchableOpacity
                onPress={props.onClick}
                style={Styles.Cancel}
            >
                <Text style={Styles.Cross}>X</Text>
            </TouchableOpacity>
            {(isCakeBlow) ?
                <View style={Styles.imgBox}>
                    <Image
                        source={require("./Two1.gif")}
                        style={{
                            height: 160,
                            width: 100,
                            marginHorizontal: 20
                        }}
                    />
                    <Image
                        source={require("./Two3.gif")}
                        style={{
                            height: 150,
                            width: 170,
                            marginHorizontal: 20
                        }}
                    />
                </View>
                :
                <View style={Styles.imgBox}></View>
            }
            <TouchableOpacity onPress={CakeBlowHandler}>
                {
                    (isCakeBlow) ?
                        (showElement) ?
                            <Image
                                source={require("./cake2.gif")}
                                style={{
                                    height: 165,
                                    width: 150,
                                    alignSelf: "center"
                                }}
                            />
                            :
                            <Image
                                source={require("./cake3.gif")}
                                style={{
                                    height: 165,
                                    width: 150,
                                    alignSelf: "center"
                                }}
                            />
                        :
                        <Image
                            source={require("./cake1.gif")}
                            style={{
                                height: 165,
                                width: 150,
                                alignSelf: "center"
                            }}
                        />

                }
            </TouchableOpacity>
            <Text style={{
                alignSelf: "center",
                fontSize: 20,
                color: "#ffff00"
            }}
            >
                {
                    (isCakeBlow) ?
                        "🥳 Happy Birthdayyy 🥳"
                        :

                        "$ Blow up the candles $"
                }
            </Text>
            {(isCakeBlow) ?
                <Image
                    source={require("./Two2.gif")}
                    style={{
                        height: 250,
                        width: 200,
                        alignSelf: "center"
                    }}
                />
                :
                <View></View>
            }
        </React.Fragment>
    )
}

const Styles = StyleSheet.create({
    imgBox: {
        width: fullWidth,
        flexDirection: "row"
    },
    Cancel: {
        backgroundColor: "red",
        borderWidth: 3,
        borderColor: "white",
        height: 50,
        width: 50,
        marginTop: 30,
        marginLeft: 10,
        borderRadius: 10,
        padding: 0
    },
    Cross: {
        fontSize: 30,
        alignSelf: "center",
        color: "white",
        fontWeight: "bold"
    }
})