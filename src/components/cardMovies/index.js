import React from 'react'
import {View,Image,Text,TouchableOpacity} from 'react-native';
import styles from './style';
import { useNavigation,useRoute } from '@react-navigation/native'


export default function CardMovies({titulo,nota,imagem}){

    const navigation = useNavigation();
    const route = useRoute();

    

    return(
     
        <TouchableOpacity style={styles.containerJogos} 
            onPress = {() => navigation.navigate('Details',{titulo:titulo, nota:nota, imagem:imagem})}>
        <Image style={styles.images} source ={{uri:`https://image.tmdb.org/t/p/w500${imagem}`}}/>
        <Text style ={styles.titulo}>{titulo} </Text> 
        <Text style ={styles.textNota}> {nota} </Text>
    </TouchableOpacity>

  

    );


}