//This activity can be merged with Login Activity and using visibility we can create the same feel as if the two are different screens.
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View,Button } from 'react-native';

 class VerifyOtpActivity extends Component {
     constructor(){
         super();
         this.state={
             otp:''
         }
     }
    static navigationOptions = {
        title:"Verify"
    }
    handleOtp(){
        var numOtp = parseInt(this.state.otp);
        if((numOtp+"").length==4){
            
            console.log(numOtp);
            if(numOtp %2 == 0){
            console.log("Verified User");
            this.props.navigation.navigate('Welcome');
            }else{
            console.log("Invalid User");
            alert('Invalid User')
            }
        }else{
            console.log("OTP length < 4");
            alert('Please enter 4 digit OTP!')
        }
    }
render(){
    return(
        <View style ={styles.container} >
        <TextInput style = {styles.input}
         placeholder="Enter Otp"
         autoCompleteType = "tel"
         keyboardType = 'numeric'
         maxLength = {4}
         onChangeText = {(text) => this.setState({otp: text})} 
         >
        </TextInput>
        <Button style = {styles.input}
        title = 'Verify '
        onPress = {()=>this.handleOtp() }
        ></Button>
      </View>
        
    );
}
}
const styles = StyleSheet.create({
    main : {
      height : "100%",
      width : "100%",
      backgroundColor : 'grey',
      
    },
   
  
    container: {
  
      backgroundColor:'white',
      flex: 1,
      alignItems : 'center',
      justifyContent : 'center'
      
      
    },
  
    input:{
      width : "50%",
      height : 40,
      margin : 10,
      padding : 10,
      textAlign : 'center',
      borderRadius :20,
      borderColor : 'black',
      borderWidth : 2
     
    },
    inputCode:{
      width : "20%",
      height : 40,
     marginTop :10,
     marginBottom: 10,
      padding : 10,
      textAlign : 'center',
      borderRadius :20,
      borderColor : 'black',
      borderWidth : 2
     
    },
  });

export default VerifyOtpActivity;