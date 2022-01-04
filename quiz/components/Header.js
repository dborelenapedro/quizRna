import React from 'react';

import {Text, View, StyleSheet} from 'react-native';

export default function Header(props){
        return (
        <View>
                <Text style={styles.header}>QUIZ</Text>
        </View>
          
        );
}

const styles = StyleSheet.create({
    header: { 
      textAlign: 'center',
      fontSize: 25,
      paddingTop:20,
      backgroundColor: 'blue',
      color: 'white'
    }
  });