import React, { Component } from 'react';
import { Text, View ,Image , StyleSheet, ScrollView ,StatusBar} from 'react-native';
import Video from 'react-native-video';
import Moment from 'moment';
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
                     <View style={styles.headerContainer}>
                     {(item.picType == 1) ? <Image
                        style={styles.userPic}
                        source={{uri : 'https://zerofornothing.com/uploadMedia/profilePicture/'+ item.picToken +'/medium.jpg'}}
                      /> : ((item.picType == 2) ? (<Image
                         style={styles.userPic}
                         source={{uri : 'https://zerofornothing.com/uploadMedia/profilePicture/'+ item.picToken +'/medium.png'}}
                       /> ) : ( < View style = { styles.userPic} ></View>))}
                       <View style={styles.dateAndNameContainer}>
                           <Text style={styles.username}>{item.username}</Text>
                           <Text>{Moment(item.postDate).format()}</Text>
                       </View>
                     </View>

                     <View>
                     {(item.imageType == 1) ? <Image
                        style={styles.imageMedia}
                        source={{uri : 'https://zerofornothing.com/uploadMedia/ImageMedia/'+ item.imageName +'/medium.jpg'}}
                      /> : ((item.imageType == 2) ? (<Image
                         style={styles.imageMedia}
                         source={{uri : 'https://zerofornothing.com/uploadMedia/ImageMedia/'+ item.imageName +'/medium.png'}}
                       /> ) : ( null))}
                     </View>
                     <View>
                     {(item.videoType == 1) ? <Video source={{uri: 'https://zerofornothing.com/uploadMedia/VideoMedia/'+ item.videoName +'/medium.mp4'}}   // Can be a URL or a local file.
                       ref={(ref) => {
                         this.player = ref
                       }}                                      // Store reference
                       //onBuffer={this.onBuffer}                // Callback when remote video is buffering
                       //onError={this.videoError}               // Callback when video cannot be loaded
                       //style={styles.backgroundVideo}
                        /> : ((item.videoType == 2) ? (<Video source={{uri: 'https://zerofornothing.com/uploadMedia/VideoMedia/'+ item.videoName +'/medium.mov'}}   // Can be a URL or a local file.
                        ref={(ref) => {
                          this.player = ref
                        }}                                      // Store reference
                        //onBuffer={this.onBuffer}                // Callback when remote video is buffering
                        //onError={this.videoError}               // Callback when video cannot be loaded
                        //style={styles.backgroundVideo}
                         /> ) : ( null))}
                     </View>
                        <Text>{item.mediaUrl}</Text>
                        <Text style={styles.postText}>{item.postText}</Text>

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
    fontSize: 21,
    marginBottom:4
},
postCategory : {
  fontSize: 21,
},
scrollView : {

},
postText : {
  fontSize: 18
},
dateAndNameContainer : {
  marginLeft: 10,
  marginTop:8
},
headerContainer : {
  flexDirection: 'row'
},
username: {
  fontSize: 18
},
postDate : {
  fontSize : 13
}
});
