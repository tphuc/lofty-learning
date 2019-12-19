import React from 'react';
import { ImageBackground, StatusBar, View, Image, TouchableOpacity } from 'react-native';
import Layout from '../../../components/Layout';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FontTisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import Navigationbar from '../../../components/NavigationBar';
import { RFValue } from 'react-native-responsive-fontsize';
import { Text } from 'react-native-ui-kitten'
import { useHistory } from 'react-router-native';
import RouteURL from '../../../components/RouteURL';



const ParentInvitation = (props) => {
    const history = useHistory();
    return (
        <>
            <ImageBackground
                style={{ position: 'absolute', width: '100%', height: '100%' }} source={require('../../../assets/images/parent/invite.png')} />
            <Layout style={{ paddingBottom: 0 }} animation='slideInUp'>

                <Navigationbar
                    leftComponent={<Navigationbar.Item icon={<AntIcon style={{ color: '#fff' }} name='left' />} onPress={() => history.replace(RouteURL.parent_home)} />}
                    centerComponent={<Navigationbar.Item textStyle={{ color: "#fff" }} title='Invite a friend' />}
                />
                <View style={{ flex: 1, display: "flex", justifyContent: 'center', alignItems: "center", padding: RFValue(30) }}>
                    <Text category='h6' style={{ color: '#fff', textAlign: "center" }}>Get a free month of Unlimited access for every friend that joins</Text>
                </View>
                <View style={{ flex: 1, }}>
                    <Image style={{ width: '100%', height: '100%' }} resizeMode='contain' source={require('../../../assets/images/parent/gift.png')} />
                </View>
                <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <Text>Tap to invite</Text>
                    <View style={{ flexDirection: 'row', display: 'flex', width: "60%", justifyContent: 'space-around', alignItems: 'center', padding: RFValue(10) }}>
                        <TouchableOpacity>
                            <FontTisto color='rgb(142, 36, 170)' size={RFValue(30)} name='viber' />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Entypo color='rgb(233,45,1)' size={RFValue(30)} name='mail-with-circle' />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <AntIcon color='rgb(56, 92, 142)' size={RFValue(30)} name='facebook-square' />
                        </TouchableOpacity>
                    </View>
                </View>

            </Layout>
        </>
    )
}

export default ParentInvitation;