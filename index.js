import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {Platform} from 'react-native';
import {Navigation} from 'react-native-navigation';

// screen related book keeping
import {registerScreens} from './screens';
registerScreens();

// this will start our app
Navigation.startTabBasedApp({
    tabs: [
        {
            label: 'Article',
            screen: 'example.ArticleListScreen',
            title: 'Article',
            icon: require('./image/tab/tab-list.png'),
            iconInsets: { // add this to change icon position (optional, iOS only).
                top: 0, // optional, default is 0.
                left: 0, // optional, default is 0.
                bottom: 0, // optional, default is 0.
                right: 0 // optional, default is 0.
            },
        },
        {
            label: 'One',
            screen: 'example.FirstTabScreen',
            title: 'Screen One',
            icon: require('./image/tab/tab-favorite.png'),
        },
        {
            label: 'Two',
            screen: 'example.SecondTabScreen',
            title: 'Screen Two',
            icon: require('./image/tab/tab-setting.png'),
        }
    ],
    tabsStyle: { // optional, add this if you want to style the tab bar beyond the defaults
        tabBarButtonColor: '#999999', // optional, change the color of the tab icons and text (also unselected). On Android, add this to appStyle
        tabBarSelectedButtonColor: '#222222', // optional, change the color of the selected tab icon and text (only selected). On Android, add this to appStyle
        tabBarBackgroundColor: '#ffffff', // optional, change the background color of the tab bar
        initialTabIndex: 0, // optional, the default selected bottom tab. Default: 0. On Android, add this to appStyle
    },
});

