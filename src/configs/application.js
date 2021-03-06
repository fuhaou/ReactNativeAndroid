import release from 'src/configs/application/release';
import {Platform} from 'react-native';
const application = {
    spinnerSize : Platform.select({
        ios: 'large',
        android: 50
    }),
    language : 'vn', // 'en' or 'vn'
    appKey : 'eticket@sm',
    logo: require('src/app/assets/images/logo.png'),
};
const configs = Object.assign({}, application, release);
export default configs;