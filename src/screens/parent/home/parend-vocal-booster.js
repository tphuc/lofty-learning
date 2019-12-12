import React from 'react';
import { View, ScrollView, ImageBackground, StatusBar, TouchableOpacity, Dimensions, Image } from 'react-native';
import { useHistory, Route } from 'react-router-native';
import RouteURL from '../../../components/RouteURL';
import Layout from '../../../components/Layout';
import AntIcon from 'react-native-vector-icons/AntDesign';

import NavigationBar from '../../../components/NavigationBar';
import { RFValue } from 'react-native-responsive-fontsize';
import { Text } from 'react-native-ui-kitten';
import { VocalBoosterPlay } from './vocal-booster';


const cards = [
    {
        img: require('../../../assets/images/parent/flashcard/weather.png'),
        title: 'Weather',
    },
    {
        img: require('../../../assets/images/parent/flashcard/music.png'),
        title: 'Music'
    },
    {
        img: require('../../../assets/images/parent/flashcard/bussiness.png'),
        title: 'Bussiness'
    },
    {
        img: require('../../../assets/images/parent/flashcard/kitchen.png'),
        title: 'Kitchen'
    },
    {
        img: require('../../../assets/images/parent/flashcard/tree.png'),
        title: 'Tree'
    },
    {
        img: require('../../../assets/images/parent/flashcard/city.png'),
        title: 'City'
    }

]

const ParentVocalBooster = (props) => {
    const history = useHistory()
    const renderCard = (option) => {
        const screenWidth = Dimensions.get('window').width
        return <TouchableOpacity activeOpacity={0.8} style={{
                width: screenWidth*0.42, height: RFValue(140), justifyContent:'center', alignItems:'center', 
                margin: screenWidth*0.02, 
                borderRadius: 20, 
                elevation:6, backgroundColor:'#fff',
                shadowColor:'#333',
                shadowOffset: {width: 0, height: 4},
                shadowOpacity: 0.2,
                shadowRadius: 10,
                padding: RFValue(40)
                
            }}

                onPress={() => { history.push(RouteURL.parent_home_vocalbooster_play) }}>
            <Image style={{ width:"100%", height:"100%"}} resizeMode='contain' source={option.img} />
            <View style={{paddingVertical: RFValue(10)}}>
                <Text>{option.title}</Text>
            </View>
        </TouchableOpacity>
    }

    return (
        <>
            <Route exact path={RouteURL.parent_home_vocalbooster} render={() => 
                <Layout>
                    <StatusBar barStyle='dark-content' backgroundColor='rgb(51, 208, 194)' />
                    <NavigationBar
                        colors={['rgb(51, 208, 194)', 'rgb(0, 154, 124)']}
                        leftComponent={<NavigationBar.Item icon={<AntIcon name='left' style={{color:'#fff'}} />} onPress={() => history.replace(RouteURL.parent_home)} />}
                        centerComponent={<NavigationBar.Item textStyle={{color:'#fff'}} title='Vocal booster' />}
                    />
                    <ScrollView>
                        <View style={{width:'100%', height:RFValue(250)}}>
                            <ImageBackground style={{width:'100%', height:'100%'}} resizeMode='cover' source={require('../../../assets/images/parent/flashcard/week-flashcard.png')} >
                                <View style={{position:"absolute", paddingLeft: '10%', paddingTop: '20%', paddingRight:'45%'}}>
                                    <Text category='h4' style={{color:'#fff'}}>This week's flash cards </Text>
                                </View>
                            </ImageBackground>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-evenly', alignItems:'center', flexWrap:'wrap'}}>
                            {cards.map(item => renderCard(item))}
                        </View>
                    </ScrollView>
                </Layout>
            }/>
            <Route path={RouteURL.parent_home_vocalbooster_play} component={VocalBoosterPlay} />
        </>
    )
}

export default ParentVocalBooster;