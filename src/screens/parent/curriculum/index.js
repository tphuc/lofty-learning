import React from 'react';
import { View, TouchableOpacity, ScrollView, Image, StatusBar } from 'react-native';
import Navigationbar from '../../../components/NavigationBar';
import AntIcon from 'react-native-vector-icons/AntDesign';
import IoIcon from 'react-native-vector-icons/Ionicons';
import Layout from '../../../components/Layout';
import { RFValue } from 'react-native-responsive-fontsize';
import { useHistory, Route } from 'react-router-native'
import RouteURL from '../../../components/RouteURL';
import { Text } from 'react-native-ui-kitten';
import * as Anim from 'react-native-animatable';
import BottomNav from '../../../components/BottomNav';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import MatIcon from 'react-native-vector-icons/MaterialIcons';

import Colors from './colors'


const colorsPattern = [
    'rgb(0, 255, 177)',
    'rgb(255, 213, 0)',
    'rgb(254, 95, 95)',
    'rgb(57, 90, 255)'
]

const units = [
    {
        unitNumber: 1,
        unitName: 'The adventure begins',
        activitiesNumber: 70
    },
    {
        unitNumber: 2,
        unitName: 'New sights and sounds',
        activitiesNumber: 65
    },
    {
        unitNumber: 3,
        unitName: 'Breaking free',
        activitiesNumber: 65
    },
    {
        unitNumber: 4,
        unitName: 'Crossing the bridge',
        activitiesNumber: 65
    },
    {
        unitNumber: 5,
        unitName: 'Ducks in a Row',
        activitiesNumber: 65
    }
]
const Unit = (props) => {
    const { unitNumber, unitName, activitiesNumber, id } = props;
    const [expand, setExpand] = React.useState(false);
    const history = useHistory();
    return (
        <View style={{ margin: RFValue(10), borderLeftWidth: 3, borderLeftColor: colorsPattern[id % 4] }}>
            <View style={{ display: 'flex', flexDirection: "row", justifyContent: 'space-between', alignItems: 'center', }}>
                <View style={{ flexDirection: 'column', padding: RFValue(10), }}>
                    <Text>Unit {unitNumber}</Text>
                    <Text category='h5'>{unitName}</Text>
                    <Text> 0 / {activitiesNumber} activities</Text>
                </View>
                <TouchableOpacity onPress={() => setExpand(!expand)}>
                    <AntIcon style={{ padding: RFValue(10) }} name={expand ? 'caretdown' : 'caretright'} />
                </TouchableOpacity>
            </View>
            {
                expand &&
                <Anim.View style={{ display: "flex", flexDirection: 'column' }} animation='slideInLeft'>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => history.replace(RouteURL.parent_curriculum + '/colors')} style={{ maxHeight: RFValue(50), display: "flex", flexDirection: 'row', backgroundColor: "#fff", borderRadius: 5, marginVertical: RFValue(5), elevation: 4, shadowColor:'#111', shadowOffset: { width: 0, height:10}, shadowOpacity: 0.2, shadowRadius:10 }}>
                        <View style={{ flex: 1 }}>
                            <Image style={{ height: "100%", width: '100%' }} resizeMode='contain' source={require('../../../assets/images/curriculum/color.png')} />
                        </View>
                        <View style={{ flex: 2, flexDirection: "column", justifyContent: 'center', }}>
                            <Text>Colors</Text>
                            <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: "center" }}>
                                <Text category='h6' style={{ lineHeight: RFValue(30) }}> <IoIcon size={RFValue(20)} name='logo-game-controller-a' /> 10</Text>
                                <Text category='h6' style={{ lineHeight: RFValue(30) }}> <IoIcon size={RFValue(20)} name='ios-mic' /> 10</Text>
                                <Text category='h6' style={{ lineHeight: RFValue(30) }}> <IoIcon size={RFValue(20)} name='ios-create' /> 10</Text>
                            </View>
                        </View>
                        <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
                            <Text> 0 / 14</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={{ maxHeight: RFValue(50), display: "flex", flexDirection: 'row', backgroundColor: "#fff", borderRadius: 5, marginVertical: RFValue(5), elevation: 10, shadowColor:'#111', shadowOffset: { width: 0, height:10}, shadowOpacity: 0.2, shadowRadius:10 }}>
                        <View style={{ flex: 1 }}>
                            <Image style={{ height: "100%", width: '100%' }} resizeMode='contain' source={require('../../../assets/images/curriculum/number.png')} />
                        </View>
                        <View style={{ flex: 2, flexDirection: "column", justifyContent: 'center' }}>
                            <Text>Numbers</Text>
                            <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: "center" }}>
                                <Text category='h6' style={{ lineHeight: RFValue(30) }}> <IoIcon size={RFValue(20)} name='logo-game-controller-a' /> 10</Text>
                                <Text category='h6' style={{ lineHeight: RFValue(30) }}> <IoIcon size={RFValue(20)} name='ios-mic' /> 10</Text>
                                <Text category='h6' style={{ lineHeight: RFValue(30) }}> <IoIcon size={RFValue(20)} name='ios-create' /> 10</Text>
                            </View>
                        </View>
                        <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
                            <Text> 0 / 14</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={{ maxHeight: RFValue(50), display: "flex", flexDirection: 'row', backgroundColor: "#fff", borderRadius: 5, marginVertical: RFValue(5), elevation: 10, shadowColor:'#111', shadowOffset: { width: 0, height:10}, shadowOpacity: 0.2, shadowRadius:10}}>
                        <View style={{ flex: 1 }}>
                            <Image style={{ height: "100%", width: '100%' }} resizeMode='contain' source={require('../../../assets/images/curriculum/toy.png')} />
                        </View>
                        <View style={{ flex: 2, flexDirection: "column", justifyContent: 'center' }}>
                            <Text>Toys</Text>
                            <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: "center" }}>
                                <Text category='h6' style={{ lineHeight: RFValue(30) }}> <IoIcon size={RFValue(20)} name='logo-game-controller-a' /> 10</Text>
                                <Text category='h6' style={{ lineHeight: RFValue(30) }}> <IoIcon size={RFValue(20)} name='ios-mic' /> 10</Text>
                                <Text category='h6' style={{ lineHeight: RFValue(30) }}> <IoIcon size={RFValue(20)} name='ios-create' /> 10</Text>
                            </View>
                        </View>
                        <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
                            <Text> 0 / 14</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={{ maxHeight: RFValue(50), display: "flex", flexDirection: 'row', backgroundColor: "#fff", borderRadius: 5, marginVertical: RFValue(5), elevation: 10,shadowColor:'#111', shadowOffset: { width: 0, height:10}, shadowOpacity: 0.2, shadowRadius:10 }}>
                        <View style={{ flex: 1 }}>
                            <Image style={{ height: "100%", width: '100%' }} resizeMode='contain' source={require('../../../assets/images/curriculum/family.png')} />
                        </View>
                        <View style={{ flex: 2, flexDirection: "column", justifyContent: 'center' }}>
                            <Text>Family</Text>
                            <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: "center" }}>
                                <Text category='h6' style={{ lineHeight: RFValue(30) }}> <IoIcon size={RFValue(20)} name='logo-game-controller-a' /> 10</Text>
                                <Text category='h6' style={{ lineHeight: RFValue(30) }}> <IoIcon size={RFValue(20)} name='ios-mic' /> 10</Text>
                                <Text category='h6' style={{ lineHeight: RFValue(30) }}> <IoIcon size={RFValue(20)} name='ios-create' /> 10</Text>
                            </View>
                        </View>
                        <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
                            <Text> 0 / 14</Text>
                        </View>
                    </TouchableOpacity>
                </Anim.View>
            }


        </View>
    )
}

const Curriculum = (props) => {
    const history = useHistory();
    return (
        <>
            <Route exact path={RouteURL.parent_curriculum} render={() =>
                <>
                    <Layout>
                        <StatusBar barStyle='dark-content' backgroundColor='rgb(229, 103, 85)' />
                        <Navigationbar colors={['rgb(229, 103, 85)', 'rgb(219, 23, 110)']}
                            leftComponent={<Navigationbar.Item icon={<AntIcon color='white' name='left' />} onPress={() => history.replace(RouteURL.parent_home)} />}
                            centerComponent={<Navigationbar.Item title='Curriculum' textStyle={{ color: 'white' }} />}
                        />
                        <ScrollView>
                            {
                                units.map((unit, idx) => (
                                    <Unit key={idx} id={idx} {...unit} />
                                ))
                            }
                        </ScrollView>

                    </Layout>
                    <BottomNav navigationItems={[
                        {
                            icon: <Entypo style={{ fontSize: RFValue(20) }} name='home' />,
                            onPress: () => { history.replace(RouteURL.parent_home) }
                        },
                        {
                            icon: <FAIcon style={{ fontSize: RFValue(20) }} name='book' />,
                            active: true,
                        },
                        {
                            icon: <MatIcon style={{ fontSize: RFValue(20) }} name='child-care' />,
                            onPress: () => { history.replace(RouteURL.child_home) }
                        },
                        {
                            icon: <FAIcon style={{ fontSize: RFValue(20) }} name='user' />,
                            onPress: () => { history.replace(RouteURL.parent_profile) }

                        }
                    ]}></BottomNav>
                </>

            }>
            </Route>
            <Route exact path={RouteURL.parent_curriculum + '/colors'} component={Colors} />
        </>
    )
}

export default Curriculum;
