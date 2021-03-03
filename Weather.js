import React from "react";
import {Text,View,styleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {MaterialCommunityIcons} from "@expo/vector-icons";

export default function Weather({temp}){
    return (<View style={styles.container}>
        <View style={styles.half_container}>
            <MaterialCommunityIcons name ="weather-lightning-rainy" size ={116}/>
            <Text style={styles.temp}>{temp}</Text>
        </View>
        <View style={styles.half_container}/>
    </View>);
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
        fontSize:46
    },
    half_container:{
        flex :1,
        justifyContent:"center",
        alignItems:"center"
    }
}