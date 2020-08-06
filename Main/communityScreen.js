import React, { Component } from 'react';
import { Text, View ,Image , StyleSheet, ScrollView ,TouchableOpacity} from 'react-native';
import Video from 'react-native-video';
import Moment from 'moment';
import {  AntDesign , Octicons ,Feather} from '@expo/vector-icons';

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
                           <Text style={styles.postDate}>{Moment(item.postDate).format('MMMM Do YYYY, hh:mm a')}</Text>
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
                       <View>
                        {(item.mediaUrl != null) ? <Text>{item.mediaUrl}</Text> : (null)}
                       </View>
                        <Text style={styles.postText}>{item.postText}</Text>
                        <View style={styles.footerContainer}>
                          <Text style={styles.subFooterContainer}>{item.postAgree} <AntDesign name="like2" size={20} color="black" /></Text>
                          <Text style={styles.subFooterContainer}>{item.postDisagree} <AntDesign name="dislike2" size={20} color="black" /></Text>
                          <Text style={styles.subFooterContainer}>{item.commentsCount} <Octicons name="comment-discussion" size={20} color="black" /></Text>
                          <Text style={styles.subFooterContainer}>{item.postViews} <Feather name="eye" size={20} color="black" /></Text>
                          <Text style={styles.subFooterContainer}>{item.userInteracted} <AntDesign name="sharealt" size={20} color="black" /></Text>
                        </View>
                        <View style={styles.interactionFooterContainer}>
                          <TouchableOpacity //onPress={}
                          style={styles.interactSubFooterContainer}>
                             <Text style={styles.appButtonText}>Agree</Text>
                          </TouchableOpacity>
                          <TouchableOpacity //onPress={}
                          style={styles.interactSubFooterContainer}>
                             <Text style={styles.appButtonText}>Disagree</Text>
                          </TouchableOpacity>
                          <TouchableOpacity //onPress={}
                          style={styles.interactSubFooterContainer}>
                             <Text style={styles.appButtonText}>Comments</Text>
                          </TouchableOpacity>
                          <TouchableOpacity //onPress={}
                          style={styles.interactSubFooterContainer}>
                             <Text style={styles.appButtonText}>Share</Text>
                          </TouchableOpacity>
                        </View>
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
    backgroundColor:'#ededed',
    paddingHorizontal:'2%',
    borderTopWidth:1,
    borderBottomWidth:1,
    borderColor: '#e0e0e0',
    paddingVertical:'2%',
    marginVertical:5
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
    marginBottom:10,
    borderBottomWidth:1,
  borderColor: '#e6e6e6',
  paddingBottom:4
},
postCategory : {
  fontSize: 21,
},
scrollView : {

},
postText : {
  fontSize: 18,
  paddingVertical: 18,
},
dateAndNameContainer : {
  marginLeft: 10,
  marginTop:6
},
headerContainer : {
  flexDirection: 'row'
},
username: {
  fontSize: 19
},
postDate : {
  fontSize : 13
},
footerContainer:{
  flex: 1,
  flexDirection: 'row',
    justifyContent:'space-around',
  backgroundColor:'#f3f3f3',
  alignItems:'center',
  textAlignVertical: "center",
  paddingVertical: 6,
  borderRadius:6,

},
subFooterContainer:{
  flexDirection: 'row',
  width:'20%',
  justifyContent: 'space-around',
  textAlignVertical: 'center',
  fontSize:17,
  alignItems:'center',
  textAlign: 'center',
},
interactionFooterContainer : {
  flexDirection: 'row',
  justifyContent:'space-between',
  marginTop:10
},
interactSubFooterContainer : {
  backgroundColor: '#f3f3f3',
  borderRadius:6,
  paddingHorizontal:14,
  paddingVertical: 6,

},
appButtonText : {
  textAlign : 'center',
  fontSize:16
}
});
