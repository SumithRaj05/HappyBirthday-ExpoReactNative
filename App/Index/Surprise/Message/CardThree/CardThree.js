import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';

const reelItems = [
    require("./Three1.gif"),
    require("./Three2.gif"),
    require("./Three3.gif"),
    require("./Three4.gif"),
    require("./Three5.gif")
];

const CardThree = (props) => {
    const [reel1, setReel1] = useState(reelItems[2]);
    const [reel2, setReel2] = useState(reelItems[2]);
    const [reel3, setReel3] = useState(reelItems[2]);
    const [spinning, setSpinning] = useState(false);

    const [win, setWin] = useState(null);

    const spinReels = () => {
        setSpinning(true);

        let timeout1, timeout2, timeout3;

        timeout1 = setInterval(() => {
            setReel1(reelItems[Math.floor(Math.random() * reelItems.length)]);
        }, 100);

        timeout2 = setInterval(() => {
            setReel2(reelItems[Math.floor(Math.random() * reelItems.length)]);
        }, 100);

        timeout3 = setInterval(() => {
            setReel3(reelItems[Math.floor(Math.random() * reelItems.length)]);
        }, 100);


        setTimeout(() => {
            clearInterval(timeout1);
            setReel1(reelItems[Math.floor(Math.random() * reelItems.length)]);
        }, 1000);

        setTimeout(() => {
            clearInterval(timeout2);
            setReel2(reelItems[Math.floor(Math.random() * reelItems.length)]);
        }, 2000);

        setTimeout(() => {
            clearInterval(timeout3);
            setReel3(reelItems[Math.floor(Math.random() * reelItems.length)]);
            setSpinning(false);
            if (this.r1 === this.r2 && this.r2 === this.r3) {
                setWin(true)
            } else {
                setWin(false)
            }
        }, 3000);
    };

    useEffect(() => {
        this.r1 = reel1;
        this.r2 = reel2;
        this.r3 = reel3;
    }, [reel1, reel2, reel3])

    return (
        <React.Fragment>

<TouchableOpacity
                onPress={props.onClick}
                style={styles.Cancel}
            >
                <Text style={styles.Cross}>X</Text>
            </TouchableOpacity>

        <View style={styles.container}>
            <Text style={styles.header}>$ SLOT MACHINE $</Text>
            {
                (win !== null) ?
                    (win) ?
                        <Text
                            style={{
                                margin: 10,
                                color: "blue",
                                fontWeight: "bold"
                            }}
                        > Yeyy!! U WON,{"\n"}so now give me partyy</Text>
                        :
                        <Text
                            style={{
                                margin: 10,
                                color: "red",
                                fontWeight: "bold"
                            }}
                        >Try again heheh</Text>
                    :
                    undefined
            }
            <View style={styles.reelContainer}>
                <View style={styles.reelBox}>
                    <Image style={styles.reel} source={reel1} />
                </View>
                <View style={styles.reelBox}>
                    <Image style={styles.reel} source={reel2} />
                </View>
                <View style={styles.reelBox}>
                    <Image style={styles.reel} source={reel3} />
                </View>
            </View>
            <TouchableOpacity
                style={[styles.button, spinning && styles.disabledButton]}
                onPress={spinReels}
                disabled={spinning}
            >
                <View style={styles.buttonText}>
                    <Text
                        style={{
                            alignSelf: "center",
                            color: "white",
                            fontSize: 30,
                            fontWeight: "bold",
                            marginVertical: 10
                        }}
                    >GO!</Text>
                </View>
            </TouchableOpacity>
        </View>
        </React.Fragment>
    );
};

const styles = StyleSheet.create({
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
    },
    header: {
        fontSize: 35,
        marginBottom: 80,
        fontWeight: "bold",
        color: "red",
        textDecorationLine: "underline"
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    reelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        borderWidth: 5,
        borderColor: "#FFD700"
    },
    reelBox: {
        borderWidth: 1,
        borderColor: "#FFD700",
        backgroundColor: "#66ff66"
    },
    reel: {
        height: 100,
        width: 100,
        margin: 4,
    },
    button: {
        margin: 20,
        backgroundColor: '#2196F3',
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: "white"
    },
    disabledButton: {
        opacity: 0.5,
    },
    buttonText: {
        height: 70,
        width: 70,
        borderWidth: 1,
        borderRadius: 100,
        backgroundColor: "red"
    },
});

export default CardThree;