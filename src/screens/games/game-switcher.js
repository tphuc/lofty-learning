import React from 'react';
import { View, StatusBar, ScrollView } from 'react-native';
import {Grid, Row, Col} from 'react-native-easy-grid';



const GameSwitch = (props) => {
    
    return (
        <View style={{flex:1}}>
            <StatusBar translucent></StatusBar>
            <ImageBackground style={{position:'absolute', width:"100%", height:"100%", zIndex:-1}} resizeMode='cover' source={require('../../assets/images/bg-game-switcher.png')}></ImageBackground>
            <ScrollView horizontal>

            </ScrollView>
        </View>
    )    
}

