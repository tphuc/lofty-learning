import React from 'react';
import { View, TouchableOpacity, StatusBar, Image } from 'react-native';
import { useHistory, Route } from 'react-router-native';
import Layout from '../../../../components/Layout';
import NavigationBar from '../../../../components/NavigationBar';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { RFValue } from 'react-native-responsive-fontsize';
import { Text } from 'react-native-ui-kitten';
import RouteURL from '../../../../components/RouteURL'



const VocalBoosterPlay = (props) => {
    const history = useHistory()
    return (
        <Layout style={{ backgroundColor: "rgb(241, 253, 253)" }}>
            <StatusBar backgroundColor='rgb(241, 253, 253)' barStyle='dark-content' />
            <NavigationBar
                colors={['rgb(0,193,255)', 'rgb(0,193,255)']}
                leftComponent={<NavigationBar.Item icon={<AntIcon name='left' style={{ color: '#fff' }} />} onPress={() => history.replace(RouteURL.parent_home_vocalbooster)} />}
                centerComponent={<NavigationBar.Item textStyle={{ color: '#fff' }} title='Vocal booster' />}
            />
            <View style={{flex:1}}>
                <Text category='h5' style={{ textAlign: 'center', padding: RFValue(20) }}>Listen and repeat</Text>

                <View style={{
                    padding: RFValue(20), margin: RFValue(20), justifyContent: 'center', alignItems: 'center', borderRadius: RFValue(10),
                    elevation: 6,
                    backgroundColor: '#fff',
                    shadowColor: '#333',
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.2,
                    shadowRadius: 10
                }}>
                    <Text category='h1' style={{ paddingTop: RFValue(20), paddingBottom: RFValue(100) }}> Intelligent </Text>
                    <Text>/inˈtelijənt/</Text>
                    <TouchableOpacity activeOpacity={0.8} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-around", padding: 10 }}>
                        <AntIcon size={RFValue(30)} name='sound' />
                        <Text> Tap to hear pronunciation</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity activeOpacity={0.8} style={{ width:'100%', height: RFValue(100)}}>
                        <Image style={{ height: '100%', width: '100%' }} resizeMode='contain' source={require('../../../../assets/images/parent/flashcard/voice.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        </Layout>
    )
}

export default VocalBoosterPlay;
