import React from "react";
import {Text,View,styleSheet} from 'react-native';
import PropTypes from 'prop-types';

export default function Weather({temp}){
    return <View style={styles.container}><Text>{temp}</Text></View>
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
    ])

}

const styles ={
    container : {
        flex:1,
        justifyContent : "center",
        alignItems:"center"
    }
}