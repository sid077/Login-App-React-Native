import React, { Component } from 'react';
import { StyleSheet, FlatList, TextInput, View,Button,Dimensions} from 'react-native';

const window  = Dimensions.get("window");
const screen  = Dimensions.get("screen");

 class LoginActivity extends Component {
  static navigationOptions = {
    title : 'Login'
  }
  constructor(){
    super();
    this.state = {
      mobileNo :''
      
    }
  }
 
  handleMobileNo(){
    if(this.state.mobileNo.length==10){
      console.log(this.state.mobileNo);
      this.props.navigation.navigate('VerifyOtp')
    }
    
    else{
      console.log("wrong mobile number!");
      alert('Please enter 10 digit mobile number!')
    }
    
  }
  checkOtp(otp){
  
    if (otp%2==0){
      //success
    }else{
      //fail
    }
  }
  
  
 render(){
  
   return(
     
     
     <View style ={styles.main} >
    
    <View style = { styles.container}>
      <View style = {styles.row}>
        <TextInput style = {styles.inputCode}//can be done using dropdown 
          placeholder='+91'>
        </TextInput>
      <TextInput style = {styles.input}
        placeholder="xxx-xxx-xxxx"
        autoCompleteType = "tel"
        keyboardType = 'numeric'
        maxLength = {10}
        onChangeText = {(text) => this.setState({mobileNo : text})} 
        >
       </TextInput>
      </View>
   
       <Button //can be customised using TouchableOpacity
       title = 'Get The Code'
       onPress = {()=>this.handleMobileNo() }
       ></Button>
       </View >
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
  row :{
    
    flexDirection : 'row',
    justifyContent :"center"
  },

  container: {

    backgroundColor:'white',
    flex: 1,
    alignItems : 'center',
    justifyContent : 'center'
    
    
  },

  input:{
    width : "70%",
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

export default LoginActivity;
