import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, Animated} from 'react-native';

const ConfessScreen = ()=> {
    return (
        <View style = {{
            flex :1,
            justifyContent : "center",
            alignItems : 'center'
        }}>
            <Text style = {{
                textAlign : "center",
                fontWeight : "bold",
            }}> Write Your Confession Anonymously and Honestly. You shoudl share everything and be honest.</Text>
        </View>
    )
}

export default ConfessScreen
