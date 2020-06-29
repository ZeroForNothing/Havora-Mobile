import React, {  Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ImageBackground, ActivityIndicator } from 'react-native';

import {UserSignIn} from '../js/signin';
import { Formik } from 'formik';
import * as yup from 'yup';

export default class signInActivity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
          };
    }

  render() {
   
    const validationSchema = yup.object().shape({
      email: yup
        .string()
        .label('Email')
        .email()
        .required(),

      password: yup
        .string()
        .label('Password')
        .required()
        .min(2, 'Seems a bit short...')
        .max(10, 'We prefer insecure system, try a shorter password.'),
    });

    return (
        <View style={styles.container}>
        <ImageBackground source={require('../assets/displayBackground.jpg')} style={styles.backgroundImage}>
          
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values, actions) => {
            alert(JSON.stringify(values));
            setTimeout(() => {
              actions.setSubmitting(false);
            }, 1000);
          }}
          validationSchema={validationSchema}>

{formikProps => (
        <React.Fragment>
             <TextInput 
            placeholder="Username" 
            style={styles.input}
            onChangeText = {(username) => this.setState({ username })}
            onChangeText={formikProps.handleChange('email')}
            onBlur={formikProps.handleBlur('email')}
            autoFocus
            />
            <Text style={{ color: 'red' }}>
              {formikProps.touched.email && formikProps.errors.email}
            </Text>

            <TextInput
            placeholder="Password"
            style={styles.input}
            onChangeText = {(password) => this.setState({ password })}
            onChangeText={formikProps.handleChange('password')}
            onBlur={formikProps.handleBlur('password')}
            secureTextEntry
            />
            <Text style={{ color: 'red' }}>
              {formikProps.touched.password && formikProps.errors.password}
            </Text>

          {formikProps.isSubmitting ? (
            <ActivityIndicator />
          ) : (
            <View style={styles.touchableOpacityView}>
              <TouchableOpacity disabled={false} style={styles.touchableOpacityRegister} onPress={formikProps.handleSubmit}>
                <Text style={styles.touchableOpacityTextRegister}>Register</Text>
              </TouchableOpacity>
            </View>
          )}
        </React.Fragment>
      )}
          </Formik>
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