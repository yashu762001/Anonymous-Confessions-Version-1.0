import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, Animated} from 'react-native';


const DetailsScreen = ({navigation})=> {
    return (
      <View style = {{
        flex : 1,
        alignItems : "center",
        justifyContent : "center",
      }}> 
      
      <Text style = {{
        textAlign : "center",
        
        
      }} > Welcome To The Details Screen </Text>
  
      <Button
      
      title = "Go To details screen .... again"
      onPress = {()=>navigation.push("Details")}
      
      
      />
  
  <Button
      
      title = "Go Back To The Home Page"
      onPress = {()=>navigation.goBack()}
      
      
      />
      
      
      </View>
    )
  }

  export default DetailsScreen