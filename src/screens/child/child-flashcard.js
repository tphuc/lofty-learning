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
        title: "This week's flashcards",
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
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between" }}>
                        <TouchableOpacity style={{ padding: RFValue(10) }} onPress={() => history.push(RouteURL.child_home)}>
                            <AntIcon name='left' size={RFValue(30)} color='#fff' />
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', alignSelf: "flex-end" }}>
                            <CustomSelect data={units} selected={selectedUnit} onSelect={setSelectedUnit} placeholder='unit' />
                            <CustomSelect data={categories} selected={selectedCategory} onSelect={setSelectedCategory} placeholder='category' />
                        </View>

                    </View>
                    <View style={{ flex: 1 }}>
                        <Carousel
                            data={cards}
                            renderItem={(item, idx) => (
                                <TouchableOpacity key={idx} style={{ flex: 1 }}
                                    onPress={() => { history.push(RouteURL.child_flashcard + '/' + item.item.id)}}>
                                    <ImageBackground style={{ position: 'absolute', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
                                        resizeMode='contain'
                                        source={item.item.img}>
                                        <Text category='h5' style={{ paddingTop: '20%', paddingHorizontal: '20%' }}>{item.item.title}</Text>
                                    </ImageBackground>

                                </TouchableOpacity>
                            )}
                            sliderWidth={Dimensions.get('window').width}
                            itemWidth={Dimensions.get('window').width * 0.35}
                            itemHeight={Dimensions.get('window').height * 0.55}
                        />
                    </View>
                </>
            } />

            {cards.map(item => <Route path={RouteURL.child_flashcard + '/' + item.id} component={Flashcard} />)}
        </>
    )
}

export default ChildFlascard;