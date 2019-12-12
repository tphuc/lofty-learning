import React from 'react';
import { ScrollView, View, Image, Dimensions, TouchableOpacity, StatusBar} from 'react-native';
import Layout from '../../../components/Layout';
import Navigationbar from '../../../components/NavigationBar';
import {useHistory} from 'react-router-native';
import { RFValue } from 'react-native-responsive-fontsize';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { Text, Button } from 'react-native-ui-kitten';

const TodayHomework = (props) => {
    const history = useHistory();
    return (
        <Layout animation='fadeIn'>
            <StatusBar barStyle='dark-content' backgroundColor='rgb(233, 200, 50)' />
            <Navigationbar colors={['rgb(233, 200, 50)', 'rgb(253, 137, 127)']}
                leftComponent={<Navigationbar.Item icon={<AntIcon color='white' name='left' />} onPress={() => history.replace(RouteURL.parent_home)} />}
                centerComponent={<Navigationbar.Item title="Today's homework" textStyle={{ color: 'white' }} />}
            />
            <ScrollView>
                <View style={{ height: Dimensions.get('window').height * 0.5}}>
                    <Image style={{width:'100%', height:'100%'}} resizeMode='contain' source={require('../../../assets/images/paper-homework.png')} />
                </View>
                <View style={{padding: RFValue(20), justifyContent:'space-around', alignItems:"center", flexDirection:"row"}}>
                    <TouchableOpacity style={{padding:10, flex:1, justifyContent:"center", alignItems:'center'}}>
                        <Image style={{height:RFValue(50)}} resizeMode='contain' source={require('../../../assets/images/parent/email.png')} />
                        <Text style={{paddingVertical: RFValue(10)}}>Email me</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{padding:10, flex:1, justifyContent:"center", alignItems:'center'}}>
                        <Image style={{height:RFValue(50)}} resizeMode='contain' source={require('../../../assets/images/parent/download.png')} />
                        <Text style={{paddingVertical: RFValue(10)}}>Download</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{padding:10, flex:1, justifyContent:"center", alignItems:'center'}}>
                        <Image style={{height:RFValue(50)}} resizeMode='contain' source={require('../../../assets/images/parent/camera.png')} />
                        <Text style={{paddingVertical: RFValue(10)}}>Sample video</Text>
                    </TouchableOpacity>
                </View>
                <View style={{padding: RFValue(30)}}>
                    <Button style={{marginVertical:10}} size='large' appearance='outline' status='warning'> Scan to submit the test </Button>
                    
                    <Button size='large'  status='warning'> Upload worksheet / video </Button>
                </View>
                
            </ScrollView>
        </Layout>
    )
}
export default TodayHomework;