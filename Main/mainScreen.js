import * as React from 'react';
import { Text, View , StyleSheet , TouchableOpacity ,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Constants from "expo-constants";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons , FontAwesome , FontAwesome5  , MaterialIcons} from '@expo/vector-icons';

import {Home} from './homeScreen';
import {Profile} from './profileScreen';
import {Community} from './communityScreen';
import {Store} from './storeScreen';
import {Inventory} from './inventoryScreen';




const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#ff0000"
      inactiveColor="#c7c7c7"
      barStyle={{ backgroundColor: '#e8e8e8' }}
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: 'tomato' }}
      tabBarOptions={{ showLabel:false }}
    >
    <Tab.Screen
      name="Community"
      component={Community}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="group" size={24}  color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarLabel: 'Updates',
        tabBarIcon: ({ color }) => (
          <FontAwesome name="user-circle" color={color} size={24} />
        ),
      }}
    />

    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({ color }) => (
          <FontAwesome name="home" color={color} size={24} />
        ),
      }}
    />
      <Tab.Screen
        name="Store"
        component={Store}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="local-grocery-store" size={24} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Inventory"
        component={Inventory}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bag-personal" color={color} size={26} />
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
      <Text  style={styles.statusBarText}>Home</Text>
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
      paddingVertical: 10,
      alignItems:'center'
},
statusBarText : {
  fontSize: 24,

  paddingLeft:20
},
userProfile:{
  paddingRight:14
},
userPic :{
  marginTop:5,
  width:50 ,
  height:50,
  borderRadius:50,

}
})
