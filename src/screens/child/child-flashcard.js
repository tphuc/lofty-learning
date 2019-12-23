import React from 'react';
import { View, TouchableOpacity, ImageBackground, Dimensions, Image } from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { RFValue } from 'react-native-responsive-fontsize';
import { Select } from 'react-native-ui-kitten';
import CustomSelect from '../../components/CustomSelect';
import { useHistory, Route } from 'react-router-native';
import RouteURL from '../../components/RouteURL';
import Carousel from 'react-native-snap-carousel';
import { Text } from 'react-native-ui-kitten';
import Flashcard from './flashcards/Flashcard';
import KidBackBtn from '../../components/KidBackBtn/KidBackBtn';

const units = [
    { value: 1, label: 'Unit 1' },
    { value: 2, label: 'Unit 2' },
    { value: 3, label: 'Unit 3' },
];
const categories = [
    { value: 1, label: 'Animal' },
    { value: 2, label: 'Ocean' },
    { value: 3, label: 'Plants' },
];

const cards = [
    {
        id: '213123',
        title: "This \nweek's flashcards",
        img: require('../../assets/images/child/flashcard/horse.png')
    }, {
        id: '312322',
        title: "Pellentes sit amet",
        img: require('../../assets/images/child/flashcard/lion.png')
    }, {
        id: '512321',
        title: "Quisque tempus",
        img: require('../../assets/images/child/flashcard/squirrel.png')
    },
    {
        id: '812321',
        title: "Morbi nec pretium",
        img: require('../../assets/images/child/flashcard/bear.png')
    }
]

const ChildFlascard = (props) => {
    const [selectedUnit, setSelectedUnit] = React.useState(null);
    const [selectedCategory, setSelectedCategory] = React.useState(null);
    const history = useHistory()
    return (
        <>
            <Route exact path={RouteURL.child_flashcard} render={() =>
                <>
                    <ImageBackground style={{ position: 'absolute', width: '100%', height: '100%' }} source={require('../../assets/images/child/flashcard/bg.png')} />
                    <KidBackBtn onPress={() => history.goBack()} />
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", padding:RFValue(10) }}>
                        <View style={{flex:1}}></View>
                        <View style={{flex:1.5, flexDirection: 'row', alignSelf: "flex-end" }}>
                            <CustomSelect style={{width: RFValue(200)}} data={units} selected={selectedUnit} onSelect={setSelectedUnit} placeholder='Unit'  />
                            <CustomSelect style={{width: RFValue(200)}} data={categories} selected={selectedCategory} onSelect={setSelectedCategory} placeholder='Categories'  />
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Carousel

                            data={cards}
                            renderItem={(item, idx) => (
                                <TouchableOpacity key={idx} style={{ flex:1  }}
                                    onPress={() => { history.push(RouteURL.child_flashcard + '/' + item.item.id)}}>
                                    <ImageBackground style={{ position:"absolute", left:item.item.title === "This \nweek's flashcards" ? -100 : 0,  height:'100%', width:"100%", minWidth:RFValue(300), marginVertical:"5%", justifyContent: 'center', alignItems: 'center' }}
                                        resizeMode='contain'
                                        source={item.item.img}>
                                            <Text category='h5' 
                                                style={{ paddingTop: '20%', paddingHorizontal: Dimensions.get('window').width * 0.13, ...(item.item.title === "This \nweek's flashcards" ? {paddingLeft:'10%', paddingBottom:'5%', paddingRight:'50%'} : {}) }}>
                                                {item.item.title}
                                            </Text>
                                    </ImageBackground>

                                </TouchableOpacity>
                            )}
                            sliderWidth={Dimensions.get('window').width}
                            itemWidth={Dimensions.get('window').width * 0.2}
                            itemHeight={Dimensions.get('window').height * 0.35}
                            activeSlideOffset={10}
                        />
                        <View style={{justifyContent:"center", alignItems:"center",}}>
                            <Image style={{width:RFValue(60), height:RFValue(60)}} resizeMode='contain' source={require('../../assets/images/child/flashcard/swipe.png')} />
                        </View>
                    </View>
                </>
            } />

            {cards.map(item => <Route path={RouteURL.child_flashcard + '/' + item.id} component={Flashcard} />)}
        </>
    )
}

export default ChildFlascard;