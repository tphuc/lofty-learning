import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View, StyleSheet, ScrollView, Picker, Modal } from 'react-native';
import PT from 'prop-types';
import { RFValue } from 'react-native-responsive-fontsize';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { Text } from 'react-native-ui-kitten';



const styles = StyleSheet.create({
    baseContainer: {
        position: 'relative',
        minWidth: RFValue(70),
        minHeight: RFValue(30),
        borderRadius: RFValue(15),
        elevation: 10,
        backgroundColor: "#fff",
        shadowColor: '#111',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
    }
})

const DROPDOWN = {
    WIDTH: 200
}

const CustomSelect = (props) => {
    const { selected, data, placeholder, onSelect, style, ...others } = props;
    const baseContainer = React.useRef()
    const dropdownContainer = React.useRef()
    const [toggleOptions, setToggleOptions] = useState(false);
    const [dropdownContainerStyle, setDropdownStyle] = useState({})
    const handleToggle = () => {
        baseContainer.current.measure((x, y, w, h, pX, pY) => {
            setDropdownStyle({
                position: 'absolute',
                top: pY + h,
                left: pX,
                width: w,
                minHeight: RFValue(130),
                borderBottomLeftRadius: RFValue(10),
                borderBottomRightRadius: RFValue(10),
                backgroundColor: "#fff"
            });
            setToggleOptions(true)
        })

    }

    return (
        <>
            <View style={{ margin: RFValue(5), }}>
                <TouchableOpacity
                    ref={baseContainer}
                    onPress={handleToggle}
                    style={{
                        ...styles.baseContainer,
                        ...(toggleOptions ? { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 } : {})
                    }}>
                    <View style={{ padding: RFValue(5) }}>
                        <Text style={{ textAlign: "center", color: selected ? '#111' : '#aaa' }} category='h6'>{selected ? selected.label : placeholder}</Text>
                    </View>
                    <View>
                        <AntIcon name={toggleOptions ? 'up' : 'down'} size={RFValue(18)} style={{ padding: RFValue(5) }} color='#888' />
                    </View>
                </TouchableOpacity>

            </View>
            {
                <Modal transparent visible={toggleOptions} supportedOrientations={['landscape', 'portrait']}>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => setToggleOptions(!toggleOptions)}
                        style={{ flex: 1, borderRadius: 10, borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
                        <View style={dropdownContainerStyle} ref={dropdownContainer}>
                            <ScrollView style={{ padding: RFValue(5) }}>
                                {
                                    data.map((item, idx) => <TouchableOpacity key={item.idx} style={{ padding: RFValue(10) }} onPress={() => { onSelect(item); setToggleOptions(false) }}>
                                        <Text style={{ color: selected && selected.value === item.value ? '#111' : '#555' }}>{item.label}</Text>
                                    </TouchableOpacity>)
                                }
                            </ScrollView>
                        </View>
                    </TouchableOpacity>
                </Modal>
            }
        </>
    )
}


CustomSelect.propTypes = {
    selected: PT.shape({
        label: PT.string,
        value: PT.any
    }),
    data: PT.arrayOf(PT.shape({
        label: PT.string,
        value: PT.any
    })),
    placeholder: PT.string,
    onSelect: PT.func,
};

CustomSelect.defaultProps = {
    selected: null,
    data: [],
    placeholder: 'select items',
    onSelect: () => { }
}



export default CustomSelect;