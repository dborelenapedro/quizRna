import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import App from '../../TicTacToe/App';

export default function TicTacToe(){
   return(
        <View style={styles.header}>
            <Text style={{color:'white', fontSize: 30}}>TICTACTOE</Text>
            <App/>

        </View>
       );
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center'
    }

});