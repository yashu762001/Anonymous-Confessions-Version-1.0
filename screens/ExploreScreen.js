import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, Animated} from 'react-native';


const ExploreScreen = ()=> {
    return (
      <View style = {{
          flex: 1, 
          justifyContent : "center",
          alignItems : "center",
          backgroundColor : "white"
      }}> 
      
      <Text style = {{
        textAlign : "center",
       
        
      }} > Welcome To The Explore Screen </Text>
  
      <Button 
      
      title = "Explore"
  
      onPress = {()=> alert("Kya Explore Karna Chahoge")}
      
      
      />
      
      </View>
    )
  }

  export default ExploreScreen