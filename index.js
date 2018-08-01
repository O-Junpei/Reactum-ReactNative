import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {Platform} from 'react-native';
import {Navigation} from 'react-native-navigation';

// screen related book keeping
import {registerScreens} from './screens';
registerScreens();

const createTabs = () => {
    let tabs = [
        {
            label: 'Article',
            screen: 'example.ArticleListScreen',
            title: '記事一覧',
            icon: require('./image/tab-snorlax.png'),
            navigatorStyle: {
                tabBarBackgroundColor: '#3b5998',
            }
        },
        {
            label: 'One',
            screen: 'example.FirstTabScreen',
            title: 'Screen One',
            icon: require('./image/tab-snorlax.png'),
            navigatorStyle: {
                tabBarBackgroundColor: '#3b5998',
            }
        },
        {
            label: 'Two',
            screen: 'example.SecondTabScreen',
            title: 'Screen Two',
            icon: require('./image/tab-snorlax.png'),
            navigatorStyle: {
                tabBarBackgroundColor: '#3b5998',
            }
        },
        {
            label: 'Third',
            screen: 'example.ThirdTabScreen',
            title: 'Screen Third',
            icon: require('./image/tab-snorlax.png'),
            navigatorStyle: {
                tabBarBackgroundColor: '#3b5998',
            }
        }
    ];
    return tabs;
};
// this will start our app
Navigation.startTabBasedApp({
    tabs: createTabs()
});

AppRegistry.registerComponent(appName, () => App);
