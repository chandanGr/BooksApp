import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ListView,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import {Navigator} from "react-native-deprecated-custom-components"
import data from "./data/BankData.json"

const ds = new ListView.DataSource({
  rowHasChanged : (r1, r2) => r1 != r2
});

const dataSource = ds.cloneWithRows(data)

export default class Books1 extends Component{

  render(){
    return(
      <View style = {{flexDirection : "column"}}>
        <ListView 
          pageSize = {20}
          dataSource = {dataSource}
          renderRow = {(rowData) => 
            <View style = {{alignItems : "stretch", backgroundColor : "skyblue", margin : 5}} >
              <View>
                <Text>{rowData.id} :</Text>
              </View>
              <TouchableOpacity onPress = {this.props.navigator.push({id : rowData.id})}><Text>dsfdsfdsfdsfdsf</Text></TouchableOpacity>
              <View>
                <Text>{rowData.name}</Text>
              </View>
              <View>
                <Text>{rowData.balance}</Text>
              </View>
              <View>
                <Text>{rowData.email}</Text>
              </View>
              <View>
                <Text>{rowData.gender}</Text>
              </View>
              <View>
                <Text>{rowData.phone}</Text>
              </View>
            </View>
          }
        />
      </View>
    );
  }
}
