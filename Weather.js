import React from "react";
import {Text,View,styleSheet,StatusBar} from 'react-native';
import PropTypes from 'prop-types';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {LinearGradient} from 'expo-linear-gradient';

const weatherOption = {
    Haze : {
        icon : "weather-hail",
        gradient :["#4DA0B0", "#D39D38"]
    },
    Thunderstorm : {

    },
    Clear : {
        icon : "weather-sunny",
        gradient:["#0ED2F7","#B2FEFA"]
    }
}

export default function Weather({temp,condition}){
    return (<LinearGradient  colors={weatherOption[condition].gradient} style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <View style={styles.half_container}>
            <MaterialCommunityIcons name ={weatherOption[condition].icon} color ="white"size ={116}/>
            <Text style={styles.temp}>{temp}</Text>
        </View>
        <View style={styles.half_container}/>
    </LinearGradient>);
}

Weather.propTypes = {
    temp : PropTypes.number.isRequired,
    condition : PropTypes.oneOf([
      "Thunderstorm",
      "Drizzle",
      "Rain",
      "Snow",
      "Atmosphere",
      "Clear",
      "Clouds"  ,
      "Haze",
      "Dust",
      "Mist"
    ]).isRequired

}

const styles ={
    container : {
        flex:1,
        justifyContent : "center",
        alignItems:"center"
    },
    temp :{
        fontSize:46,
        color : "white"
    },
    half_container:{
        flex :1,
        justifyContent:"center",
        alignItems:"center"
    }
}