import React ,{useState} from 'react';
import {View,FlatList,ListItemText ,Text } from 'react-native';
import { ListItem } from 'react-native-elements';


// const list = [
//     {
//       name: 'Amy Farha',
//       avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
//       subtitle: 'Vice President'
//     },
//     {
//       name: 'Chris Jackson',
//       avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
//       subtitle: 'Vice Chairman'
//     }

//   ]
  

const ResultDetails =({details})=>{

//     return (
// <View>
// {
//     details.map((item, i) => (
//         <ListItem
//         title={item.title}
//         subtitle={item.body}
//         leftAvatar={{ source: { uri: item.id } }}
//         bottomDivider
//         chevron
//       />
//     ))
//   }
// </View>
//     );
return (
  <View>
    {
    //   details.map((l, i) => (
        <ListItem
          key={details.id}
          leftAvatar={{ source: { uri: details.avatar_url } }}
          title={details.title}
          subtitle={details.body}
          bottomDivider
        />
    //   ))
    }
  </View>
)

}

export default ResultDetails;