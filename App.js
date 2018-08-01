import {
    Platform
} from 'react-native';
import {Navigation} from 'react-native-navigation';

// screen related book keeping
import {registerScreens} from './screens';
registerScreens();

const createTabs = () => {
    let tabs = [
        {
            label: 'One',
            screen: 'example.FirstTabScreen',
            title: 'Screen One'
        },
        {
            label: 'Two',
            screen: 'example.SecondTabScreen',
            title: 'Screen Two',
            navigatorStyle: {
                tabBarBackgroundColor: '#3b5998',
            }
        },
        {
            label: 'Third',
            screen: 'example.ThirdTabScreen',
            title: 'Screen Third',
            navigatorStyle: {
                tabBarBackgroundColor: '#3b5998',
            }
        }
    ];
    if (Platform.OS === 'android') {
        tabs.push({
            label: 'Collapsing',
            screen: 'example.CollapsingTopBarScreen',
            title: 'Collapsing',
        });
    }
    return tabs;
};
// this will start our app
Navigation.startTabBasedApp({
    tabs: createTabs()
});