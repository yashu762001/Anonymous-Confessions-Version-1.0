import {Swipeable} from 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, Animated, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'; 
import Icon from 'react-native-vector-icons/Ionicons';
import AntIcon from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import HomeScreen from './screens/HomeScreen'
import ConfessScreen from './screens/ConfessScreen'
import MyStackScreen from './screens/MyStackScreen'
import HonestStackScreen from './screens/HonestStackScreen'
import DisHonestStackScreen from './screens/DisHonestStackScreen'
import MeterStackScreen from './screens/MeterStackScreen'
import DrawerContent from './screens/DrawerContent'

const Drawer = createDrawerNavigator()
const Tab = createMaterialBottomTabNavigator()
const HomeStack = createStackNavigator()
const ConfessStack = createStackNavigator()

const ProfileDrawer = ()=> {
  return (
    <Drawer.Navigator initialRouteName = "Honesty Meter" drawerPosition="right"
    drawerContent = {props=> <DrawerContent {...props} />}>
      <Drawer.Screen name = "HonestyMeter" component = {MeterStackScreen} />
      <Drawer.Screen name = "HonestConfessions" component = {HonestStackScreen} />
      <Drawer.Screen name = "DishonestConfessions" component = {DisHonestStackScreen} />
    </Drawer.Navigator>
  )
}

const App = ()=> {
  return (
   
    <NavigationContainer>
       
      <Tab.Navigator
          initialRouteName="Home"
          activeColor="black"
          inactiveColor = "black"
      >
      
      <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
          tabBarLabel:"Home",
          tabBarColor : "rgb(80,160,230)",
          tabBarIcon: ({ color }) => (
              <Icon name="ios-home" color={color} size={30}  />
            ),
          }}
      />
      <Tab.Screen
          name="Confess"
          component={ConfessStackScreen}
          options={{
          tabBarLabel:"Confess",
          tabBarColor : "rgb(228,40,100)",
          tabBarIcon: ({ color }) => (
              <AntIcon name="form" color={color} size={30}  />
            ),
          }}
      />

               <Tab.Screen
                  name="MyConfessions"
                  component={MyStackScreen}
                  options={{
                  tabBarLabel: 'MyConfessions',
                  tabBarColor : "rgb(165,187,194)",
                  tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons name="database" color={color} size={30}  />
                  ),
                  }}
              />

                  <Tab.Screen
                      name="Profile"
                      component={ProfileDrawer}
                      options={{
                      tabBarLabel: 'Profile',
                      tabBarColor : "rgb(150,90,250)",
                      tabBarIcon: ({ color }) => (
                          <AntIcon name="user" color={color} size={30}  />
                      ),
                      }}
                  />
          </Tab.Navigator>
          </NavigationContainer>
          
          
      )
  }

const HomeStackScreen = ()=> {
  return (
      <HomeStack.Navigator screenOptions = {{
          headerStyle : {
              backgroundColor : "rgb(80,160,230)"
          }
      }}>
          <HomeStack.Screen name = "Home" component = {HomeScreen} />
      </HomeStack.Navigator>
  )
}

const ConfessStackScreen = ()=> {
  return (
      <ConfessStack.Navigator screenOptions = {{
          headerStyle : {
              backgroundColor : "rgb(228,40,100)"
          }
      }}>
          <ConfessStack.Screen name = "Confess" component = {ConfessScreen} />
      </ConfessStack.Navigator>
  )
}

export default App



