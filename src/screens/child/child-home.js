import React from 'react';
import { StatusBar, View, ImageBackground, Image, TouchableOpacity, } from 'react-native';
import Orientation from 'react-native-orientation-locker';
import Widget from '../../components/TouchWidget';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Text } from 'react-native-ui-kitten';
import { RFValue } from 'react-native-responsive-fontsize';
import * as Anim from 'react-native-animatable';
import { Avatar } from 'react-native-ui-kitten';
import { useHistory } from 'react-router-native';
import routeURL from '../../components/RouteURL'

const Home = (props) => {

    
    const history = useHistory();
    React.useEffect(( ) => {
        Orientation.lockToLandscape();
    }, [])

    return <View style={{flex:1}}>
        <StatusBar translucent></StatusBar>
        <ImageBackground style={{position:'absolute', width:"100%", height:"100%", zIndex:-1}} resizeMode='cover' source={require('../../assets/images/bg-home.png')}></ImageBackground>
        <Grid style={{padding:10}}>
            <Row size={1} style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                <Anim.View style={{padding:10, backgroundColor:'#fff', borderRadius:900, elevation:20, shadowColor:'#111', shadowOffset: { width: 0, height:10}, shadowOpacity: 0.2, shadowRadius:20}} animation='slideInDown'>
                    <Text style={{color:"#111"}}>Good morning, kiddo!</Text>
                </Anim.View>
                <TouchableOpacity activeOpacity={0.8} onPress={() => history.push('/')} >
                    <Avatar size='medium' style={{alignItems:"flex-end"}} source={require('../../assets/images/edward-avatar.png')} />
                </TouchableOpacity>
                
            </Row>
            <Row size={5}> 
            <Col size={3} style={{paddingLeft:30}}>
                <Widget widgetImg={require('../../assets/images/yellow-widget.png')}>
                    <Grid>
                        <Row size={2} style={{display:'flex', justifyContent:"center", alignItems:"center"}}>
                            <Image style={{position:'absolute', height:'100%', width:'100%', top:0, left:0}} resizeMode='contain' source={require('../../assets/images/video-holder.png')}></Image>
                            <Image resizeMode='contain' style={{ width:100, height:100}} source={require('../../assets/images/player-btn.png')}></Image>
                        </Row>
                        <Row size={1}>
                            <Col>
                                <Text category={'h1'}>Interactive Class</Text>
                                <Text category={'h5'}>Unit 01 - Chapter 01/5</Text>
                            </Col>
                        </Row>
                    </Grid>
                </Widget>
            </Col>

            <Col size={2}>
                <Widget widgetImg={require('../../assets/images/stories.png')}>
                    <Text category='h4'> Stories </Text>
                </Widget>
                <Widget widgetImg={require('../../assets/images/games.png')}>
                    <Text category='h4'> Games </Text>
                </Widget>
            </Col>

            <Col size={1}>
                <Widget widgetImg={require('../../assets/images/flashcard.png')}>
                    <Text category='h5'>Flash Card</Text>
                </Widget>
                <Widget widgetImg={require('../../assets/images/leaders.png')}>
                    <Text category='h5'> Lofty Leaders</Text>
                </Widget>
            </Col>
            </Row>

        </Grid>
    </View>
}

export default Home;