import  * as React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity
} from "react-native";
export class UserSignIn extends React.Component{

   UserSignInFunc = () => {
    async function postData(url = '', data = {}) {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        method: 'post',
        body: JSON.stringify(data)
      });
      return response.json();
    }
    postData('https://zerofornothing.com/SignIn', {
        username: this.props.username,
        password: this.props.password,
        check: null
      })
      .then(username => {
        if (username != null) {
          this.props.parentCallback(false);
          this.props.moveToMainPage("MainPage");
        }else{
          this.props.parentCallback(true);
        }
      }).catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });


  }

    render(){
       return(
         <TouchableOpacity style={styles.touchableOpacitySign} onPress={() => this.UserSignInFunc()}>
           <Text style={styles.touchableOpacityTextSign}>
             Login
           </Text>
         </TouchableOpacity>

       )
    }
}
const styles = StyleSheet.create({
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
  }
  })
