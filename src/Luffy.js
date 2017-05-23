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
import SignIn from "./SignIn"

export default class Luffy extends Component{

    constructor(){
        super();
        this.state = {
            modalVisible : false,
            modal2Visible : false,
        }
    }


  render() {
    return (
      <View style = {styles.container}>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >

            <View style = {styles.header}>
                <View style = {{marginRight : 200}}><TouchableHighlight onPress={() => {this.setState({modalVisible : false})}}><Text>back</Text></TouchableHighlight></View>
                <Text style = {styles.headerText}>Sign In Form</Text>
            </View>
            <View style = {styles.body}>
                <Text>Username : </Text><TextInput textBreakStrategy = {"highQuality"}></TextInput>
                <Text>Emai: Id : </Text><TextInput></TextInput>
                <Text>Password : </Text><TextInput secureTextEntry = {true}></TextInput>
                <Text>Re-Password : </Text><TextInput secureTextEntry = {true}></TextInput>
                <Text>Mobile Number : </Text><TextInput ></TextInput>
                <TouchableOpacity style = {{ justifyContent : "flex-start", alignItems : "center", backgroundColor : "green",}}><Text>Submit</Text></TouchableOpacity>
            </View>
        </Modal>

        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modal2Visible}
          onRequestClose={() => {alert("Modal2 has been closed.")}}
          >
        
            <View style = {styles.header}>
                <View style = {{marginRight : 200}}><TouchableHighlight onPress={() => {this.setState({modal2Visible : false})}}><Text>Back</Text></TouchableHighlight></View>
                <Text style = {styles.headerText}>Log In Form</Text>
            </View>
            <View>
                <Text>Emai: Id : </Text><TextInput></TextInput>
                <Text>Password : </Text><TextInput secureTextEntry = {true}></TextInput>
            </View>
        </Modal>

        <View style = {{backgroundColor : "skyblue", height : 100, flexDirection : "row", justifyContent : "space-around", alignItems : "center"}}>
            <View>
                <Text>Home</Text>
            </View>
            <View style = {{flexDirection : "row",}}>
                <TouchableHighlight onPress={() => {
                    this.setState({modalVisible : true})
                    }}>
                    <Text style= {{margin : 10}}>Sign IN</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => {
                    this.setState({modal2Visible : true})
                    }}>
                    <Text style= {{margin : 10}}>Log IN</Text>
                </TouchableHighlight>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "flex-start",
        alignItems : "stretch"
    },
    header : {
        height : 80,
        backgroundColor : "red",
        justifyContent : "center",
        alignItems : "center",
        flexDirection : "row"
    },
    headerText : {
        color : "white",
    }
});