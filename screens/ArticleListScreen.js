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
    Button,
    Image,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {SearchBar} from 'react-native-elements'
import {Icon} from 'react-native-elements'
import Hoge from "../components/ArticleCellComponents";

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

    //セル部分が押されたら呼ばれる
    onPushPress(url) {
        this.props.navigator.push({
            title: "WebView",
            screen: "com.swiswiswift.WebView",
            passProps: {url: url},
        });
    }

    //セル部分が押されたら呼ばれる
    testPush(text) {
        alert(text)
    }

    render() {
        return (

            <ScrollView style={styles.container}>
                <SearchBar
                    platform={"ios"}
                    lightTheme={true}
                    onChangeText={(text) =>
                        this._onChangeText(text)
                    }
                    placeholder={'Search'}/>
                <FlatList
                    data={this.state.searchedData}
                    extraData={this.state}
                    removeClippedSubviews={false}
                    renderItem={({item}) =>
                        <View
                            style={styles.cell}>

                            <TouchableOpacity onPress={() => {
                               this.testPush(item.key)
                            }}>


                                {item.key % 2 ? <Image
                                    style={styles.button}
                                    source={require("../image/tab/tab-favorite.png")}/> : <Image
                                    style={styles.button}
                                    source={require("../image/snorlax.png")}/>}




                            </TouchableOpacity>
                            <Text
                                style={styles.text}
                                onPress={() =>
                                    this.onPushPress(item.url)
                                }
                                selectable={false}
                            >{item.title}</Text>
                        </View>}
                />
            </ScrollView>

        );
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
        height: 32,
        width: 32,
        marginTop: 'auto',
        marginBottom: 'auto',
        marginRight: 4,
        marginLeft: 8,
    },
    text: {
        flex: 1,
        padding: 10,
        fontSize: 18,
    },
});
