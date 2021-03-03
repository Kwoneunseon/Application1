import React from "react";
import {Text,View,styleSheet,StatusBar} from 'react-native';
import PropTypes from 'prop-types';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {LinearGradient} from 'expo-linear-gradient';

const weatherOption = {
    Haze : { // 안개
        icon : "weather-fog",
        gradient :["#636FA4", "#E8CBC0"]
    },
    Thunderstorm : {
        icon : "weather-lightning",
        gradient:["#4e4376","#2b5876"]
    },
    Drizzle : {//이슬비
        icon : "weather-partly-cloudy",
        gradient:["#076585","#fff"]
    },
    Rain:{
        icon :"weather-pouring",
        gradient:["#2B32B2","#1488CC"]
    },
    Snow: {
        icon : "weather-snowy",
        gradient:["#4e54c8","#8f94fb"]
    },
    Clear : {
        icon : "weather-sunny",
        gradient:["#0ED2F7","#B2FEFA"],
        title : "Clear",
        subtitle : "let's go outside."
    },
    Clouds :{
        icon :"weather-cloudy",
        gradient:["#5B86E5","#36D1DC"]
    },
    Dust:{
        icon :"weather-cloudy-alert",
        gradient:["#3C3B3F","#605C3C"]

    }
}

export default function Weather({temp,condition}){
    return (<LinearGradient  colors={weatherOption[condition].gradient} style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <View style={styles.half_container}>
            <MaterialCommunityIcons name ={weatherOption[condition].icon} color ="white"size ={116}/>
            <Text style={styles.temp}>{temp}°</Text>
        </View>
        <View style={{...styles.half_container, ...styles.textContainer}}>
            <Text style ={styles.title}>{weatherOption[condition].title}</Text>
            <Text style={styles.subtitle}>{weatherOption[condition].subtitle}</Text>
        </View>
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
    },
    title:{
        color : "white",
        fontSize : 44,
        fontWeight : "300",
        marginBottom : 10
    },
    subtitle : {
        color : "white",
        fontWeight : "600",
        fontSize : 24
    },
    textContainer : {
        paddingHorizontal : 20,
        alignItems :"flex-start"
    }

}