import { Text, View,StyleSheet,ScrollView } from 'react-native'
import React, { Component } from 'react'
import {AudioContext} from "../context/AudioProvider";
export class AudioList extends Component {
  static contextType = AudioContext
  render() {
    return (
      <ScrollView>
        {this.context.audioFiles.map(i => 
        <Text style={{padding:0,borderBottomColor:'red',borderBottomWidth:2 }} key={i.id}>{i.filename}</Text>
        )}
        
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  }
})
export default AudioList