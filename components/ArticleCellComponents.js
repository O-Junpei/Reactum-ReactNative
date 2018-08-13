import React, { Component } from 'react';
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

export default class Hoge extends Component{
    //コンストラクタ
    constructor(props){
        super(props); //必ず呼ぶ
    }

    render(){
        return(

            <View
                style={styles.cell}>

                <TouchableOpacity onPress={(hoho) => {
                    this.testPush(hoho)
                }}>
                    <Image
                        style={styles.button}
                        source={require("../image/tab/tab-favorite.png")}/>
                </TouchableOpacity>
                <Text
                    style={styles.text}
                    onPress={() =>
                        this.onPushPress(item.url)
                    }
                    selectable={false}
                >{item.title}</Text>
            </View>
        );
    }
}

//スタイル定義
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