import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, Animated} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import MeterScreen from './MeterScreen'

const MeterStack = createStackNavigator()

const MeterStackScreen = ({navigation})=> {
    return (
        <MeterStack.Navigator screenOptions = {{
            headerStyle : {
                backgroundColor : "rgb(150,90,250)"
            }
        }} >
            <MeterStack.Screen name = "Honesty Meter" component = {MeterScreen} options = {{
                headerRight : ()=> (
                    <Icon.Button name = "ios-menu" size = {28} onPress = {()=>navigation.openDrawer()} 
                      backgroundColor = "rgb(150,90,250)"
                    />
                  )
            }} />
        </MeterStack.Navigator>
    )
}

export default MeterStackScreen
