import React, {  Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

import {UserSignIn} from '../js/signin';

export default class signInActivity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
          };
    }

  render() {
   
    return (
        <View style={styles.container}>
        <ImageBackground source={require('../assets/displayBackground.jpg')} style={styles.backgroundImage}>
          <TextInput 
            placeholder="Usernamee" 
            style={styles.input}
            onChangeText = {(username) => this.setState({ username })}
            />
        
          <TextInput
            placeholder="Password"
            style={styles.input}
            onChangeText = {(password) => this.setState({ password })}
            />
  
            <View style={styles.touchableOpacityView}>
              <TouchableOpacity style={styles.touchableOpacitySign} onPress={()=>UserSignIn(this.state.username,this.state.password,null)}>
                <Text style={styles.touchableOpacityTextSign}>Sign In</Text>
              </TouchableOpacity>
            </View>
  
            <View style={styles.touchableOpacityView}>
              <TouchableOpacity style={styles.touchableOpacityRegister} onPress={()=>this.props.navigation.navigate('registerActivity')}>
                <Text style={styles.touchableOpacityTextRegister}>Register</Text>
              </TouchableOpacity>
            </View>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },

      backgroundImage: {
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
      },
    
      input:{
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 200,
        backgroundColor: 'white',
        borderRadius: 20,
      },
    
      touchableOpacityView: {
        marginTop: 10,
        width: 180,
        height: 30,
        alignSelf: "center",
       },
     
       touchableOpacitySign:{
         backgroundColor: 'white',
         borderRadius: 20,
         width: '100%',
         height: '100%',
         flexDirection: 'row',
         alignSelf: "center",
         justifyContent: "center",
         alignItems: "center",
       },
     
       touchableOpacityTextSign:{
         color: "purple",
         fontWeight: "bold",
       },

       touchableOpacityRegister:{
        backgroundColor: 'purple',
        borderRadius: 20,
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
      },
    
      touchableOpacityTextRegister:{
        color: "white",
        fontWeight: "bold",
      },
});