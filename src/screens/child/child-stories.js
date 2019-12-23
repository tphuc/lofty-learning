import React, { useEffect } from 'react';
import { ImageBackground, Dimensions, TouchableOpacity, Image, View } from 'react-native';
import Orientation from 'react-native-orientation-locker';
import { Route, useHistory } from 'react-router-native';
import RouteURL from '../../components/RouteURL';
import NavigationBar from '../../components/NavigationBar';
import Anticon from 'react-native-vector-icons/AntDesign';
import Carousel from 'react-native-snap-carousel';
import {RFValue} from 'react-native-responsive-fontsize';
import {Row, Col, Grid} from 'react-native-easy-grid';
import {Text} from 'react-native-ui-kitten';
import StoryVideo from './Stories/StoryVideo';
import Entypo from 'react-native-vector-icons/Entypo';
import KidBackBtn from '../../components/KidBackBtn/KidBackBtn';

const stories = [
    {
        id: '213123',
        title: "Ras rhoncus ligula nec tellus maximus",
        img: require('../../assets/images/child/story/cityofstar.png'),
    },{
        id: '312322',
        title: "",
        img: require('../../assets/images/child/story/learning-animal.png'),
        new: true
    },{
        id: '512321',
        title: "Iasd sad tatus el atrsa",
        img: require('../../assets/images/child/story/ocean.png')
    }
]

const Stories = (props) => {
    const history = useHistory();
    useEffect(() => {
        Orientation.lockToLandscape();
    }, []);

    return (
        <>
            <Route exact path={RouteURL.child_stories} render={() => 
                    <>
                        <ImageBackground style={{position:'absolute', width:'100%', height:'100%'}} resizeMode='cover' source={require('../../assets/images/child/story/bg.png')} />
                        <View style={{flex:1,}}>

                            <KidBackBtn onPress={() => { history.push(RouteURL.child_home)}}  />
    
                            <Row style={{ height: 320, width: "100%", marginTop:RFValue(40) }}>
                                <Carousel 
                                    data={stories}
                                    renderItem={(item, idx) => (
                                        <TouchableOpacity key={idx} style={{ flex: 1, }} 
                                            onPress={() => { history.push(RouteURL.child_stories + '/' + item.item.id)}}>
                                            
                                            <ImageBackground style={{ width: '100%', height: '100%', opacity:0.8 }} 
                                                resizeMode='contain' 
                                                source={item.item.img}></ImageBackground>
                                            { item.item.new && <Image resizeMode='center' style={{position:"absolute", width:"20%", top:0, left:'10%', height:RFValue(80)}} source={require('../../assets/images/child/story/new.png')} />}
                                            <Text category='h5' style={{color:'#fff', position:"absolute", bottom:'20%', paddingHorizontal: '10%' }}>{item.item.title}</Text>
                                        </TouchableOpacity>
                                    )}
                                    sliderWidth={Dimensions.get('window').width}
                                    itemWidth={Dimensions.get('window').width * 0.45}
                                    itemHeight={Dimensions.get('window').height * 0.85}
                                />
                            </Row>
                        </View>
                    </>
            }/>
            {
                stories.map(item => <Route path={RouteURL.child_stories + '/' + item.id} component={StoryVideo} />)
            }
        </>
    )
}

export default Stories;