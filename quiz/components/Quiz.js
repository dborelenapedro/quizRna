import React, {useState, useEffect} from 'react';
import { useForm, useController } from "react-hook-form";

import { Text, View, StyleSheet, TouchableHighlight, TextInput, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Question from './Question';
import Game from './Game';
import Header from './Header';

export default function Quiz(props){
    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);
    const [currentQuiz, setCurrentQuiz] = useState(0);
    const [quizzes, setQuizzes] = useState([]);
    const [value, setValue] = useState('');
    const [contestados, setContestados] = useState([]);
    const [loading, setLoading] = useState(true);
    const [val, setVal] = useState();


    useEffect(() => {
        
        async function fetchData() {
          const res = await fetch("https://core.dit.upm.es/api/quizzes/random10wa?token=d74e4cdf0df41da5a54c");
          const result = await res.json();
          setQuizzes([...result]);
          setLoading(false);
        }
        fetchData();
      }, []);

    async function cargar(){
        let currentQuizzes = JSON.stringify(quizzes);
                try {
                    await AsyncStorage.setItem(
                      '@P5_2021_IWEB:quiz',
                      currentQuizzes
                    );
                    alert("Todo de locos");
                  } catch (error) {
                      alert("Todo fatal nena");
                    // Error saving data
                  }
            }
    async function load(){
        try{
            let valuey=await AsyncStorage.getItem(
                '@P5_2021_IWEB:quiz'
            );
            if(valuey!== null){
            setCurrentQuiz(0);
            setScore(0);
            setQuizzes(JSON.parse(valuey));
            alert("Todo okey");
            }else{
                alert("No hay nada")
            }
            
        }catch(error){
            alert(error);
        }
    }
    async function remove(){
        try{
            await AsyncStorage.removeItem(
                '@P5_2021_IWEB:quiz'
            )
            alert('Borrado');
        }catch(error){
            alert(error);
        }
    }

      
    
    function siguiente() {
        let finish = false;
        let long = quizzes.length-1;
        let sig;
        if(currentQuiz === long){
            sig = long;
            finish = true;
        
        }else{
            sig = currentQuiz+1;
        }
        setFinished(finish);
        setCurrentQuiz(sig);
        setValue('');
    }
    function anterior() {
        let ant;
        if (currentQuiz === 0){
            ant = 0;
        }else{
            ant = currentQuiz-1;
        }
        setCurrentQuiz(ant);
        setValue('');
    }
    function onTextInputChange(text){
        setValue(text);
    }
    
    function submit(){
        if(value.trim().toLocaleLowerCase() === quizzes[currentQuiz].answer.trim().toLocaleLowerCase()){
            if(!contestados.includes(currentQuiz)){
                let scores = score +1;
                setScore(scores);
                setContestados([...contestados, currentQuiz]);
            }
        }else{
            if(contestados.includes(currentQuiz)){
                let aux = [...contestados];
                let int = aux.indexOf(currentQuiz);
                aux[int] = null;
                let scores = score -1;
                setScore(scores);
                setContestados([...aux])
            }
        }
        if(currentQuiz !== 9){
            siguiente();
        }else{
        setValue('');
        }
    }
    

    return(
        
        <View>   
        <Header/>
        {loading ? <Text>Cargando</Text> : 
            <View style={styles.quiz}>
            <View>  
                <Text style={styles.text}>Score:{score}</Text>
                <Game quiz={quizzes[currentQuiz]} numquiz={currentQuiz}/>
            </View>
                <View style={styles.botonera}>
                <TouchableHighlight onPress={siguiente} style={styles.boton}>
                    <Text style={{color:'white'}}>Siguiente</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={anterior} style={styles.boton}>
                    <Text style={{color:'white'}}>Anterior</Text>
                </TouchableHighlight>
                </View>
                <View style={styles.botonera}>

                <TouchableHighlight onPress={cargar} style={styles.boton}>
                <Text style={{color:'white'}}>Save</Text>
                </TouchableHighlight>

<TouchableHighlight onPress={load} style={styles.boton}>

<Text style={{color:'white'}}>Load</Text>

</TouchableHighlight>

<TouchableHighlight onPress={remove} style={styles.boton}>

<Text style={{color:'white'}}>Remove</Text>

</TouchableHighlight>

</View>
                <View>
                    <TextInput style={{height: 80, fontSize: 20}} placeholder="Type here your answer"
                    onChangeText={onTextInputChange}  onSubmitEditing={submit} value={value} style={styles.input}/>
                    <Button onPress={submit} title="Submit"/>
                </View>
            
            </View>

        }   
     </View> 
        

    )

}
const styles = StyleSheet.create({
    quiz: { 
      textAlign: 'center',
      justifyContent:'flex-start',
      fontSize: 25,
      padding: 30,
      backgroundColor: 'blue',
      color: 'white'
    },
    boton: {
        marginTop: 20,
        textAlign: 'center',
        width:100,
        height: 40,
        fontSize: 20,
        backgroundColor:'red'
        
    },
    input:{
        textAlign:'center',
        fontSize: 20,
        padding: 20,
        backgroundColor:'grey',
        color:'white',
        fontWeight:'bold'
    },
    botonera:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems: 'center',
        fontSize: 25,
        padding: 5,
        backgroundColor: 'blue',
    },
    text:{
        textAlign:'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }
  });