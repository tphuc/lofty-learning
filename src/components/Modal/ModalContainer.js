import React from 'react';
import { Modal, View, StyleSheet, TouchableOpacity} from 'react-native';
import * as Anim from 'react-native-animatable';
import PropType from 'prop-types';
import Ioicon from 'react-native-vector-icons/Ionicons'
import { RFValue } from 'react-native-responsive-fontsize';

const POS = {
    top:'top',
    middle:'middle',
    bottom: 'bottom'
}
const styles = StyleSheet.create({
    bottomDisplay:{
        position:'absolute',
        bottom:0,
        minHeight:200,
        width:'100%',
        borderTopLeftRadius:20,
        borderTopRightRadius:20
    },
    middleDisplay:{
        position:'absolute',
        top: '40%',
        left: '5%',
        minHeight:200,
        width:'90%',
        height:'20%',
        borderRadius:20
    },
    topDisplay:{
        position:'absolute',
        top:0,
        minHeight:200,
        width:'100%',
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20
    }
})

const ModalContainer = (props) => {
    const { visible, position, onPressClose, ...others} = props
    var displayStyles = {}
    switch (position) {
        case POS.top:
            displayStyles = styles.topDisplay;
            break;
        case POS.middle:
            displayStyles = styles.middleDisplay;
            break;
        case POS.bottom:
            displayStyles = styles.bottomDisplay;
            break;
        default:
            break;
    }
    return (
        <Modal supportedOrientations={['landscape', 'portrait']} visible={visible} transparent>
            <View style={{backgroundColor:'rgba(0,0,0,0.3)', flex:1}}>
                <Anim.View style={{backgroundColor:'#fff', ...displayStyles }} {...others} animation='slideInUp'>
                    {props.children}
                    <TouchableOpacity style={{position:'absolute', top:0, right:0, paddingHorizontal:15, zIndex:10}} onPress={onPressClose}>
                        <Ioicon name='ios-close' size={RFValue(50)} style={{ color:'rgb(230,100,120)'}}></Ioicon>
                    </TouchableOpacity>
                </Anim.View>
            </View>
        </Modal>
    )
}

ModalContainer.propTypes = {
    visible: PropType.bool,
    position: PropType.oneOf(['top','middle','bottom']),
    onPressClose: PropType.func
}

ModalContainer.defaultProps = {
    visible: false,
    position: POS.middle,
    onPressClose: () => {}
}


export default ModalContainer;
