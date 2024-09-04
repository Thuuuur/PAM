import React,{Fragment} from 'react'
import {Image,Text} from 'react-native'
import styles from './style';


export default function BannerFilmes(){

    const imagem = Math.floor(Math.random() * 2 +1); 

    return(

        <>
 <Text style = {styles.textBanner}> Em cartaz  </Text>

 <Image style = {styles.imageBanner} source = {{uri:`https://image.tmdb.org/t/p/w500${imagem}`}}/>
        </>
    );

} 