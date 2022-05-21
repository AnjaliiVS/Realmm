import React, { useState } from 'react';
import {View,Text, Button, FlatList, SafeAreaView} from 'react-native';
import realm,{getAllContacts,addContact,deleteContact} from './Database';

export default function App(){
const [contact,setcontact]=useState(getAllContacts);


  return(
    <SafeAreaView style={{padding:1}}>
   <View style={{margin:20,width:250}}>
         <Button
         title={"add"}
          onPress={()=>{
            addContact("1","Anjali","Vinay","9961260743");
            setcontact(getAllContacts);
          }}>
         </Button>
   </View>
   <View style={{margin:20,width:250}}>
     <Text>{getAllContacts}</Text>
         <Button
         title={"get"}>

         </Button>
   </View>
   <View style={{margin:20,width:250}}>
         <Button
         title={"delete"}
         onPress={()=>{
           deleteContact()
           setcontact(getAllContacts);
         }}>

         </Button>
   </View>
<Text style={{marginTop:10,fontWeight:"bold"}}>Contacts</Text>
<FlatList
 data={contact}
 keyExtractor={(item,index)=>index.toString()}
 renderItem={({item,index})=>{

 
 return(
<View style={{flexDirection:"row",justifyContent:'space-between'}}>
<Text>{item.recordID}</Text>
<Text>{item.givenName}</Text>
<Text>{item.familyName}</Text>
<Text>{item.phoneNumber}</Text>
</View>
 
)}}/>
    </SafeAreaView>
  );
}
