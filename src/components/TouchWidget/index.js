import React from 'react';
import { TouchableOpacity, ImageBackground, Image }  from 'react-native';
import PropTypes from 'prop-types';
import * as Anim from 'react-native-animatable';



const Widget = (props) => {
    const { widgetImg, style, ...others} = props

    return (
        <Anim.View style={{margin:5, flex:1, borderRadius:10, ...style}} >
            <Image style={{ position:'absolute', width:'100%', height:'100%', borderRadius:10}} resizeMode='cover' source={widgetImg}></Image>
            <TouchableOpacity activeOpacity={0.5}  style={{flex:1, padding:10 }} {...others}>
                {props.children}
            </TouchableOpacity>
        </Anim.View>
    )
}

Widget.propTypes = {
    widgetImg: PropTypes.any
}

Widget.defaultProps = {
    widgetImg: null
}

export default Widget;