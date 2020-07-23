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

// import {UserSignIn} from "Login/js/signinJS";
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
    const validationSchema = yup.object().shape({
      username: yup.string().label("username").required(),

      password: yup.string().label("password").required().min(2, "Seems a bit short...")
    });

    const showError = () => this.setState({toggleCancel: true})
    const hideError = () => this.setState({toggleCancel: false})

    return (<View style={styles.container}>
      <Image source={require("../sharedComponents/Media/Z4N_Logo.png")} style={styles.logoImage}/>
      <Formik initialValues={{
          username: "",
          password: ""
        }} onSubmit={(values, actions) => {
          // UserSignIn(actions, navigation, values.username, values.password, null);
        }} validationSchema={validationSchema}>
        {
          formikProps => (<React.Fragment>
            <Text style={styles.errorTextDesign}>
              {formikProps.touched.username && formikProps.errors.username}
            </Text>
            <TextInput placeholder="Username" onFocus={() => this.setState({isFocused: true})} onBlur={() => this.setState({isFocused: false})} style={[
                styles.input, {
                  borderColor: this.state.isFocused
                    ? styles.inputSelected.borderColor
                    : styles.input.borderColor
                }
              ]} onChangeText={formikProps.handleChange("username")}/>

            <TextInput placeholder="Password" style={styles.input} onChangeText={formikProps.handleChange("password")} onBlur={formikProps.handleBlur("password")}/>
            <Text style={{
                color: "red"
              }}>
              {formikProps.touched.password && formikProps.errors.password}
            </Text>

            {
              formikProps.isSubmitting
                ? (<ActivityIndicator/>)
                : (<View style={styles.touchableOpacityView}>
                  <TouchableOpacity disabled={false} style={styles.touchableOpacitySign} onPress={formikProps.handleSubmit}>
                    <Text style={styles.touchableOpacityTextSign}>
                      Login
                    </Text>
                  </TouchableOpacity>
                </View>)
            }
          </React.Fragment>)
        }
      </Formik>

      <View style={styles.touchableOpacityView}>
        <TouchableOpacity disabled={false} style={styles.touchableOpacityRegister}>
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
    backgroundColor: "#bfbfbf",
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
    backgroundColor: "#bfbfbf",
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