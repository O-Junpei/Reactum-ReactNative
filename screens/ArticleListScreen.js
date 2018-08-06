import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    Alert,
    FlatList,
    ScrollView,
    Platform,
    Button
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import { SearchBar } from 'react-native-elements'
import { Icon } from 'react-native-elements'

export default class ArticleListScreen extends Component {

    static navigatorButtons = {
        rightButtons: [
            {
                title: 'Search',
                id: 'search'
            },
        ]
    };

    _onPressButton() {
        Alert.alert('You tapped the button!')
        console.log('hello');
    }

    constructor(props) {
        super(props);
        this.state = {data: null, searchedData: null};
        // if you want to listen on navigator events, set this up
        this.props.navigator.setOnNavigatorEvent(ArticleListScreen.onNavigatorEvent.bind(this));
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
                this.setState({searchedData: responseJson})
            })
            .catch((error) => {
                console.error(error);
            });
    }


    static onNavigatorEvent(event) {
        if (event.id === 'search') {
            //Alert.alert('NavBar', 'Search button pressed');
        }
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <SearchBar
                    platform={"ios"}
                    //clearIcon={<Icon name='rowing' />}
                    lightTheme={true}
                    onChangeText={(text) =>
                        this._onChangeText(text)
                    }
                    //onClear={ Alert.alert('Clear', 'うごかねぇ')}
                    //onClear={this._onPressButton()}
                    //onClear={this._onPressButton.bind(this)}
                    placeholder={'Search'} />
                <FlatList
                    data={this.state.searchedData}
                    extraData={this.state}
                    removeClippedSubviews={false}
                    renderItem={({item}) =>
                        <View
                        style={styles.cell}>
                            <Button
                                onPress={ () =>
                                    Alert.alert('You tapped the button!')
                                }
                                style={styles.button}
                                title="Lea"
                                color="#841584"
                        />
                            <Text
                            style={styles.text}
                            onPress={() =>
                                this.onPushPress(item.url)
                            }
                            >{item.title}</Text>
                        </View>}
                />
            </ScrollView>
        );
    }

    //TextFieldの値が変更されたら呼ばれる
    _onChangeText(text) {
        let data = this.state.data
        let searchedData = []
        for (let i = 0; i < data.length; i++) {
            let title = data[i].title
            if (title.includes(text)) {
                searchedData.push(data[i])
            }
        }
        this.setState({searchedData: searchedData});
    }

    onPushPress(url) {
        this.props.navigator.push({
            title: "WebView",
            screen: "com.swiswiswift.WebView",
            passProps: {url: url},
        });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cell: {
        flex: 1,
        flexDirection: 'row',
        borderStyle: 'solid',
        borderWidth: 0.5,
        borderColor: '#bbb',
    },
    button: {
        flex: 1,
        backgroundColor: 'orange',
    },
    text: {
        flex: 4,
        padding: 10,
        fontSize: 18,
    },
});
