import { Text, View } from 'react-native'
import React, { Component, createContext } from 'react'
import * as MediaLibrary from 'expo-media-library';

export const AudioContext = createContext();

export default class AudioProvider extends Component {
    constructor(props){
        super(props)
        this.state = {
            audioFiles:[],
            permissionError: false,
        }
    }
    permissionAllert = () => {
        Alert.alert("Permission Requiered", "This app need to read audio file!",[{
            text:'I am ready',
            onPress: () => this.getPermission()
        },{
            text:'cancle',
            onPress: () => this.permissionAllert()
        }]);
    }
    getAudioFiles = async () =>{
        let media = await MediaLibrary.getAssetsAsync({
            mediaType:'audio' 
        });
        media = await MediaLibrary.getAssetsAsync({
            mediaType:'audio' ,
            first:media.totalCount,
        });
        this.setState({...this.state,audioFiles:media.assets})
    }
    getPermission = async () => {
        const permission = await MediaLibrary.getPermissionsAsync()
        
        if(permission.granted){
            this.getAudioFiles();
        }
        if(!permission.canAskAgain && !permission.granted){
            this.setState({...this.state.audioFiles, permissionError:true})
        }
        if(!permission.granted && permission.canAskAgain){
            const {status,canAskAgain} = await MediaLibrary.requestPermissionsAsync()
            if(status === 'denied' && canAskAgain){
                this.permissionAllert()
            }
            if(status === 'granted'){

                
                this.getAudioFiles();
            }

            if(status === 'denied' && !canAskAgain){
                this.setState({...this.state, permissionError:true})               
            }
        }
    }
    componentDidMount(){
        this.getPermission();
    }
  render() {
    if(this.state.permissionError) return <View style={{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }}>
        <Text style={{fontSize:25,textAlign:'center',color:'red'}}>It looks like you havent acceptr the permission. </Text>
    </View>
    return (
        <AudioContext.Provider value={{audioFiles:this.state.audioFiles}}>
            {this.props.children}
        </AudioContext.Provider>
    )
  }
}