import { View, TouchableOpacity, Image } from "react-native"

export default function Card(props) {
    return (
        <View style={props.Style}>
            <TouchableOpacity onPress={props.onClick}>
                <Image source={props.Source} style={props.Size} />
            </TouchableOpacity>
        </View>
    )
}