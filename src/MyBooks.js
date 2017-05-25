import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  View
} from 'react-native';

export default class MyBooks extends Component {
    render(){
        return(
            <View style = {{flex : 1, alignItems : "stretch"}}>
                <View style = {{flex : 1, justifyContent : "center", alignItems : "center", backgroundColor : "red"}}>
                    <TouchableOpacity>
                        <Text>Books 1</Text>
                    </TouchableOpacity>
                </View>
                <View style = {{flex : 1, justifyContent : "center", alignItems : "center", backgroundColor : "skyblue"}}>
                    <TouchableOpacity>
                        <Text>Books 2</Text>
                    </TouchableOpacity>
                </View>
                <View style ={{flex : 1, justifyContent : "center", alignItems : "center", backgroundColor : "gray"}}>
                    <TouchableOpacity>
                        <Text>Books 3</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
