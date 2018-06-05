import Singleton from "./Singleton";
import {Alert} from "react-native";
import {_} from './Translate';

export default class JsonFetcher extends Singleton
{
    get = async function(host)
    {
        try {
            let res = await fetch(host, {method: 'GET'});
            return await res.json();
        } catch (e) {
            Alert.alert(_('alert'), _('connection_error'));
            return null;
        }
    };

    post = async function(host)
    {
        try {
            let res = await fetch(host, {method: 'POST'});
            return await res.json();
        } catch (e) {
            Alert.alert(_('alert'), _('connection_error'));
            return null;
        }
    }
}