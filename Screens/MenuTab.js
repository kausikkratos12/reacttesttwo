import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import {View,Text,FlatList,Image} from 'react-native';
import {Card} from 'react-native-paper';
import {MaterialCommunityIcons} from '@expo/vector-icons';


export default function MenuTab(){
    const items = ["Pizza","Burger","French Fries","Potato Chips","Lemonade","Spicy Chicken","Salad","Macronni Pasta","Cavior"];
    const darkgrey = "#121212";
    const lightgrey = "#d3d3d3";
    const white = "#fff"
    return(
        <View style={{alignItems:"center"}}>
            <View style={{height:"9%",width:"100%",backgroundColor:white,flexDirection:"row",alignItems:"center",elevation:5}}>
                <Card style={{marginLeft:10,elevation:6,height:28,width:28}}><MaterialCommunityIcons name="menu-open" size={26}  color={darkgrey}></MaterialCommunityIcons></Card>
                <Card style={{marginHorizontal:80,borderRadius:10,paddingHorizontal:10,height:28,elevation:0}}><Text style={{fontWeight:"bold",fontSize:18,color:"blue"}}>HOTEL TAJ</Text></Card>
                
            </View>
            <FlatList data={items}
           renderItem={({item})=>{       
               return(
                   <Card style={{width:350,height:150,margin:4,borderRadius:6,elevation:6}}>
                       <View style={{flex:1,flexDirection:"row",alignItems:"center"}}>
                        <Image style = {{width:90,height:90,margin:4,borderRadius:4}} source={{uri:"https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1901&q=80"}}></Image>
                       <Text style={{fontSize:20,fontWeight:"bold",justifyContent:"center"}}>{item}</Text>
                       </View>
                   </Card>
               );
            }} style={{backgroundColor:white}}></FlatList>
        </View>
    );
}

