import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, Animated} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';  
import AntIcon from "react-native-vector-icons/AntDesign";
import {Asset} from 'expo'

import HomeScreen from './screens/HomeScreen'
import DetailsScreen from './screens/DetailsScreen'
import MyTabs from './screens/StackScreens'



const Drawer = createDrawerNavigator();


// const HomeStackScreen = ({navigation})=> {
//   return (
//       <HomeStack.Navigator screenOptions = {{
//         headerStyle : {
//           backgroundColor : "#009387"
//         },
//         headerTintColor : "white",
//         headerTitleStyle : {
//           fontWeight : "bold",
//         }
//       }}>
//         <HomeStack.Screen name = "Home" component = {HomeScreen} options = {{
//           headerLeft : ()=> (
//             <Icon.Button name = "ios-menu" size = {28} onPress = {()=>navigation.openDrawer()} 
//               backgroundColor = "#009387"
//             />
//           )
//         }}/>
//       </HomeStack.Navigator>
//   )
// }

// const DetailsStackScreen = ({navigation})=> {
//   return (
//     <DetailsStack.Navigator screenOptions = {{
//       headerStyle : {
//         backgroundColor : "#009387"
//       },
//       headerTintColor : "white",
//       headerTitleStyle : {
//         fontWeight : "bold",
//       }
//     }}>
//       <DetailsStack.Screen name = "Details" component = {DetailsScreen} options = {{
//           headerLeft : ()=> (
//             <Icon.Button name = "ios-menu" size = {28} onPress = {()=>navigation.openDrawer()} 
//               backgroundColor = "#009387"
//             />
//           )
//         }} />
//     </DetailsStack.Navigator>
//   )
// }

const App = () => {
  return (
    <NavigationContainer>
       <Drawer.Navigator initialRouteName="Home" drawerStyle={{
    backgroundColor: 'white',
    width: 311,
  }} drawerContentOptions = {{
    activeTintColor : "black",
    activeBackgroundColor : "skyblue"
  }}>
        <Drawer.Screen name="Home" component={MyTabs} />
        {/* <Drawer.Screen name="Details" component={DetailsStackScreen} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};



export default App;