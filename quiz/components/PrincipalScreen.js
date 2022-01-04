import React from 'react';
import { View } from 'react-native';
import {Text, Image, StyleSheet} from 'react-native';
import portada from '../assets/portada.png';
import Boton from './Boton'




export default function PrincipalScreen(props){



    return(
        <View style={styles.view}>
            <Text style={styles.text}>HOLA MUNDO, PEDRO Y ELENA OS PRESENTAN SU MARAVILLOSO SITIO WEB PARA ENTRETENERTE SI TE ABURRES</Text>
            <Image source={portada} style={{width:400,height:400}}/>
            <View style={{ flex:1, flexDirection: 'row',alignItems:'center', justifyContent:'center' }}>
                <Boton onPress={() => props.navigation.navigate('TicTacToe')} text={"TicTacToe"}/>
                <Boton onPress={() => props.navigation.navigate('Quiz')} text={"Quiz"}/>
            </View>
        </View>
       
    )


}
const styles = StyleSheet.create({
    text:{
        textAlign:'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom:50,
        paddingTop:50
    },
    view:{
        flex:1,
        alignItems:'center',
        backgroundColor:'blue'
    }
});