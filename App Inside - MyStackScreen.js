import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, Animated} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import MyScreen from './MyScreen'

const MyStack = createStackNavigator()

const MyStackScreen = ()=> {
    return (
        <MyStack.Navigator screenOptions = {{
            headerStyle : {
                backgroundColor : "rgb(165,187,194)"
            }
        }}>
            <MyStack.Screen name = "My Confessions" component = {MyScreen} />
        </MyStack.Navigator>
    )
}

export default MyStackScreen
