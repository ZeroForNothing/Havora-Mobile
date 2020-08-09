import * as React from 'react';
import { Text, View , StyleSheet , TouchableOpacity ,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Constants from "expo-constants";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons  , FontAwesome5  , Feather ,SimpleLineIcons} from '@expo/vector-icons';

import {Home} from './homeScreen';
import {Profile} from './profileScreen';
import {Community} from './communityScreen';
import {Store} from './storeScreen';
import {Inventory} from './inventoryScreen';
import {Chat} from './chatScreen';



const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#333"
      inactiveColor="#c7c7c7"
      barStyle={{ backgroundColor: '#e8e8e8' }}
      labelStyle={{ fontSize: 18 }}

      tabBarOptions={{ showLabel:false }}
    >
    <Tab.Screen
      name="Community"
      component={Community}
      options={{
        tabBarIcon: ({ color }) => (
          <Feather name="users" color={color} size={24}/>
        ),
      }}
    />
    <Tab.Screen
    name="Store"
    component={Store}
    options={{
      tabBarIcon: ({ color }) => (

        <FontAwesome5 name="opencart" size={20} color={color} />
      )
    }}
    />
    <Tab.Screen
      name="Home"
      component={Home}

      options={{
        tabBarIcon: ({ color }) => (
          <SimpleLineIcons name="home" size={24} color={color} />
        ),
      }}
    />

      <Tab.Screen
        name="Inventory"
        component={Inventory}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bag-personal-outline" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="message-text-outline" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>

    <View style={styles.statusBar}>
      <Text  style={styles.statusBarText}>Zero for Nothing</Text>
      <TouchableOpacity //onPress={}
      style={styles.userProfile}>
         <Image
            style={styles.userPic}
            source={{uri : 'https://zerofornothing.com/uploadMedia/profilePicture/BCF4D45A3B074B31A7998520FED05ACE56C8146AC7A94E9A84D0315CBCEBCCD35B66CC4902C540CA949B8BFF8367981B/medium.jpg'}}
          />
      </TouchableOpacity>
    </View>
      <MyTabs />
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
statusBar: {
  paddingTop: Constants.statusBarHeight,
  backgroundColor:'#e8e8e8',
  flexDirection: 'row',
    justifyContent:'space-between',
      paddingVertical: 8,
      alignItems:'center',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2,

      elevation: 4,
},
statusBarText : {
  fontSize: 24,
    paddingTop:8,
  paddingLeft:20
},
userProfile:{
  paddingRight:14,

},
userPic :{
  marginTop:5,
  width:40 ,
  height:40,
  borderRadius:50,
}
})
