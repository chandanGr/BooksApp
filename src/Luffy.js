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
import {Navigator} from "react-native-deprecated-custom-components"


export default class Luffy extends Component{

    constructor(){
        super();
        this.state = {
            modalVisible : false,
            modal2Visible : false,
        }
    }
    onPressMyBooks(){
        console.log("dsfd");
        this.props.navigator.push({
            id: "MyBooks",
            __navigatorRouteID: 1
        });
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
                <View style = {{marginRight : 200}}><TouchableOpacity onPress={() => {this.setState({modalVisible : false})}}><Text>back</Text></TouchableOpacity></View>
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
                <View style = {{marginRight : 200}}><TouchableOpacity onPress={() => {this.setState({modal2Visible : false})}}><Text>Back</Text></TouchableOpacity></View>
                <Text style = {styles.headerText}>Log In Form</Text>
            </View>
            <View>
                <Text>Emai: Id : </Text><TextInput></TextInput>
                <Text>Password : </Text><TextInput secureTextEntry = {true}></TextInput>
            </View>
            <View style = {{backgroundColor : "grey", alignItems : "center", justifyContent : "center", height : 50}}>
                <TouchableOpacity onPress = {this.onPressMyBooks.bind(this)}><Text>Lets Go</Text></TouchableOpacity>
            </View>
        </Modal>

        <View>
            <View style = {{backgroundColor : "skyblue", height : 100,justifyContent : "space-around", alignItems : "center"}}>
                <Text>Home</Text>
            </View>
            <View style = {{backgroundColor : "#48C9B0", justifyContent : "center", height : 600, alignItems : "center", }}>
                <View style = {{flexDirection : "row",}}>
                    <TouchableOpacity onPress={() => {
                        this.setState({modalVisible : true})
                        }}>
                        <Text style= {{margin : 10}}>Sign IN</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        this.setState({modal2Visible : true})
                        }}>
                        <Text style= {{margin : 10}}>Log IN</Text>
                    </TouchableOpacity>
                </View>
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