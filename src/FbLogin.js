import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import FBSDK, {LoginManager} from "react-native-fbsdk"

export default class FbLogin extends Component{

    _onPress(){
        LoginManager.logInWithPublishPermissions(["public_profile"]).then(function(result){
            if(result.isCancelled){
                console.log("Login is cancelled \n");
            }else{
                console.log("Login is Sucess " + result.grantedPermissions.toString());
            }
        }, function(error){
            console.log("An Error ocurred " + error);
        })
    }

    render(){
        return(
            <View>
                <TouchableHighlight onPress = {this._onPress.bind(this)}>
                    <Text>FaceBook Login</Text>
                </TouchableHighlight>
            </View>
        );
    }
}