import React, {Component} from 'react';
import {View, ActivityIndicator, Image, StyleSheet, Alert, Text} from 'react-native';
import Screen from "../Screen";
import configs from "../../configs/application";

export default class LoadingScreen extends Screen {
    static navigationOptions = {
        header: null,
    };
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <Image style={{width: 120, height: 120, marginBottom: 100}}
                       source={configs.logo}/>
                <ActivityIndicator size={configs.spinnerSize} color="#0000ff" />
            </View>
        );
    }
    redirect(routeName, params = {})
    {
        this.props.navigation.navigate(routeName, params);
    }
    replace(routeName, params = {})
    {
        this.props.navigation.replace(routeName, params);
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});