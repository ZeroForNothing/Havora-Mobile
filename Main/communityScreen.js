import React, { Component } from 'react';
import { Text, View ,Image , StyleSheet, ScrollView ,StatusBar} from 'react-native';
import {GetTopPosts } from './js/community';


export class Community extends Component {
   state = {
     posts : []
   }
   callbackFunction = (childData) => {
      this.setState({ posts : childData })
    }
   render() {
      return (

         <View>
         <StatusBar  />
  <GetTopPosts parentCallback = {this.callbackFunction}/>
            <ScrollView style = {styles.scrollView}>
               {
                  this.state.posts.map((item, index) => (
                     <View key = {item.postID} style = {styles.post}>
                     <View>
                       {(item.categoryType == 1) ? <Text style={styles.postCategory}>General</Text> : ((item.categoryType == 2) ? <Text style={styles.postCategory}>Ability</Text> : ((item.categoryType == 3) ? <Text style={styles.postCategory}>Character</Text> : ((item.categoryType == 4) ? <Text style={styles.postCategory}>Skin</Text> : ((item.categoryType == 5) ? <Text style={styles.postCategory}>Story</Text> : ((item.categoryType == 6) ? <Text style={styles.postCategory}>In-Game</Text> : ((item.categoryType == 7) ? <Text style={styles.postCategory}>Feature Request</Text> : <Text style={styles.postCategory}>Something Wrong</Text>))))))}
                     </View>
                     <Text style={styles.postTitle}>{item.postTitle}</Text>
                     <View>
                     {(item.picType == 1) ? <Image
                        style={styles.userPic}
                        source={{uri : 'https://zerofornothing.com/uploadMedia/profilePicture/'+ item.picToken +'/medium.jpg'}}
                      /> : ((item.picType == 2) ? (<Image
                         style={styles.userPic}
                         source={{uri : 'https://zerofornothing.com/uploadMedia/profilePicture/'+ item.picToken +'/medium.png'}}
                       /> ) : ( < View style = { styles.userPic} ></View>))}
                     </View>
                     <View>
                     {(item.imageType == 1) ? <Image
                        style={styles.userPic}
                        source={{uri : 'https://zerofornothing.com/uploadMedia/ImageMedia/'+ item.imageName +'/medium.jpg'}}
                      /> : ((item.imageType == 2) ? (<Image
                         style={styles.userPic}
                         source={{uri : 'https://zerofornothing.com/uploadMedia/ImageMedia/'+ item.imageName +'/medium.png'}}
                       /> ) : ( null))}
                     </View>
                        <Text>{item.videoName}</Text>
                        <Text>{item.videoType}</Text>
                        <Text>{item.mediaUrl}</Text>
                        <Text>{item.postText}</Text>
                        <Text>{item.username}</Text>
                        <Text>{item.postDate}</Text>
                        <Text>{item.commentsCount}</Text>
                        <Text>{item.postAgree}</Text>
                        <Text>{item.postDisagree}</Text>
                        <Text>{item.userInteracted}</Text>
                        <Text>{item.postViews}</Text>
                     </View>
                  ))
               }
            </ScrollView>
         </View>
      )
   }
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    color: "#f9f9f9",
    backgroundColor: "white",
  } ,
  post : {
    paddingHorizontal:'2%',
    borderWidth: 0,
    borderBottomWidth:1,
    borderColor: '#e6e6e6',
    paddingVertical:'2%'
  }
  ,
  userPic : {
    backgroundColor: 'grey',
    height: 60,
    width: 60,
    borderRadius:50
  },
  postTitle:{
    color:'grey',
    fontSize: 21,
},
postCategory : {
  color:'grey',
  fontSize: 21,
},
scrollView : {

}
});
