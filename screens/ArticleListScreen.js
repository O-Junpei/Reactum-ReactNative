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
        // if you want to listen on navigator events, set this up
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
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
                    data={[
                        {key: 'Search Ads is Expanding to More Countries'},
                        {key: 'New Design Resources Now Available'},
                        {key: 'WWDC18 Video Transcripts Now Available'},
                        {key: 'データインテグレーション部にジョインしました大高です。'},
                        {key: 'Amazon EFSマウントを簡単にするamazon-efs-utilsをインストールする'},
                        {key: 'Firebase ML Kitで自作のカスタムモデルを使って料理・非料理画像を判定できるようにした'},
                        {key: 'はてな・ペパボ技術大会 #4 〜DevOps〜 @京都 を開催しました #pepabohatena'},
                        {key: 'fastlane match でiOSアプリ開発者を「証明書管理の苦しみ」から解放せよ！'},
                        {key: 'Char2Vec で文字の特性について調べてみた'},
                        {key: '新卒研修の受講レポート～AWS編～'},
                        {key: 're:Invent 2017: Tuesday Night Live の裏番組で'},
                        {key: '新卒研修の受講レポート～git編～'},
                        {key: 'Why Stanby moved big data analysis from Amazon Web Services to Google Cloud Platform'},
                    ]}
                    renderItem={({item}) => <Text
                        style={styles.item}
                        onPress={this.onPushPress.bind(this)}
                    >{item.key}</Text>}
                />
            </View>
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
            title: "Styled",
            screen: "example.StyledScreen"
        });
    }

    onModalPress() {
        this.props.navigator.showModal({
            title: "Modal",
            screen: "example.ModalScreen"
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
