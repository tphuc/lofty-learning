import React from 'react';
import { View, Platform } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize';
import * as Anim from 'react-native-animatable'

const Layout = (props) => {
    const { style, ...others} = props
    var paddingTop = Platform.OS === 'ios' ? RFValue(35) : RFValue(0)
    return (
        <Anim.View style={{ flex:1, paddingTop: paddingTop, ...style }} {...others}>
            {props.children}
        </Anim.View>
    )
}

export default Layout;