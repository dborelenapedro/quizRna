import React from 'react';
import {Text, TouchableHighlight, StyleSheet } from 'react-native';
export default function Boton(props) {

return (
    <TouchableHighlight onPress={props.onPress}>
        <Text style={styles.text}>{props.text}</Text>
    </TouchableHighlight>
);
}

const styles = StyleSheet.create({
    text: {
    padding: 15,
    margin: 10,
    backgroundColor: 'white',
    color: 'black',
    borderWidth: 3,
    borderColor: 'black',
    fontSize: 25,
    textAlign: 'center'
    }
    })