
import {  Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/search'
import { createAppContainer } from 'react-navigation';

const navigator = createStackNavigator({
search:SearchScreen
},
{
  initialRouteName:'search',
  defaultNavigationOptions:{
    title:'Business Search'
  }
}
)


export default  createAppContainer(navigator);
