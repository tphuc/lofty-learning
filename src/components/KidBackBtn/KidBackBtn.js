import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {RFValue} from 'react-native-responsive-fontsize'

const KidBackBtn = (props) => {
    return (

        <TouchableOpacity style={{ padding: RFValue(10), position:"absolute", zIndex:100 }} {...props}>
            <Entypo name='chevron-left' size={RFValue(50)} color='#fff' />
        </TouchableOpacity>

    )
}

export default KidBackBtn;