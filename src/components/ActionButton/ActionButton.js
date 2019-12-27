import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {RFValue} from 'react-native-responsive-fontsize';
import {Text} from 'react-native-ui-kitten';
import PT from 'prop-types';


const styles = StyleSheet.create({
    baseContainer: {
        padding: RFValue(10), 
        flexDirection:"row", 
        justifyContent:"center" , 
        alignItems:'center', 
        position:"absolute", 
        zIndex:100 
    },
    left:{
        left: 0
    },
    right:{
        right: 0
    }
})

const ActionButton = (props) => {
    const { position, icon, text } = props
    return (
        <TouchableOpacity style={{ ...styles.baseContainer, ...(position === 'left' ? styles.left : styles.right) }} {...props}>
            {React.cloneElement(icon, {
                 color: '#fff',
                ...icon.props,
                size: RFValue(50),
               
                
            })}
            {text && <Text color='#fff'>{text}</Text>}
        </TouchableOpacity>
    )
}

ActionButton.propTypes = {
    position: PT.oneOf(['left', 'right']),
    icon: PT.element,
    text: PT.string,
    onPress: PT.func,
}

ActionButton.defaultProps = {
    position: 'left',
    variant: 'back',
    icon: <Entypo name='chevron-left' size={RFValue(50)} color='#fff' />,
    text: null,
    onPress: () => {},
}

export default ActionButton;