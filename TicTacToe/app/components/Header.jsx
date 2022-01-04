import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

export default function Header(props) {
    return (
      <Text style={styles.header}>Turn: {props.text}</Text>
    );
}

const styles = StyleSheet.create({
  header: { 
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
    padding: 30
  }
});
