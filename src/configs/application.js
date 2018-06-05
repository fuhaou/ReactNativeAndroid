import release from './env/release';
const application = {
    language : 'vn', // 'en' or 'vn'
    appKey : 'eticket@sm',
};
const configs = Object.assign({}, application, release);
export default configs;