import React from 'react';
import { ImageBackground, TouchableOpacity } from 'react-native';
import { Grid, Col } from 'react-native-easy-grid';
import { Avatar, Text} from 'react-native-ui-kitten';
import {useHistory} from 'react-router-native';
import RouteURL from '../../components/RouteURL';
import * as Anim from 'react-native-animatable';


const SwitchAccount = () => {
    const history = useHistory()
    return <Anim.View style={{flex:1}} animation='fadeIn'>
        <ImageBackground style={{ width: "100%", height: "100%", position:'absolute' }} resizeMode='cover' source={require('../../assets/images/switch-account-bg.png')}/>
            <Grid>
                <Col style={{display:"flex", justifyContent:'center', alignItems:"center"}}>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => history.replace(RouteURL.child_home)}>
                        <Avatar style={{ width: 150, height: 150 }} resizeMode='contain' source={require('../../assets/images/edward-avatar.png')}></Avatar>
                        <Text style={{textAlign:'center', color:'#111'}} category='h5'>Edward</Text>
                    </TouchableOpacity>
                </Col>
                <Col style={{display:"flex", justifyContent:'center', alignItems:"center"}}>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => history.replace(RouteURL.parent_home)}>
                        <Avatar style={{ width: 150, height: 150 }} resizeMode='contain' source={require('../../assets/images/edward-parent-ava.png')}></Avatar>
                        <Text style={{textAlign:'center', color:'#111'}} category='h5'>Parent</Text>
                    </TouchableOpacity>
                </Col>
            </Grid>
    </Anim.View>
}

export default SwitchAccount;