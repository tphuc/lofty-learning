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
            <NavigationBar
                leftComponent={<NavigationBar.Item icon={<Entypo name='chevron-left' color='#fff' size={RFValue(30)} />} onPress={() => history.goBack() }/>}
            />
            <ImageBackground style={{ position: 'absolute', width: '100%', height: '100%' }} source={require('../../../assets/images/child/flashcard/bg.png')} />
            <View style={{ flex: 1 }}>
                <Carousel
                    layout={'tinder'}
                    layoutCardOffset={`9`}
                    data={cards}
                    renderItem={(item, idx) => (
                        <View key={idx} style={{ height: RFValue(200), backgroundColor: '#fff', ...styles.card, borderRadius: RFValue(20), flexDirection: "row" }}
                        // onPress={() => { history.push(RouteURL.child_stories + '/' + item.item.id) }}
                        >
                            <View style={{ flex: 1 }}>
                                <Image style={{ position: 'absolute', width: '100%', height: '100%' }}
                                    resizeMode='contain'
                                    source={item.item.img}></Image>
                            </View>
                            <View style={{ flex: 1,flexDirection:'column' }}>
                                <View style={{flex:2, justifyContent:'center', alignItems:"flex-start"  }}>
                                    <Text category='h4' style={{ paddingHorizontal: RFValue(20), textAlignVertical: 'center' }}>{item.item.name}</Text>
                                 <Text category='h6' style={{ paddingHorizontal: RFValue(20), textAlignVertical: 'center' }}>{item.item.pronounce}</Text>
                                </View>
                                <View style={{flex:1, padding: RFValue(10), justifyContent:'center', flexDirection:'row-reverse', alignItems:'flex-end'}}>
                                    <TouchableOpacity>
                                        <Image resizeMode='contain'  style={{height:"100%"}} source={require('../../../assets/images/child/flashcard/speaker.png')}/>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </View>
                    )}
                    sliderWidth={Dimensions.get('window').width}
                    itemWidth={Dimensions.get('window').width * 0.70}
                    itemHeight={RFValue(100)}
                />
            </View>
        </>
    )
}

export default Flashcard;