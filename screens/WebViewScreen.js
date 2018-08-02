import React, {Component} from 'react';
import {
    Text,
    View,
    ScrollView,
    WebView,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

export default class WebViewScreen extends Component {
    static navigatorStyle = {
        drawUnderTabBar: true
    };
    constructor(props) {
        console.log('--------------------')
        super(props);
        console.log(props)
    }

    componentWillMount() {
        console.log('adadad')
    }

    render() {
        return (
            <WebView
                source={{uri: this.props.url}}
                style={{marginTop: 0}}
            />
        );
    }
    onPushPress() {
        this.props.navigator.push({
            title: "WebView",
            screen: "com.swiswiswift.WebView"
        });
    }
    onPushStyledPress() {
        this.props.navigator.push({
            title: "More",
            screen: "example.StyledScreen"
        });
    }
    onPopPress() {
        this.props.navigator.pop();
    }
    onPopToRootPress() {
        this.props.navigator.popToRoot();
    }
    onResetToPress() {
        this.props.navigator.resetTo({
            title: "New Root",
            screen: "example.StyledScreen",
            animated: true
        });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white'
    },
    button: {
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 10,
        marginTop:10,
        color: 'blue'
    }
});