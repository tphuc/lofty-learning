import React from 'react';
import { View, ScrollView, Image, Dimensions, TouchableOpacity, StatusBar } from 'react-native';
import { Route, useHistory } from 'react-router-native';
import RouteURL from '../../../../components/RouteURL';
import Layout from '../../../../components/Layout';
import { Select, Text, Input, Button } from 'react-native-ui-kitten';
import NavigationBar from '../../../../components/NavigationBar';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { RFValue } from 'react-native-responsive-fontsize';
import ModalContainer from '../../../../components/Modal';

const flashcards = [
    {
        id: 1,
        img: require('../../../../assets/images/parent/flashcard/card.png')
    },
    {
        id: 2,
        img: require('../../../../assets/images/parent/flashcard/card.png')
    },
    {
        id: 3,
        img: require('../../../../assets/images/parent/flashcard/card.png')
    },
    {
        id: 4,
        img: require('../../../../assets/images/parent/flashcard/card.png')
    },
    {
        id: 5,
        img: require('../../../../assets/images/parent/flashcard/card.png')
    },
    {
        id: 6,
        img: require('../../../../assets/images/parent/flashcard/card.png')
    },
    {
        id: 7,
        img: require('../../../../assets/images/parent/flashcard/card.png')
    },
    {
        id: 8,
        img: require('../../../../assets/images/parent/flashcard/card.png')
    },
    {
        id: 9,
        img: require('../../../../assets/images/parent/flashcard/card.png')
    },
    {
        id: 10,
        img: require('../../../../assets/images/parent/flashcard/card.png')
    },
    {
        id: 11,
        img: require('../../../../assets/images/parent/flashcard/card.png')
    },
    {
        id: 12,
        img: require('../../../../assets/images/parent/flashcard/card.png')
    }
]



const CustomFlashcard = (props) => {
    const history = useHistory();
    const [selected, setSelected] = React.useState({});
    const [selectedOption, setSelectedOption] = React.useState(null);
    const [modalSaveCollection, setModalSaveCollection] = React.useState(false)

    const renderCard = (options) => {
        const { img, id } = options;
        const screenWidth = Dimensions.get('window').width
        return <TouchableOpacity activeOpacity={0.78}
            onPress={() => setSelected({ ...selected, [id]: !selected[id] })}
            style={{
                width: screenWidth * 0.30,
                height: RFValue(180),
                backgroundColor: "#fff",
                margin: screenWidth * 0.01,
                elevation: 5,
                borderRadius: 10,
                shadowColor: '#333',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 10,
                padding: RFValue(5),
                borderWidth: selected[id] ? 3 : 0,
                borderColor: 'rgb(0,193,255)'
            }}>
            <Image style={{ width: '100%', height: '100%' }} resizeMode='contain' source={img} />
        </TouchableOpacity>
    }

    const getNumberSelection = () => {
        return Object.keys(selected).filter(k => selected[k]).length
    }

    return (
        <Layout>
            <StatusBar barStyle='dark-content' ></StatusBar>
            <NavigationBar
                colors={['rgb(0,193,255)', 'rgb(0,193,255)']}
                leftComponent={<NavigationBar.Item onPress={() => history.replace(RouteURL.parent_home_flashcard)} icon={<AntIcon name='left' style={{ color: "#fff" }} />} />}
                centerComponent={<NavigationBar.Item title='Flashcards customize' textStyle={{ color: '#fff' }} />}
            />
            <Select data={[{ text: 'all' }]} selectedOption={selectedOption} onSelect={setSelectedOption} placeholder='Select categories' />
            <View style={{ justifyContent: 'space-between', alignItems: "center", flexDirection: "row", padding: RFValue(10) }}>
                <Text> Maximum 12 cards </Text>
                <Text> {getNumberSelection()}/12 Flashcards  </Text>
            </View>
            <ScrollView>
                <View style={{ justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap' }}>
                    {
                        flashcards.map(item => renderCard(item))
                    }
                </View>
            </ScrollView>
            <View style={{ position: 'absolute', bottom: 0, height: RFValue(50), width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => setModalSaveCollection(true)}>
                    <AntIcon size={RFValue(40)}  name='pluscircle' style={{ color: getNumberSelection() ? 'rgb(79, 97, 248)' : '#aaa' }} />
                </TouchableOpacity>
            </View>
            <ModalContainer position='middle' visible={modalSaveCollection} onPressClose={() => setModalSaveCollection(false)}>
                <View style={{padding:RFValue(10), paddingTop: RFValue(30)}}>
                    <Input size='small' label='Your new collection' />
                    <View style={{flexDirection:'row', justifyContent:"center", alignItems:'center', width:"100%",}}>
                        <Button style={{flex:1, margin: RFValue(5)}} onPress={() => setModalSaveCollection(false)}>Create</Button>
                        <Button onPress={() => setModalSaveCollection(false)} appearance='outline' status='basic' style={{flex:1,  margin: RFValue(5)}}>Cancel</Button>
                    </View>
                    
                </View>
            </ModalContainer>
        </Layout>
    )
}

export default CustomFlashcard;