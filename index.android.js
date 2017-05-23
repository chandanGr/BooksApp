

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Navigator} from "react-native-deprecated-custom-components"
import Luffy from "./src/Luffy"

export default class Books extends Component {

  navigationTo(route, navigator){
    _navigator = navigator
    switch(route.id){
      case "Luffy" : 
        return(<Luffy navigator = {navigator} title = "this is a title" />);
    }
  }

  render() {
    return (
      <Navigator 
        initialRoute = {{
          id : "Luffy"
        }}
        renderScene = {
          this.navigationTo
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
