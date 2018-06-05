import { StackNavigator } from 'react-navigation';

import LoadingScreen from '../libs/Screen/LoadingScreen';
import Screen from '../libs/Screen';

export const AppNavigator = StackNavigator({
    'Home': { screen: Screen},
    'Loading': { screen: LoadingScreen }
}, {
    initialRouteName: 'Loading',
});