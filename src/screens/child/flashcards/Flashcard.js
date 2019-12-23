import React from 'react';
import { TouchableOpacity, View, StyleSheet, ImageBackground, Dimensions, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { RFValue } from 'react-native-responsive-fontsize';
import { Text } from 'react-native-ui-kitten'
import NavigationBar from '../../../components/NavigationBar';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Layout from '../../../components/Layout';
import Entypo from 'react-native-vector-icons/Entypo';
import { useHistory } from 'react-router-native';
import KidBackBtn from '../../../components/KidBackBtn/KidBackBtn';

const styles = StyleSheet.create({
    card: {
        shadowColor: '#111',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 15,
    }
})

const cards = [
    {
        id: '213123',
        name: "Lemon",
        pronounce: '/ˈlemən/',
        img: require('../../../assets/images/child/flashcard/mango.png')
    }, {
        id: '312322',
        name: "Lemon",
        pronounce: '/ˈlemən/',
        img: require('../../../assets/images/child/flashcard/mango.png')
    }, {
        id: '512321',
        name: "Lemon",
        pronounce: '/ˈlemən/',
        img: require('../../../assets/images/child/flashcard/mango.png')
    },
    {
        id: '812321',
        name: "Lemon",
        pronounce: '',
        img: require('../../../assets/images/child/flashcard/mango.png')
    }
]

const Flashcard = (props) => {
    const history = useHistory();
    return (
        <>
            <KidBackBtn onPress={() => history.goBack()} />
            <ImageBackground style={{ position: 'absolute', width: '100%', height: '100%' }} source={require('../../../assets/images/child/flashcard/bg.png')} />
            <View style={{ flex: 1 , justifyContent:"center", alignItems:'center'}}>
                    <Carousel
                        layout={'tinder'}
                        layoutCardOffset='13'
                        data={cards}
                        renderItem={(item, idx) => (
                            <View 
                                key={idx} 
                                style={{ height: Dimensions.get('window').height * 0.7, marginTop:'5%', backgroundColor: '#fff',  borderRadius: RFValue(20), flexDirection: "row", ...styles.card, }}
                                // onPress={() => { history.push(RouteURL.child_stories + '/' + item.item.id) }}
                            >
                                <View style={{ flex: 1, padding:RFValue(20) }}>
                                    <Image style={{ width: '100%', height: '100%' }}
                                        resizeMode='contain'
                                        source={item.item.img}></Image>
                                </View>
                                <View style={{ flex: 1,flexDirection:'column' }}>
                                    <View style={{flex:2, justifyContent:'center', alignItems:"flex-start"  }}>
                                        <Text category='h4' style={{ paddingHorizontal: RFValue(20), textAlignVertical: 'center' }}>{item.item.name}</Text>
                                        <Text category='h6' style={{ paddingHorizontal: RFValue(20), textAlignVertical: 'center' }}>{item.item.pronounce}</Text>
                                    </View>
                                    <View style={{flex:1, padding: RFValue(10), flexDirection:'row'}}>
                                        <View style={{flex:2}} />
                                        <TouchableOpacity style={{flex:1, padding:RFValue(10)}}>
                                            <Image resizeMode='contain'  style={{height:"100%", width:"100%",}} source={require('../../../assets/images/child/flashcard/speaker.png')}/>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        )}
                        sliderWidth={Dimensions.get('window').width}
                        itemWidth={Dimensions.get('window').width * 0.65}
                        itemHeight={Dimensions.get('window').height * 0.9}
                        inactiveSlideOpacity={0.2}
                    />
    
                <Text style={{textAlign:'center', padding:RFValue(10), color:'#fff'}}> 1 / 20 </Text>
            </View>
        </>
    )
}

export default Flashcard;