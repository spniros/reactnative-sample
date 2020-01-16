import React  from 'react';
import {  View,Text,StyleSheet, TextInput} from 'react-native';
import { Feather } from '@expo/vector-icons';

const Searchbar=({term,onChangeTerm,onTermEnd})=>{
    return (
        <View style={style.background}>
            <Feather name="search" style={style.iconStyle}/>
            <TextInput  style={style.inputStyle} placeholder="Search"
            value={term}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={newTerm=>onChangeTerm(newTerm)}
            onEndEditing={()=>onTermEnd()}
            />
        </View>
    );

}

const style=StyleSheet.create({
    background:{
        backgroundColor:'#F0EEEE',
        height:50,
        borderRadius:5,
        marginHorizontal:15,
        flexDirection:'row'
    },
    inputStyle:{
        flex:1,
        fontSize:18
    },
    iconStyle:{
        alignSelf:'center',
        fontSize:35
    }
});

export default Searchbar;

