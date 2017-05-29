import React, { Component } from 'react';
import {Animated, AppRegistry, StyleSheet, Text, ScrollView, TouchableOpacity,
         View, Image, Easing,
} from 'react-native';
import {Navigator} from "react-native-deprecated-custom-components"

const arr = []
for(var i = 0; i < 66; i++){
    arr.push(i);
}

export default class StartPage extends Component{
    
    constructor(){
        super();
        this.animatedVlaue = []
        this.state = {
          textEnd : "",
        }
        this.springValue = new Animated.Value(0)
        const animations = arr.forEach((value) => {
          this.animatedVlaue[value] = new Animated.Value(0);
        });
    }

    componentDidMount(){
        this.animate()
    }

    spring(){
      this.springValue.setValue(0)
      Animated.spring(this.springValue, {
        toValue : 1,
        friction : 1 
      }).start(() => {this.textEnd()})
    }

    textEnd(){
      this.setState({
        textEnd : "----------------------------------------------------->"
      });
    }

    _onPress() {
        this.props.navigator.push({
            id : "Luffy"
        });
    }
    
    animate(){
        const animation = arr.map((item) => {
            return Animated.timing(this.animatedVlaue[item], {
                toValue : 1, 
                duration : 2000,
            });
        });
        Animated.stagger(20, animation).start(() => {this.spring()});
    }
    render(){
        const springValue = this.springValue.interpolate({
          inputRange : [0,  1],
          outputRange : [0, 30]
        });
        const animations = arr.map((a, i) => {
            return (<Animated.View key = {i} style = {{ width : 50, height : 50, backgroundColor : "#DC7633", opacity : this.animatedVlaue[a], marginLeft : 9, marginTop : 6   }}/>);
        });
        return(
          <View style = {{justifyContent : "center", alignItems : "center", flex : 1, backgroundColor : "#FAE5D3"}}>
            <View style = {{flex : 1, flexDirection : "row", flexWrap : "wrap"}}>
              {animations}
            </View>
            <Animated.View style = {{position : "absolute", transform : [{scale : springValue}]}}>
              <Text 
                style = {{
                  fontSize : 2,
                  fontWeight : "bold", 
                  color : "white", 
                }}>
                Book Title
              </Text>
            </Animated.View>
            <TouchableOpacity onPress = {this._onPress.bind(this)}>
              <View style = {{justifyContent : "flex-end", alignItems : "flex-end", marginBottom : 30, marginRight : 10}}>
                <Text> {this.state.textEnd} </Text>
              </View>
            </TouchableOpacity>
          </View>
        );
    }
}



