import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, Animated} from 'react-native';


const ProfileScreen = ()=> {
    return (
      <View style = {{
          flex: 1, 
          justifyContent : "center",
          alignItems : "center",
          backgroundColor : "white"
      }}> 
      
      <Text style = {{
        textAlign : "center",
       
        
      }} > Welcome To The Profile Screen </Text>
  
      <Button 
      
      title = "Profile"
  
      onPress = {()=> alert("Kya Baat Khudki Profile Dekhna Chahoge")}
      
      
      />
      
      </View>
    )
  }

  export default ProfileScreen