import React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import  {RFValue} from 'react-native-responsive-fontsize';
import { Text } from 'react-native-ui-kitten'

const NavbarItem = (props) => {
    if(props.icon){
        var shoutemIcon = props.icon.type.name === 'Icon'
    }
    const styles = StyleSheet.create({
        container:{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'row',
            padding: RFValue(10),
        }
    })
    const {icon, text, title, style, textStyle, titleStyle, ...others} = props
    return (
        <TouchableOpacity activeOpacity={0.7} style={{...styles.container, ...style}} {...others}>
            {icon ? React.cloneElement(icon, {
                style:{
                    ...icon.props.style,
                    // fontSize:  RFValue(20)
                },
                size: icon.props.size | RFValue(18)
            }) : null}
            { text  && <Text category='s1' style={textStyle}>{text}</Text>}
            { title && <Text category='h4' style={textStyle}>{title}</Text>}
        </TouchableOpacity>
    )
}


NavbarItem.propTypes = {
    textStyle: PropTypes.any,
    titleStyle: PropTypes.any,
    icon: PropTypes.element,
    text: PropTypes.string,
    title: PropTypes.string,
    iconFirst: PropTypes.bool,
    onPress: PropTypes.func,
}

NavbarItem.defaultProps = {
    textStyle: {},
    titleStyle: {},
    icon: null,
    text: null,
    iconFirst: false,
    title: null,
    onPress: () => {}
}

export default NavbarItem;