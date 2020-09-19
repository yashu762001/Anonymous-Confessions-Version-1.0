import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, Animated} from 'react-native';


const HomeScreen = ({navigation})=> {
    return (
      <View style = {{
          flex: 1, 
          justifyContent : "center",
          alignItems : "center",
      }}> 
      
      <Text style = {{
        textAlign : "center",
       
        
      }} > Welcome To The Home Screen </Text>
  
      <Button 
      
      title = "Go To details Screen"
  
      onPress = {()=> navigation.navigate("Details")}
      
      
      />
      
      </View>
    )
  }

  export default HomeScreen