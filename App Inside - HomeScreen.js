import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, Animated} from 'react-native';

const HomeScreen = ()=> {
    return (
        <View style = {{
            flex : 1,
            justifyContent : "center",
            alignItems : "center",
            
        }}>
            <Text style = {{
                textAlign :  "center",
                marginBottom : 30,
                fontWeight : "bold",
            }}> Welcome To The World Of Confessions Honest/Dishonest</Text>
            <Text style = {{
                textAlign :  "center",
                marginBottom : 30,
                fontWeight : "bold",
            }}> Be Honest In Your Confessions. Otherwise You can be considered as a lier or a 
                good honest person. Choice is Yours.
            </Text>
        </View>
    )
}

export default HomeScreen
