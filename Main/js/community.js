import React ,{Component} from 'react';
import { Text, View ,Image , StyleSheet, ScrollView ,TouchableOpacity,TextInput} from 'react-native';
import Video from 'react-native-video';
import Moment from 'moment';
import {  AntDesign , Octicons ,Feather} from '@expo/vector-icons';

var callOnce = true;
export class GetTopPosts extends Component{
  constructor(props) {
    super(props);
    this.state = {
      posts:[]
    };
  }
   sendData = () => {
    if(callOnce){
      callOnce = false;
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
      postData('https://zerofornothing.com/getTopPosts', {
        categoryID: null,
        startPage: 1 ,
        username: null
      })
      .then(postsList => {
        postsList = JSON.parse(postsList)
        var array = [];
        for( var x in postsList){
          array.push({ 'postID' : postsList[x].postID, 'picToken': postsList[x].picToken, 'picType' : postsList[x].picType,'categoryType': postsList[x].categoryType, 'postTitle' : postsList[x].postTitle,'imageName': postsList[x].imageName, 'imageType' : postsList[x].imageType,'videoName' : postsList[x].videoName,'videoType': postsList[x].videoType, 'mediaUrl' : postsList[x].mediaUrl,'postText': postsList[x].postText, 'username': postsList[x].username, 'postDate' : postsList[x].postDate,'commentsCount': postsList[x].commentsCount, 'postAgree' : postsList[x].postAgree,'postDisagree': postsList[x].postDisagree, 'userInteracted' : postsList[x].userInteracted,'postViews': postsList[x].postViews
        })
        }
        this.setState({ posts : array})
      }).catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
    }
  }

    render(){
      {this.sendData()}
      return  (
        <ScrollView>
        {this.state.posts.map((item, index) => (

                     <View key = {item.postID}>
                     <View style={styles.postCategoryView}>
                       {(item.categoryType == 1) ? <Text style={styles.postCategory}>General</Text> : ((item.categoryType == 2) ? <Text style={styles.postCategory}>Ability</Text> : ((item.categoryType == 3) ? <Text style={styles.postCategory}>Character</Text> : ((item.categoryType == 4) ? <Text style={styles.postCategory}>Skin</Text> : ((item.categoryType == 5) ? <Text style={styles.postCategory}>Story</Text> : ((item.categoryType == 6) ? <Text style={styles.postCategory}>In-Game</Text> : ((item.categoryType == 7) ? <Text style={styles.postCategory}>Feature Request</Text> : <Text style={styles.postCategory}>Something Wrong</Text>))))))}
                     </View>
                     <View style = {styles.post}>
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
                        <TextInput
                          placeholder="Comment here..."
                          style={styles.commentHolder}
                          />
                        </View>
                     </View>
                 ))}
              </ScrollView>
      )
    }
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    color: "#f9f9f9",
    backgroundColor: "white",
  } ,
  post : {
    width:'97%',
    marginLeft:'1%',
    backgroundColor:'#ededed',
    paddingHorizontal:'2%',
    paddingVertical:10,
    borderLeftWidth:6,
    borderLeftColor: '#ff7777',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2,

    elevation: 2,
  },
  postCategoryView:{
    flexDirection:'row',
  },
  commentHolder:{
    borderColor:'#e4e4e4',
    borderWidth:3,
    marginTop:12,
    paddingHorizontal:12,
    borderRadius:6,
    fontSize:17,
    backgroundColor:'white',
    paddingVertical:3,
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2,

    elevation: 1,
  },
  postCategory:{
    paddingHorizontal:10,
    paddingVertical:6,
    borderLeftWidth:8,
    borderLeftColor:'#d3d3d3',
    backgroundColor:'#ededed',
      fontSize: 21,
      borderRadius:6,
      marginLeft:'1%',
      marginBottom: 6,
      marginTop:8,
      paddingLeft:20,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2,

      elevation: 1,
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
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.22,
  shadowRadius: 2,

  elevation: 2,
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
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.22,
  shadowRadius: 2,

  elevation: 2,

},
appButtonText : {
  textAlign : 'center',
  fontSize:16
}
});
