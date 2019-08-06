import {createBottomTabNavigator,createAppContainer,createStackNavigator} from 'react-navigation';
import StackNavigator from './stackNavigator';
import History from '../container/History';

const TabNavigator = createBottomTabNavigator({
    Dashboard:StackNavigator,
    History:History
},{
    initialRouteName:'Dashboard',
    tabBarOptions:{
        labelStyle:{
            fontSize:20
        },
        
    }
})



export default createAppContainer(TabNavigator);