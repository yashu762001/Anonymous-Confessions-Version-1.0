import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, Animated} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import HonestScreen from './HonestScreen'

const HonestStack = createStackNavigator()

const HonestStackScreen = ({navigation})=> {
    return (
        <HonestStack.Navigator screenOptions = {{
            headerStyle : {
                backgroundColor : "rgb(150,90,250)"
            }
        }}>
            <HonestStack.Screen name = "Honesty Meter" component = {HonestScreen} options=  {{
                title : "Honest Confessions",
                headerRight : ()=> (
                    <Icon.Button name = "ios-menu" size = {28} onPress = {()=>navigation.openDrawer()} 
                      backgroundColor = "rgb(150,90,250)"
                    />
                  )
            }} />
        </HonestStack.Navigator>
    )
}

export default HonestStackScreen
