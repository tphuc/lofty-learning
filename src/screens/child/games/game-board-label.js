import React from 'react';
import { ImageBackground, Image, View } from 'react-native'
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';

const GameBoardLabel = (props) => {
    return (
        <View style={{width:350, height:'100%', paddingVertical:RFPercentage(10) }}>
            <ImageBackground style={{width:"100%", height:"100%", justifyContent:"center", alignItems:"center",}} resizeMode='contain' source={require('../../../assets/images/game-board-holder.png')}>
                {props.children}
            </ImageBackground>
        </View>
    )
}

export default GameBoardLabel;