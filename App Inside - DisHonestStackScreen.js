import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, Animated} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import DisHonestScreen from './DisHonestScreen'

const DisHonestStack = createStackNavigator()

const DisHonestStackScreen = ({navigation})=> {
    return (
        <DisHonestStack.Navigator screenOptions = {{
            headerStyle : {
                backgroundColor : "rgb(150,90,250)"
            }
        }}>
            <DisHonestStack.Screen name = "Honesty Meter" component = {DisHonestScreen} options = {{
                title : "Dishonest Confessions",
                headerRight : ()=> (
                    <Icon.Button name = "ios-menu" size = {28} onPress = {()=>navigation.openDrawer()} 
                      backgroundColor = "rgb(150,90,250)"
                    />
                  )
            }} />
        </DisHonestStack.Navigator>
    )
}

export default DisHonestStackScreen
