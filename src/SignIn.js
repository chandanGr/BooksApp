import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  Text,
  Modal,
  TextInput,
  View
} from 'react-native';

export default class SignIn extends Component{

    onPress(){
        this.setState({signInModal : false});
    }

    render(){
        return(
            <View style = {styles.container}>
                <Modal
                    transparent = {false}
                    onRequestClose = {() => {console.log("modal appeared")}}
                    animationType = {"slide"}
                    visible = {this.props.signInModal}
                >
                    <View style = {styles.header}>
                        <View style = {{marginRight : 200}}><TouchableHighlight onPress = {() => this.onPress.bind(this)}><Text>back</Text></TouchableHighlight></View>
                        <Text style = {styles.headerText}>Sign In Form</Text>
                    </View>
                    <View style = {styles.body}>
                        <Text>Username : </Text><TextInput textBreakStrategy = {"highQuality"}></TextInput>
                        <Text>Emai; Id : </Text><TextInput></TextInput>
                        <Text>Password : </Text><TextInput secureTextEntry = {true}></TextInput>
                        <Text>Re-Password : </Text><TextInput secureTextEntry = {true}></TextInput>
                        <Text>Mobile Number : </Text><TextInput ></TextInput>
                        <TouchableOpacity style = {{ justifyContent : "flex-start", alignItems : "center", backgroundColor : "green",}}><Text>Submit</Text></TouchableOpacity>
                    </View>
                </Modal>
        <TouchableHighlight onPress={() => {
          this.setState({modalVisible : true})
        }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => {
          this.setState({modal2Visible : true})
        }}>
          <Text>Show Modal2</Text>
        </TouchableHighlight>

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
        height : 100,
        backgroundColor : "red",
        justifyContent : "center",
        alignItems : "center",
        flexDirection : "row"
    },
    headerText : {
        color : "white",
    }
});