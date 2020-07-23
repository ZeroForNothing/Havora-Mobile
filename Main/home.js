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

class home extends Component {
  render() {
    return (<View style={styles.container}>
      <Text>Hello</Text>
    </View>);
  }
}
export default home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
