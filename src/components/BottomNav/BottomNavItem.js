import React, {useState, useRef, useEffect} from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types'
import { RFValue } from 'react-native-responsive-fontsize';
import * as Animatable from 'react-native-animatable';

const styles = StyleSheet.create({
    container:{
        flex:1,
        display:'flex',
        flexDirection:'column',
        padding:RFValue(5),
        paddingBottom: RFValue(20),
        paddingTop: RFValue(15),
        justifyContent:'space-around',
        alignItems:'center',
        color:'#aaaaaa',
    },
    text:{
        color:'#ddd',
        fontSize:RFValue(11),
        fontWeight: '600',
        textAlign:'center',
    }
})

const BottomNavItem = (props) => {
    const {
        text, 
        icon, 
        iconActiveStyle,
        textActiveStyle,
        containerStyle,
        containerActiveStyle,
        active,
        index,
        animation,
        style,
        ...others
    } = props;

    const [activeIndex, setActiveIndex] = useState(0);
    const Rcontainer = useRef();

    const activeStyling = {
        color: active ? 'rgb(31, 156, 218)' : '#aaa'
    }

    const iconComp = React.cloneElement(icon, { 
        style: {
            ...icon.props.style,
            color: active ? 'rgb(31, 156, 218)' : '#aaa',
            fontSize: RFValue(20),
            ...props.style
    } })

    return (
        <Animatable.View ref={Rcontainer}

        //  animation={animation} delay={100 + index * 100} 
        style={{flex:1}} >
            <TouchableOpacity style={{...styles.container}}  {...others}>
                { iconComp }

                {text ? <Text style={{
                    ...styles.text, 
                    ...activeStyling, 
                    ...(active ? textActiveStyle : {}),
                    ...props.style
                }}>
                    {text}
                </Text>  : null}
            </TouchableOpacity>
        </Animatable.View>
    )
}

BottomNavItem.propTypes = {
    text: PropTypes.string,
    icon: PropTypes.any,
    iconActiveStyle: PropTypes.any,
    textActiveStyle: PropTypes.any,
    containerStyle: PropTypes.any,
    containerActiveStyle: PropTypes.any,
    animation: PropTypes.string,
    active: PropTypes.bool
};

BottomNavItem.defaultProps = {
    text: '',
    icon: <></>,
    iconActiveStyle: {},
    textActiveStyle: {},
    containerStyle: {},
    containerActiveStyle: {},
    animation: 'lightSpeedIn',
    active: false
};

export default BottomNavItem;