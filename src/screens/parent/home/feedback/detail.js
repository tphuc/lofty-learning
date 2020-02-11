import React from 'react';
import { ScrollView, View, Image, TouchableOpacity, } from 'react-native';
import Layout from '../../../../components/Layout';
import Navigationbar from '../../../../components/NavigationBar';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { useHistory } from 'react-router-native';
import RouteURL from '../../../../components/RouteURL';
import { RFValue } from 'react-native-responsive-fontsize';

const MarkPlayBtn = () => {
    return <TouchableOpacity activeOpacity={0.8} style={{ position: 'absolute', display: "flex", justifyContent: 'center', alignItems: "center", width: '100%', height: '100%' }}>
        <AntIcon size={RFValue(20)} color='#fff' name='play' />
    </TouchableOpacity>
}

const Detail = (props) => {
    const history = useHistory();
    const { data } = props
    return (
        <Layout>
            <Navigationbar colors={['rgb(0,193,255)', 'rgb(0,193,255)']}
                leftComponent={<Navigationbar.Item icon={<AntIcon style={{color:'#fff'}} name='left' onPress={() => history.push(RouteURL.parent_home_feedback) } />} />}
                centerComponent={<Navigationbar.Item textStyle={{color:'#fff'}} title={data.name} />}
            />
            <ScrollView>
                <View style={{height: RFValue(RFValue(160)), width:"100%"}}>
                    <Image style={{width:"100%", height:'100%'}} resizeMode='cover' source={data.video} />
                    <MarkPlayBtn />
                </View>
                <View style={{height: RFValue(RFValue(460)), width:"100%"}}>
                    <Image style={{width:'100%', height:'100%'}} resizeMode='contain' source={require('../../../../assets/images/paper-homework.png')} />
                </View>
            </ScrollView>
        </Layout>
    )
}

export default Detail;
