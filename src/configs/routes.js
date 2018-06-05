import { StackNavigator } from 'react-navigation';

import LoadingScreen from '../libs/Screen/LoadingScreen';

export const AppNavigator = StackNavigator({
    'Loading': { screen: LoadingScreen }
}, {
    initialRouteName: 'Loading',
});