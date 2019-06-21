import React, {Component} from 'react';
import {Platform, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

import styles from "./App.scss";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View className={styles.container}>
        <Text className={styles.welcome}>Welcome to React Native!</Text>
        <Text className={styles.instructions}>To get started, edit App.js</Text>
        <Text className={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}
