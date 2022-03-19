import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from "react";
export default function App() {
  return (
    
    <View style={[styles.container,{
    flexDirection: "column"}]}>
     <View style={{flex :2, backgroundColor:"red"}}>

     </View>
     <View style={{flex :1, backgroundColor:"green"}}>
     
     <View style={[styles.container,{
    flexDirection: "row"}]}>
      
      
    
<View style={{flex:1,backgroundColor:"green"}}></View>
<View style={{flex:2, backgroundColor:"black"}}>

</View>
      <View style={{flex:1,backgroundColor:"green"}}></View>
     </View>
     </View>
     <View style={{flex :4, backgroundColor:"orange"}}>
       <View style={[styles.container,{flexDirection:"row"}]}>
       <View style={{flex :5, backgroundColor:"orange"}}></View>
         <View style={{flex:1,backgroundColor:"black"}}></View>
         <View style={{flex :5, backgroundColor:"orange"}}></View>
       </View>
     </View>


     <View style={{flex :1, backgroundColor:"yellow"}}/>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,

    
  },
});

