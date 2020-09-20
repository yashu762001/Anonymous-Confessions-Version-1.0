import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, Animated} from 'react-native';

const MeterScreen = ()=> {
    return (
        <View style = {{
            flex : 1,
            justifyContent : "center",
            alignItems : "center",
        }}>
            <Text style = {{
                textAlign : "center",
                fontWeight : "bold",
            }}> Get Your Feedback On How Honest Are You In Your Confessions.</Text>
        </View>
    )
}

export default MeterScreen
