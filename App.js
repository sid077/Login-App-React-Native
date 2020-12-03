import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View,Button } from 'react-native';
import {createStackNavigator} from 'react-navigation';
import LoginActivity from './src/components/LoginActivity'
import VerifyOtpActivity from './src/components/VerifyOtpActivity'
import WelcomeActivity from './src/components/WelcomeActivity'

const RootStack = createStackNavigator(
 {
  Login : {screen : LoginActivity},
  VerifyOtp : {screen : VerifyOtpActivity },
  Welcome : {screen : WelcomeActivity},
},
{
  initialRoutName :  'Login',
});





export default class App extends Component {
  

 render(){
   return <RootStack/>;
 }
}



