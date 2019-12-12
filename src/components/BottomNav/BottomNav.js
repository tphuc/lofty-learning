import React, { useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Dimensions, Platform } from 'react-native';
import BottomNavItem from './BottomNavItem';
import { RFValue } from 'react-native-responsive-fontsize';
import * as Animatable from 'react-native-animatable';

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        bottom:RFValue(0),
        height: RFValue(70),
        paddingHorizontal: RFValue(10),
        width:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'stretch',
        backgroundColor:'#ffffff',
        shadowColor:'#aaa',
        shadowOffset: {width:0, height: -5},
        shadowRadius: 10,
        shadowOpacity: 0.3,
        elevation:24,
        zIndex:1,
        borderTopLeftRadius: RFValue(20),
        borderTopRightRadius: RFValue(20),
        paddingBottom: Platform.OS === 'ios' ? RFValue(10) : 0,
        borderColor:'#aaaaaa1f'
    }
})

const BottomNav = (props) => {
    const [currentScreen, setCurrentScreen] = useState('');
    const {hidden, style, navigationItems, ...others} = props;
    const createNavItems = (ls) => {
            return ls.map((itemOptions, idx) => {
                itemOptions.index = idx
                return createNavItem(itemOptions) 
            }
        )
    }
    return (
        <Animatable.View style={{ ...styles.container, ...style }} {...others}  >
            {/* {props.children} */}
            { createNavItems(navigationItems) }
        </Animatable.View>
    )
}

BottomNav.propTypes = {
    hidden: PropTypes.bool,
    navigationItems: PropTypes.array,

}

BottomNav.defaultProps = {
    navigationItems: PropTypes.array,
    hidden: false
}

BottomNav.Item = BottomNavItem



const createNavItem = (props) => {
    return <BottomNavItem 
        key={props.index}
        {...props}
    />
}


export default BottomNav;
