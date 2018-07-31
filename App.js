import React, {Component} from 'react';
import {Alert, AppRegistry, FlatList, StyleSheet, Text, View, Button} from 'react-native';

export default class App extends Component {

    _console() {
        console.log('hello');
    }

    _onPressButton() {
        Alert.alert('You tapped the button!')
        console.log('hello');
    }

    componentWillMount() {
        this._console;
    }

    render() {
        console.log(`[INFO] this.state.activeTab:`);
        return (
            <View style={styles.container}>
                <Button
                    onPress={this._onPressButton}
                    title="Press Me"
                />
                <FlatList
                    data={[
                        {key: 'Devin'},
                        {key: 'Jackson'},
                        {key: 'James'},
                        {key: 'Joel'},
                        {key: 'John'},
                        {key: 'df'},
                        {key: 'Jun'},
                        {key: 'Heck'},
                        {key: 'Rin'},
                        {key: 'Rain'},
                        {key: 'Sara'},
                        {key: 'Shin'},
                        {key: 'Toma'},
                        {key: 'Cat'},
                        {key: 'Dr'},

                    ]}
                    renderItem={({item}) =>
                        <View>
                            <Text style={styles.item}
                                  onPress={() => Alert.alert(item.key)}
                            >{item.key}</Text>
                        </View>
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        borderStyle: 'solid',
        borderWidth: 0.5,
        borderColor: '#888888',
    },
})
