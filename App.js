import React, {Component} from 'react';
import {Platform, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

export default class App extends Component {
  render() {
    return (
      <WebView
        source={{ uri: "http://lotto.ahcom.com.br/bet.html" }}
        javaScriptEnabled
        style={{ marginTop: 100 }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
