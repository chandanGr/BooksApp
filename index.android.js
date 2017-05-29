

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Navigator} from "react-native-deprecated-custom-components"
import Luffy from "./src/Luffy"
import MyBooks from "./src/MyBooks"
import Books1 from "./src/Books1"
import StartPage from "./src/StartPage"



export default class Books extends Component {

  navigationScene(route, navigator){
    console.log(route),
    _navigator = navigator
    switch(route.id){
      case "Luffy" : 
        return(<Luffy navigator = {navigator} title = "fdf" />)
      case "MyBooks" : 
        return(<MyBooks navigator = {navigator} title = "dfd"/>);
      case "Books1" : 
        return(<Books1 navigator = {navigator} title = "Books1"/>);
      case "StartPage" : 
        return(<StartPage navigator = {navigator} title = "StartPage"/>);
    }
  }

  render() {
    return (
      <Navigator 
        initialRoute = {{
          id : "StartPage"
        }}
        renderScene = {
          this.navigationScene
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Books', () => Books);
