import React, {Component} from 'react';
import {View, ActivityIndicator, Image, StyleSheet} from 'react-native';
import configs from "src/configs/application";

export default class LoadingScreen extends Component {
    static navigationOptions = {
        header: null,
    };
    constructor(props) {
        super(props);
        this.handler().done();
    }
    render() {
        return (
            <View style={styles.container}>
                <Image style={{width: 120, height: 100, marginBottom: 100}}
                       source={configs.logo}/>
                <ActivityIndicator size={configs.spinnerSize} color="#0000ff" />
            </View>
        );
    }

    async handler(customHandler)
    {
        let params = this.props.navigation.state.params ? this.props.navigation.state.params : {};
        let goTo = params.goTo ? params.goTo : 'Home';
        let preventDefault = false;
        if (customHandler) {
            preventDefault = await customHandler();
        }
        if (!preventDefault) {
            this.replace(goTo, params);
        }
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