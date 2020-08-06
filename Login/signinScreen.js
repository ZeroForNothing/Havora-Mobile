import React, {Component} from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Image
} from "react-native";

import {UserSignIn} from "./js/signin";
import {Formik} from "formik";
import * as yup from "yup";

export default class signIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  render() {
    const navigation = this.props.navigation;
    const validationSchema = yup.object().shape({username: yup.string().label("username"), password: yup.string().label("password")});

    const showError = () => this.setState({toggleCancel: true})
    const hideError = () => this.setState({toggleCancel: false})

    return (<View style={styles.container}>
      <Image source={require("../sharedComponents/Media/Z4N_Logo.png")} style={styles.logoImage}/>
      <Formik initialValues={{
          username: "",
          password: ""
        }} onSubmit={(values, actions) => {
         UserSignIn(actions, navigation, values.username, values.password, null);
        }} validationSchema={validationSchema}>
        {
          formikProps => (<React.Fragment>
            <Text style={styles.errorTextDesign}>
              Invalid Username or Password
            </Text>
            <TextInput placeholder="Username" onFocus={() => this.setState({usernameFocus: true})} onBlur={() => this.setState({usernameFocus: false})} style={[
                styles.input, {
                  borderColor: this.state.usernameFocus
                    ? styles.inputSelected.borderColor
                    : styles.input.borderColor
                }
              ]}  onChangeText={formikProps.handleChange("username")}/>

            <TextInput placeholder="Password" onFocus={() => this.setState({passwordFocus: true})} onBlur={() => this.setState({passwordFocus: false})} style={[
                styles.input, {
                  borderColor: this.state.passwordFocus
                    ? styles.inputSelected.borderColor
                    : styles.input.borderColor
                }
              ]}  onChangeText={formikProps.handleChange("password")}/>

            <View style={styles.touchableOpacityView}>
                  <TouchableOpacity disabled={false} style={styles.touchableOpacitySign} onPress={formikProps.handleSubmit}>
                    <Text style={styles.touchableOpacityTextSign}>
                      Login
                    </Text>
                  </TouchableOpacity>
                </View>
          </React.Fragment>)
        }
      </Formik>

      <View style={styles.touchableOpacityView}>
        <TouchableOpacity style={styles.touchableOpacityRegister} onPress={() => {this.props.navigation.navigate('SignUpPage')}}
        >
          <Text style={styles.touchableOpacityTextRegister}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>);
  }
}
const styles = StyleSheet.create({
  errorTextDesign: {
    width: 242,
    height: 50,
    color: "#f9f9f9",
    backgroundColor: "#ff4646",
    borderRadius: 6,
    marginBottom: 10,
    textAlign: 'center',
    textAlignVertical: "center"
  },
  errorDesign: {},
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0"
  },

  logoImage: {
    width: 150,
    height: 150,
    marginBottom: 60,
    marginLeft: -10
  },
  inputSelected: {
    borderColor: '#757575'
  },
  input: {
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 3,
    borderColor: "#b8b8b8",
    padding: 8,
    margin: 0,
    width: 240,
    backgroundColor: "transparent",
    borderRadius: 6,
    marginBottom: 10
  },

  touchableOpacityView: {
    marginTop: 20,
    width: 200,
    height: 50,
    alignSelf: "center"
  },

  touchableOpacitySign: {
    backgroundColor: "#e8e8e8",
    borderRadius: 6,
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center"
  },

  touchableOpacityTextSign: {
    fontWeight: "bold"
  },

  touchableOpacityRegister: {
    backgroundColor: "#e8e8e8",
    borderRadius: 6,
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center"
  },

  touchableOpacityTextRegister: {
    fontWeight: "bold"
  }
});
