import React from 'react';

import {Text, View, StyleSheet} from 'react-native';

export default function Question(props){

    return(
        <View >  
            <Text style={{color:'white', marginTop: 5, alignSelf:'center', fontSize:20}}>{props.quiz.question}</Text>
        </View>
    )
}