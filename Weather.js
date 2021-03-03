import React from "react";
import {Text,View,styleSheet,StatusBar} from 'react-native';
import PropTypes from 'prop-types';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {LinearGradient} from 'expo-linear-gradient';

const weatherOption = {
    Haze : { // 안개
        icon : "weather-fog",
        gradient :["#636FA4", "#E8CBC0"],
        title : "Haze",
        subtitle :"Just don't go outside"
    },
    Thunderstorm : {
        icon : "weather-lightning",
        gradient:["#4e4376","#2b5876"],
        title : "Thundestorm in the house",
        subtitle : "Actually, outside of the house"
    },
    Drizzle : {//이슬비
        icon : "weather-partly-cloudy",
        gradient:["#89F7FE","#66A6FF"],
        title : "Drizzle",
        subtitle : "Is like rain"
    },
    Rain:{
        icon :"weather-pouring",
        gradient:["#2B32B2","#1488CC"],
        title : "Raining like a MF",
        subtitle : "For more info look outside"
    },
    Snow: {
        icon : "weather-snowy",
        gradient:["#4e54c8","#8f94fb"],
        title : "Cold as balls",
        subtitle : "Do you want to build a snowman? Fuck no"
    },
    Clear : {
        icon : "weather-sunny",
        gradient:["#0ED2F7","#B2FEFA"],
        title : "Sunny as fuck",
        subtitle : "Go get your ass burnt"
    },
    Clouds :{
        icon :"weather-cloudy",
        gradient:["#5B86E5","#36D1DC"],
        title : "Clouds",
        subtitle : "I know, fucking boring"
    },
    Dust:{
        icon :"weather-cloudy-alert",
        gradient:["#4DA0B0","#D39D38"],
        title:"Dusty",
        subtitle : "Thanks a lot china"
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