/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import HelloWorldApp from './demo/App';
// 从APP.js文件中导入 HelloWorldApp
// import HelloWorldApp from './demo/Props';
// import BlinkApp from './demo/Blink'
import FlatListBasics from './demo/List'
import {name as appName} from './app.json';
import SectionListBasics from './demo/Section'

AppRegistry.registerComponent(appName, () => SectionListBasics);
