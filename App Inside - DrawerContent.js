import React from 'react';
import { StyleSheet,View, Button, TouchableOpacity, Image, Animated} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/Ionicons';
import AntIcon from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper'

export default function DrawerContent(props) {
    return (
        <View style = {{flex : 1}}>

            <DrawerContentScrollView {...props}>

                    <View style = {styles.drawerContent}>
                        <View style = {styles.userInfoSection}>
                            <Avatar.Image
                            
                            source = {{
                                uri : "data:image/jpeg;base64,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"
                                
                            }}
                            size = {120}
                            />
                        </View>

                        <View>
                            <Title style = {{
                                marginLeft : 35,
                                fontWeight : "bold",
                            }}> @ yashu762001 </Title>
                        </View>
                        <View
                            style={{
                                borderBottomColor: 'black',
                                borderBottomWidth: 1.5,
                                fontWeight : "bold",
                                marginBottom : 5,
                                }}>

                        </View>
                    </View>

                    <Drawer.Section style = {styles.drawerSection}>
                    <DrawerItem 
                    
                    icon = {()=> (
                        <AntIcon name = "dashboard" size = {28}  />
                    )}
                    label = {()=> (
                        <Text style = {{
                            fontWeight : "bold",
                        }}> Honesty Meter</Text>
                    )}
                    onPress = {()=> {props.navigation.jumpTo('HonestyMeter')
                    }}
                    
                    />

                <DrawerItem 
                    
                    icon = {()=> (
                        <AntIcon name = "like1" size = {28}  />
                    )}
                    label = {()=> (
                        <Text style = {{
                            fontWeight : "bold",
                        }}> Honest Confessions</Text>
                    )}
                    onPress = {()=> {
                        props.navigation.jumpTo('HonestConfessions')
                    }}
                    
                    />


                <DrawerItem 
                    
                    icon = {()=> (
                        <AntIcon name = "dislike1" size = {28}  />
                    )}
                    label = {()=> (
                        <Text style = {{
                            fontWeight : "bold",
                        }}> Dishonest Confessions</Text>
                    )}
                    onPress = {()=> {
                        props.navigation.jumpTo('DishonestConfessions')
                    }}
                    
                    />


                        </Drawer.Section>

            </DrawerContentScrollView>

            <Drawer.Section style = {styles.bottomDrawerSection}>

                    <DrawerItem 
                    
                    icon = {()=> (
                        <AntIcon name = "logout" size = {28}  />
                    )}
                    label = {()=> (
                        <Text style = {{
                            fontWeight : "bold",
                        }}> Sign Out</Text>
                    )}
                    onPress = {()=> alert("You are logged Out")}
                    
                    />

                    

            </Drawer.Section>
            
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 60,
      marginBottom : 15,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom : 0,
        backgroundColor : "rgb(150,90,250)",
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  })
