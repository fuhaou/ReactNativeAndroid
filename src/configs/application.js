import release from './application/release';
import {Platform} from 'react-native';
const application = {
    spinnerSize : Platform.select({
        ios: 'large',
        android: 50
    }),
    language : 'vn', // 'en' or 'vn'
    appKey : 'eticket@sm',
    logo: require('../app/assets/images/logo.png'),
};
const configs = Object.assign({}, application, release);
export default configs;