import {createStackNavigator} from 'react-navigation';
import Dashboard from '../container/Dashboard';
import EditScreen from '../container/EditScreen';

const StackNavigator = createStackNavigator({
    DashBoardScreen:Dashboard,
    EditScreen:EditScreen
},
{
    initialRouteName:'DashBoardScreen'
})

export default StackNavigator;