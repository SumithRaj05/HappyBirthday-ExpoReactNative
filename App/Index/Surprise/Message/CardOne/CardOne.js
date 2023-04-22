import React from "react";
import { Dimensions, Text, Image, ScrollView, StyleSheet, View, TouchableOpacity } from "react-native"

const fullWidth = Dimensions.get('window').width;

export default function CardOne(props) {
    return (
        <React.Fragment>
            <TouchableOpacity
                onPress={props.onClick}
                style={Styles.Cancel}
            >
                <Text style={Styles.Cross}>X</Text>
            </TouchableOpacity>
            <Text style={Styles.msgTittle}>Poem Just For You</Text>
            <ScrollView style={Styles.msgContainer}>
                <Image
                    source={require("./One3.gif")}
                    style={{
                        width: 200,
                        height: 200,
                        alignSelf: "center"
                    }}
                />
                <Text style={Styles.msgFont}>
                    " My best friend, {"\n"}
                    my closest confidant,{"\n"}
                    In you I find my rock, {"\n"}
                    my anchor, my font{"\n"}
                    Of wisdom, of joy, {"\n"}
                    of laughter and fun,{"\n"}
                    You're the one I turn to {"\n"}
                    when my day is done.{"\n"}{"\n"}

                    With you, I can be myself, {"\n"}
                    unfiltered and true,{"\n"}
                    And know that you'll accept{"\n"} 
                    me, faults and all, too.{"\n"}
                    We've shared so much, {"\n"}
                    through thick and thin,{"\n"}
                    Through every trial and {"\n"}
                    triumph we've been in.{"\n"}

                </Text>
                <Image
                    source={require("./One2.gif")}
                    style={{
                        width: 200,
                        height: 200,
                        alignSelf: "center"
                    }}
                />

                <Text style={Styles.msgFont}>{"\n"}
                    You know my secrets,{"\n"}
                    my hopes, my fears,{"\n"}
                    And hold them close, {"\n"}
                    through the passing years.{"\n"}
                    We've grown together, {"\n"}
                    side by side,{"\n"}
                    And with you, I know {"\n"}
                    I'll always abide.{"\n"}{"\n"}

                    Thank you, my friend, {"\n"}
                    for all that you do,{"\n"}
                    For being there, {"\n"}
                    for seeing me through.{"\n"}
                    May our bond endure, {"\n"}
                    forever strong,{"\n"}
                    My best friend, {"\n"}
                    you're where I belong."{"\n"}{"\n"}

                </Text>
                <Text style={Styles.msgTittle}>THE END{"\n\n"}</Text>
            </ScrollView>
        </React.Fragment>
    )
}

const Styles = StyleSheet.create({
    msgContainer: {
        backgroundColor: "#55ff55",
        padding: 20,
        width: fullWidth,
        height: 300,
        borderWidth: 2,
        borderColor: "white"
    },
    msgFont: {
        fontSize: 20,
        textAlign: "center",
        fontFamily: "sans-serif",
    },
    msgTittle: {
        margin: 10,
        fontSize: 30,
        alignSelf: "center",
        fontFamily: "serif",
        fontWeight: "bold",
        fontStyle: "italic"
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