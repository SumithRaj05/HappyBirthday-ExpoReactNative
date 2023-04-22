import { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

import Surprise from "./Surprise/Surprise";

export default function Index() {
    const [isSurprise, setSurprise] = useState(false);

    return (
        <View>
            {
                isSurprise ?
                    <Surprise />
                    :
                    <TouchableOpacity onPress={() => setSurprise(!isSurprise)}>
                        <Text style={Styles.Font}>Here's your gift.</Text>
                        <Image source={require("./gift.gif")} style={{ height: 300, width: 232 }} />
                    </TouchableOpacity>
            }
        </View>
    )
}

const Styles = StyleSheet.create({
    Font: {
        fontSize: 30,
        fontStyle: 'italic',
        color: 'white',
        fontWeight: 'bold',
        textShadowOffset: { width: 2, height: 2 },
        textShadowColor: '#696969',
        textShadowRadius: 1
    }
})