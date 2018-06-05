import React, {Component} from 'react';
export default class Screen extends Component
{
    constructor(props)
    {
        super(props);
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