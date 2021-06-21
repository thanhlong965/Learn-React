/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {Avatar} from './src/components';
import React, {Component} from 'react';
import {Styles} from './src/common';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {gray} from 'chalk';

// const rectangle ={
//   width:200,
//   height:100,
//   backgroundColor:'blue'
// };
class Flex extends Component<props> {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }
  render() {
    const {isActive} = this.state;
    return (
      // <View>
      //   <View
      //     style={{
      //       width: 200,
      //       height: 100,
      //       backgroundColor: 'red',
      //     }}/>
      //     <View style = {Styles.rectangle}/>

      //     <View style = {[
      //       styles.header,
      //       // styles.backgroundRed,
      //       {borderColor:"yellow"},
      //       isActive ? styles.backgroundRed : styles.backgroundGreen
      //     ]}/>

      // </View>
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={styles.topLeft}>
            <View style={styles.topLeftOne}></View>
            <View style={styles.topLeftTwo}></View>
          </View>
          <View style={styles.topRight}></View>
        </View>
        <View style={styles.bottom}>
          <View style={styles.bottomLeft}></View>
          <View style={styles.bottomCenter}></View>
          <View style={styles.bottomRight}>
            <View style={styles.bottomRightOne}></View>
            <View style={styles.bottomRightTwo}></View>
          </View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  // header:{
  //   width : "100%",
  //   height:50,
  //   borderWidth:1 ,
  //   borderColor:"gray",
  //   marginTop:4
  // },
  // backgroundRed: {
  //   backgroundColor:'red'
  // },
  // backgroundGreen: {
  //   backgroundColor:'green'
  // },

  // rectangle:{
  //      width:100,
  //     height:100
  // }
  container: {
    flexDirection: 'column',

    width: '100%',
    height: '100%',
    backgroundColor: 'black',
  },
  top: {
    flexDirection: 'row',
    flex: 6,
  },

  topLeft: {
    flex: 2,

    flexDirection: 'column',
  },
  topLeftOne: {
    flex: 1,
    backgroundColor: 'white',
    margin: 5,
    marginBottom: 10,
  },
  topLeftTwo: {
    flex: 3,
    backgroundColor: 'white',
    margin: 5,
    marginTop: 10,
  },
  topRight: {
    flex: 5,
    backgroundColor: 'red',
    margin: 5,
  },
  bottom: {
    flexDirection: 'row',
    flex: 3,
  },
  bottomLeft: {
    flex: 2,
    backgroundColor: 'blue',
    margin: 5,
  },
  bottomCenter: {
    flex: 4,
    backgroundColor: 'white',
    margin: 5,
  },
  bottomRight: {
    flex: 1,
  },

  bottomRightOne: {
    flex: 1,
    backgroundColor: 'white',
    margin: 5,
  },
  bottomRightTwo: {
    flex: 1,
    backgroundColor: 'yellow',
    margin: 5,
  },
});
export default Flex;
