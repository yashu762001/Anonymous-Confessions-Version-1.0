import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, Animated} from 'react-native';

const DisHonestScreen = ()=> {
    return (
        <View style = {{
            flex : 1,
            justifyContent : "center",
            alignItems :  "center",
        }}>
            <Text style = {{
                textAlign : "center",
                fontWeight : "bold",
            }}> List Of Confessions which you marked as dishonest.</Text>
        </View>
    )
}

export default DisHonestScreen
