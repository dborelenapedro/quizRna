import React from 'react';

import {Text, Image, View, TextInput} from 'react-native';
import Question from './Question';

export default function Game(props){
    
    function fotoQuestion() {
        console.log("Algo");
        if(props.quiz.attachment !== null){
            return <Image source={{uri: props.quiz.attachment.url}} style={{width:300,height:300, alignItems:'stretch'}}/>;
        }else{
            return <Image source={require('../assets/interrogacion.png')} style={{width:300,height:300}}/>;
        }
    }
    
    return(
        <View>
            <View style={{alignItems:'center'}}>
            {fotoQuestion()}
            </View>
            <Text style={{fontSize: 20, color:'white', fontWeight:'bold', textAlign:'center'}}>Pregunta: {props.numquiz+1} </Text>
            <Question quiz={props.quiz}/>
            


        </View>
    )

}