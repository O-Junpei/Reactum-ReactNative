import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    Alert,
    FlatList,
    Platform
} from 'react-native';
import {Navigation} from 'react-native-navigation';

export default class ArticleListScreen extends Component {

    static navigatorButtons = {
        rightButtons: [
            {
                title: 'Search',
                id: 'search'
            }
        ]
    };

    static navigatorStyle: {
        navBarBackgroundColor: '#3b5998',
        navBarTextColor: '#fff',
        navBarSubtitleTextColor: '#ff0000',
        navBarButtonColor: '#ffffff',
        statusBarTextColorScheme: 'light'
    };

    _onPressButton() {
        Alert.alert('You tapped the button!')
        console.log('hello');
    }

    constructor(props) {
        super(props);
        this.state = {data: null};
        // if you want to listen on navigator events, set this up
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    componentWillMount() {
        console.log('componentWillMount');
        this._fetch()
    }

    _fetch = () => {
        fetch('http://54.168.54.196/api/v0/new')
            .then((response) => response.json())
            .then((responseJson) => {

                // keyが無いと怒られるので付与
                for (let i = 0; i < responseJson.length; i++) {
                    responseJson[i]['key'] = responseJson[i].id
                }
                this.setState({data: responseJson});
            })
            .catch((error) => {
                console.error(error);
            });
    }


    onNavigatorEvent(event) {
        if (event.id === 'search') {
            Alert.alert('NavBar', 'Search button pressed');
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.data}
                    renderItem={({item}) => <Text
                        style={styles.item}
                        onPress={() =>
                            this.onPushPress(item.url)
                        }
                    >{item.title}</Text>}
                />
            </View>
        );
    }

    onPushPress(url) {
        this.props.navigator.push({
            title: "WebView",
            screen: "com.swiswiswift.WebView",
            passProps: {url: url},
        });
    }

    onPushStyledPress() {
        this.props.navigator.push({
            title: "Styled",
            screen: "example.StyledScreen"
        });
    }

    onModalPress() {
        this.props.navigator.showModal({
            title: "Modal",
            screen: "example.ModalScreen",
            test: 'hellohello'
        });
    }

    onLightBoxPress() {
        this.props.navigator.showLightBox({
            screen: "example.LightBoxScreen",
            style: {
                backgroundBlur: "dark"
            },
            passProps: {
                greeting: 'hey there'
            },
        });
    }

    onInAppNotificationPress() {
        this.props.navigator.showInAppNotification({
            screen: "example.NotificationScreen"
        });
    }

    onStartSingleScreenApp() {
        Navigation.startSingleScreenApp({
            screen: {
                screen: 'example.FirstTabScreen'
            }
        });
    }
}

const styles = StyleSheet.create({
    button: {
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 10,
        marginTop: 10,
        color: 'blue'
    },
    container: {
        flex: 1,
    },
    item: {
        padding: 10,
        fontSize: 18,
        //height: 44,
        borderStyle: 'solid',
        borderWidth: 0.5,
        borderColor: '#bbb',
    },
});
