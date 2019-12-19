import React, { useEffect } from 'react';
import { Modal, View, Image, TouchableOpacity, Dimensions } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize';
import { Text } from 'react-native-ui-kitten';
import FeIcon from 'react-native-vector-icons/Feather';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Orientation from 'react-native-orientation-locker';
import NavigationBar from '../../components/NavigationBar';
import { useHistory } from 'react-router-native';
import RouteURL from '../../components/RouteURL';


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const TARGET = [3, 7, 5]

const ParentGate = (props) => {
    const { onPressClose, visible = false } = props;
    const history = useHistory()
    useEffect(() => {
        Orientation.lockToLandscape()
    }, [])

    const [number_1, setNumber_1] = React.useState(null)
    const [number_2, setNumber_2] = React.useState(null)
    const [number_3, setNumber_3] = React.useState(null)

    const addNumber = (n) => {
        if (!number_1)
            return setNumber_1(n)
        if (!number_2)
            return setNumber_2(n)
        if (!number_3) {
            setNumber_3(n);

            if (number_1 === TARGET[0] && number_2 === TARGET[1] && n === TARGET[2]) {

                history.push(RouteURL.parent_home)
            }

        }

    }

    const clearNumber = (n) => {
        if (number_3)
            return setNumber_3(null)
        if (number_2)
            return setNumber_2(null)
        if (number_1)
            return setNumber_1(null)
    }



    return (
        <Modal visible={visible} supportedOrientations={['landscape', 'portrait']}>
            <View style={{ justifyContent: 'space-between', alignItems: "center", backgroundColor: 'rgb(56,193,219)' }}>
                <View></View>
                <TouchableOpacity style={{ padding: RFValue(10), alignSelf: "flex-end" }} onPress={onPressClose}>
                    <AntIcon name='close' size={RFValue(30)} color='rgb(247, 98, 94)' />
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, backgroundColor: 'rgb(56,193,219)', display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center", flexDirection: "column", display: 'flex' }}>
                    <View style={{ flex: 4, width: '100%', height: '100%' }}>
                        <Image resizeMode='contain' style={{ width: '100%', height: '100%' }} source={require('../../assets/images/parent/parent-illustration.png')}></Image>
                    </View>
                    <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                        <Text category='h4' style={{ color: '#fff' }}>PARENT ONLY</Text>
                        <Text style={{ color: '#fff' }}>ENTER THE NUMBERS:</Text>
                        <Text category='h6' style={{ color: '#fff' }}>THREE, SEVEN, FIVE</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
                        <View style={{ borderBottomWidth: 2, marginHorizontal: RFValue(5), borderColor: '#fff', width: RFValue(30) }}>
                            <Text category='h5' style={{ color: '#fff' }}>{number_1 ? number_1 : ' '}</Text>
                        </View>
                        <View style={{ borderBottomWidth: 2, marginHorizontal: RFValue(5), borderColor: '#fff', width: RFValue(30) }}>
                            <Text category='h5' style={{ color: '#fff' }}>{number_2 ? number_2 : ' '}</Text>
                        </View>
                        <View style={{ borderBottomWidth: 2, marginHorizontal: RFValue(5), borderColor: '#fff', width: RFValue(30) }}>
                            <Text category='h5' style={{ color: '#fff' }}>{number_3 ? number_3 : ' '}</Text>
                        </View>
                        <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }} onPress={clearNumber}>
                            <FeIcon name='delete' size={RFValue(20)} color='#fff' />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 2, flexDirection: "row", justifyContent: "center" }} />

                </View>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center", flexWrap: 'wrap', flexDirection: 'row' }}>
                    {
                        numbers.map(n => <TouchableOpacity style={{ width: Dimensions.get('window').width / 2 * 0.15, height: Dimensions.get('window').width / 2 * 0.15, marginHorizontal: '8%', marginVertical: '1%', backgroundColor: "rgba(255,255,255,0.4)", justifyContent: 'center', alignItems: 'center', borderRadius: RFValue(100) }} onPress={() => addNumber(n)}>
                            <Text category='h4' style={{ color: "#fff" }}>{n}</Text>
                        </TouchableOpacity>)
                    }
                </View>

            </View>
        </Modal>
    )
}

export default ParentGate;