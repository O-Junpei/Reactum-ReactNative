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
                        {key: 'Jillian'},
                        {key: 'Jimmy'},
                        {key: 'Julie'},
                    ]}
                    renderItem={({item}) =>
                        <Text style={styles.item}
                              onPress={() => Alert.alert(item.key)}
                        >{item.key}</Text>}
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
    },
})
