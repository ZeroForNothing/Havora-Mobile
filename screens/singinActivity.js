import React, {Component} from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator
} from "react-native";

import {UserSignIn} from "../js/signin";
import {Formik} from "formik";
import * as yup from "yup";

export default class signinActivity extends Component {
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

    return (<View style={styles.container}>
      <ImageBackground source={require("../assets/displayBackground.jpg")} style={styles.backgroundImage}>
        <Formik initialValues={{
            username: "",
            password: ""
          }} onSubmit={(values, actions) => {
            UserSignIn(actions, navigation, values.username, values.password, null);
          }} validationSchema={validationSchema}>
          {
            formikProps => (<React.Fragment>
              <TextInput placeholder="Username" style={styles.input} onChangeText={formikProps.handleChange("username")} onBlur={formikProps.handleBlur("username")}/>
              <Text style={{
                  color: "red"
                }}>
                {formikProps.touched.username && formikProps.errors.username}
              </Text>

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
                        Sign In
                      </Text>
                    </TouchableOpacity>
                  </View>)
              }
            </React.Fragment>)
          }
        </Formik>

        <View style={styles.touchableOpacityView}>
          <TouchableOpacity disabled={false} style={styles.touchableOpacityRegister}>
            <Text style={styles.touchableOpacityTextRegister}>Register</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>);
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },

  backgroundImage: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },

  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
    backgroundColor: "white",
    borderRadius: 20
  },

  touchableOpacityView: {
    marginTop: 10,
    width: 180,
    height: 30,
    alignSelf: "center"
  },

  touchableOpacitySign: {
    backgroundColor: "white",
    borderRadius: 20,
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center"
  },

  touchableOpacityTextSign: {
    color: "purple",
    fontWeight: "bold"
  },

  touchableOpacityRegister: {
    backgroundColor: "purple",
    borderRadius: 20,
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center"
  },

  touchableOpacityTextRegister: {
    color: "white",
    fontWeight: "bold"
  }
});
