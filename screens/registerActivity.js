import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text, ImageBackground, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import {UserSignUp} from '../js/signup';

export default class registerActivity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            userName: '',
            eMail: '',
            desc: '',
            password: '',
            gender: '',
            dob: '',
          };
    }

  render() {

    
    var data =JSON.stringify({ firstname: this.state.firstName, lastname: this.state.lastName, username: this.state.userName, email: this.state.eMail, description: "null", password: this.state.password, gender: 1, birthYear: 1999 , birthMonth: 1, birthDay: 1 })

    return (
      <View style={styles.MainContainer}>
          <ImageBackground source={require('../assets/displayBackground.jpg')} style={styles.backgroundImage}>
            <TextInput 
                placeholder="First Name" 
                style={styles.input}
                onChangeText = {(firstName) => this.setState({ firstName })}
                />

            <TextInput 
                placeholder="Last Name" 
                style={styles.input}
                onChangeText = {(lastName) => this.setState({ lastName })}
                />
               
            <TextInput 
                placeholder="Username" 
                style={styles.input}
                onChangeText = {(userName) => this.setState({ userName })}
                />   

            <TextInput 
                placeholder="Email" 
                style={styles.input}
                onChangeText = {(eMail) => this.setState({ eMail })}
                />      

            <TextInput 
                placeholder="Password" 
                style={styles.input}
                onChangeText = {(password) => this.setState({ password })}
                />       


            
          
            <View style={styles.touchableOpacityView}>
            <TouchableOpacity style={styles.touchableOpacitySign} onPress={()=>UserSignUp(data,null)}>
                <Text style={styles.touchableOpacityTextSign}>Sign Up</Text>
              </TouchableOpacity>
            </View>

          </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
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

  genderPicker:{
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


});

/**
 <View  style={styles.genderPicker}>
                <RNPickerSelect
                            placeholder={{label: 'Select a Gender...', value: null,}}
                            items={[{ label: 'Male', value: 'Male' },{label: 'Female', value: 'Female' },]}
                            onValueChange={(gender) => this.setState({ gender })}
                        /> 
            </View>
 */