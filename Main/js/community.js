import * as React from 'react';
export class GetTopPosts extends React.Component{

   sendData = () => {
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
      startPage: 1,
      username: null
    })
    .then(postsList => {
      postsList = JSON.parse(postsList)
      var array = [];
      for( var x in postsList){
        array.push({ 'postID' : postsList[x].postID, 'picToken': postsList[x].picToken, 'picType' : postsList[x].picType,'categoryType': postsList[x].categoryType, 'postTitle' : postsList[x].postTitle,'imageName': postsList[x].imageName, 'imageType' : postsList[x].imageType,'videoName' : postsList[x].videoName,'videoType': postsList[x].videoType, 'mediaUrl' : postsList[x].mediaUrl,'postText': postsList[x].postText, 'username': postsList[x].username, 'postDate' : postsList[x].postDate,'commentsCount': postsList[x].commentsCount, 'postAgree' : postsList[x].postAgree,'postDisagree': postsList[x].postDisagree, 'userInteracted' : postsList[x].userInteracted,'postViews': postsList[x].postViews
      })
      }
      this.props.parentCallback(array);
    }).catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });
  }
render(){
  {this.sendData()}
  return null
}
};
