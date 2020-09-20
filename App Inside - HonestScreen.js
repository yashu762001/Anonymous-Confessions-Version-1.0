import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, Animated} from 'react-native';

const HonestScreen = ()=> {
    return (
        <View style = {{
            flex : 1,
            justifyContent : "center",
            alignItems : "center"
        }}>
            <Text style = {{
                textAlign : "center",
                fontWeight :  "bold",
            }}> List Of Confessions which you marked as honest.</Text>
        </View>
    )
}

export default HonestScreen
