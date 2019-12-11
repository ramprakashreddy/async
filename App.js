import React  from 'react';
import{
  StyleSheet,Text,View,AsyncStorage,TextInput,Button,Keyboard
} from 'react-native'

export default class async extends React.Component{
  constructor(props){
    super(props)
    this.state={
name:'',
age:''
    }
  }
  
saveData=()=>  {
  const{name,age}=this.state;
  let values={
name:name,
age:age
  }
  AsyncStorage.setItem('values',JSON.stringify(values))
  Keyboard.dismiss();
  alert(name+'Your data is saved successfully');
}
showData = async()=>{
  let values= await AsyncStorage.getItem('values');
  let a =JSON.parse(values);
alert(a.name+' Your age is '+a.age);

  
}

  render(){
  return(
    <View style={styles.container}>
      
     <TextInput placeholder="NAME"
     style={styles.input}
     onChangeText={name=>this.setState({name})}
     />
     <TextInput placeholder="AGE"
     style={styles.input}
     onChangeText={age=>this.setState({age})}

/>

    <Button title ="savedata"
    onPress={
      this.saveData
    } color="red">

    </Button>

    <Button title ="Show the saved Data"
    onPress={
      this.showData
    } >
      </Button>
    </View>
  );
}


}
const styles= StyleSheet.create({
  container:{
    flex:1,
    
    justifyContent:'flex-start',
    padding:10
    
    
    
  },
  input:{
    backgroundColor:'#fff',
    padding:10,
    margin:10,
    borderWidth:1,
    borderColor:'#ccc'
  }
});