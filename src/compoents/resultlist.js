import React ,{useState} from 'react';
import {View,FlatList,ListItemText ,Text } from 'react-native';
import  ResultDetails from './resultdetails';

const ResultList=({results})=>{


    return (
        <View>
            <FlatList 
            data={results}
            keyExtractor = {(item, index) => index.toString() }
            // keyExtractor={(item, index) => 'list-item- ${index}'}
       renderItem={({item})=>{
       return <ResultDetails details={item}></ResultDetails>
       }}
       
       
            //     renderItem={({ item }) => (
        //     <ListItem
        //     key={item.id}
        //     // leftAvatar={{ source: { uri: l.avatar_url } }}
        //     title={item.title}
        //     subtitle={item.body}
        //     bottomDivider
        //   /> 
        //   )}
            ></FlatList>


        </View>
    )
}

export default ResultList;