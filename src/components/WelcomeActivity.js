import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View,Button } from 'react-native';

 class WelcomeActivity extends Component {
  static navigationOptions = {
    title : 'Welcome'
  }
  constructor(){
    super();
    
  }
 
 
 render(){
   return(
     <View style ={styles.container} >
       <Text >Hello, Your phone number is successfully verified !
       </Text>
     </View>
   );
     
 }
}


const styles = StyleSheet.create({
  container: {

   flex : 1,
    justifyContent:"center",
    alignItems :"center",
    padding :10,
    backgroundColor : '#ffffff'
    
  },
  
});
export default WelcomeActivity;
