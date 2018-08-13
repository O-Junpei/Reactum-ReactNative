import {Navigation} from 'react-native-navigation';

import ArticleListScreen from './ArticleListScreen';
import FirstTabScreen from './FirstTabScreen';
import SecondTabScreen from './SecondTabScreen';
import ThirdTabScreen from './ThirdTabScreen';
import PushedScreen from './PushedScreen';
import WebViewScreen from './WebViewScreen';
import Hoge from '../components/ArticleCellComponents'

// register all screens of the app (including internal ones)
export function registerScreens() {
    Navigation.registerComponent('example.ArticleListScreen', () => ArticleListScreen);
    Navigation.registerComponent('example.FirstTabScreen', () => FirstTabScreen);
    Navigation.registerComponent('example.SecondTabScreen', () => SecondTabScreen);
    Navigation.registerComponent('example.ThirdTabScreen', () => ThirdTabScreen);
    Navigation.registerComponent('example.PushedScreen', () => PushedScreen);
    Navigation.registerComponent('com.swiswiswift.WebView', () => WebViewScreen);
}
