import React ,{useState} from 'react';
import {  View,Text,StyleSheet} from 'react-native';
import Searchbar  from '../compoents/searchbar'
import mainapi from "../api/mainapi";
import ResultList from "../compoents/resultlist";

const SearchScreen=()=>{
    const [term,termChange]=useState('');
    const [result,setResult] =useState([]);

    const searchApi= async () =>{
        try {
            const response=await mainapi.get('/posts',{});
        // console.log(response)
        setResult(response.data);
        } catch (error) {
            console.log(error);
        }
        
    }
    
    return (
        <View>
            <Searchbar term={term} 
            
            onChangeTerm={newTerm=>termChange(newTerm)}
            onTermEnd={()=>searchApi()}
            
             />
            <Text>Search Screen</Text>

    <Text>{term}</Text>
    <Text>{result.length}</Text>
    <ResultList results={result}   />

        </View>
    );

}

const style=StyleSheet.create({});

export default SearchScreen;

