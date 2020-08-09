import React, { Component } from 'react';
import { Text, View ,Image, StyleSheet , TouchableOpacity} from 'react-native';
export class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render(){
    return(
      <TouchableOpacity style={styles.barContainer} onPress={() => {this.props.navigation.navigate("ChatSubPage")}}>
        <View style={styles.userPicContainer}>
          <Image
             style={styles.userPic}
             source={{uri : 'https://zerofornothing.com/uploadMedia/profilePicture/BCF4D45A3B074B31A7998520FED05ACE56C8146AC7A94E9A84D0315CBCEBCCD35B66CC4902C540CA949B8BFF8367981B/medium.jpg'}}
           />
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.username}>whatever</Text>
        </View>
      </TouchableOpacity>
    )
  };
}
const styles = StyleSheet.create({
  barContainer: {
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2,
    elevation: 2,
      backgroundColor:'#ededed',
      width:'96%',
      borderRadius:6,
      alignSelf:'center',
      flexDirection:'row',
      marginTop:10,
      paddingVertical:'2%',
      paddingHorizontal:'2%'
  },
  userPic:{
    width:60 ,
    height:60,
    borderRadius:50,
  },
  userPicContainer:{

  },
  detailContainer:{
    marginTop:12,
    marginLeft:16
  },
  username:{
    fontSize:21,

  }
})
