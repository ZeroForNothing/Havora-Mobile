import React, { Component } from 'react';
import {  View } from 'react-native';


import {GetTopPosts } from './js/community';


export class Community extends Component {

   render() {
      return (
         <View>
              <GetTopPosts />
         </View>
      )
   }
}
