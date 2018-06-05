import React, {Component} from 'react';
import {Text, View} from "react-native";
export default class Screen extends Component
{
    constructor(props)
    {
        super(props);
    }
    render() {
        return(
            <View><Text>DEFAULT SCREEN</Text></View>
        );
    }
    redirect(routeName, params = {})
    {
        params.goTo = routeName;
        this.props.navigation.navigate('Loading', params);
    }
    replace(routeName, params = {})
    {
        params.goTo = routeName;
        this.props.navigation.replace('Loading', params);
    }
}