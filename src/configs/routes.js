import { StackNavigator } from 'react-navigation';

import LoadingScreen from 'src/libs/Screen/LoadingScreen';
import Screen from 'src/libs/Screen';

export const AppNavigator = StackNavigator({
    'Home': { screen: Screen},
    'Loading': { screen: LoadingScreen }
}, {
    initialRouteName: 'Loading',
});