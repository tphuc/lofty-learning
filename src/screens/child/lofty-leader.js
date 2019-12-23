import React from 'react';
import { ImageBackground, View, Text, TouchableOpacity } from 'react-native';
import { History, Route, useHistory } from 'react-router-native';
import Layout from '../../components/Layout';
import { Row, Col, Grid } from 'react-native-easy-grid';
import { RFValue } from 'react-native-responsive-fontsize';
import NavigationBar from '../../components/NavigationBar';
import AntIcon from 'react-native-vector-icons/AntDesign';
import RouteURL from '../../components/RouteURL';
import KidBackBtn from '../../components/KidBackBtn/KidBackBtn';

const leaders = [
    {
        name: 'Anna',
        img: require('../../assets/images/child/anna.png')
    },
    {
        name: 'Janna',
        img: require('../../assets/images/child/janna.png')
    },
    {
        name: 'John',
        img: require('../../assets/images/child/john.png')
    },
    {
        name: 'Kenny',
        img: require('../../assets/images/child/kenny.png')
    },
    {
        name: 'Kenny',
        img: require('../../assets/images/child/kenny.png')
    }
]


const LoftyLeader = (props) => {
    const history = useHistory();
    return (
        <>

            <ImageBackground style={{ position: 'absolute', width: '100%', height: '100%' }} source={require('../../assets/images/child/loftyleader-bg.png')} />
            <KidBackBtn onPress={() => history.goBack()} />
            <View style={{ flex: 1, flexDirection: "row", flexWrap: 'wrap', justifyContent: 'center', alignItems: "center", marginTop:RFValue(40) }}>
                {
                    leaders.map((item, idx) =>
                        <TouchableOpacity key={idx} activeOpacity={0.8} style={{marginTop:RFValue(50)}}>
                            <ImageBackground style={{ width: RFValue(200), height: RFValue(100) }} resizeMode='contain' source={item.img} />
                        </TouchableOpacity>
                    )
                }
            </View>

        </>

    )
};

export default LoftyLeader;