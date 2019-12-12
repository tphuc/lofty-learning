import React from 'react';
import { View, TouchableOpacity, ScrollView, Image, Dimensions, StatusBar } from 'react-native';
import { useHistory, Route } from 'react-router-native';
import RouteURL from '../../../components/RouteURL';
import Layout from '../../../components/Layout';
import NavigationBar from '../../../components/NavigationBar';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { Row, Col, Grid } from 'react-native-easy-grid';
import { RFValue } from 'react-native-responsive-fontsize';
import { Text } from 'react-native-ui-kitten';
import { FlashcardCustomize } from './flashcard';

const CUSTOM = 'Custom'
const flashcards = [
    {
        collection: 'animal',
        imageHolder: require('../../../assets/images/parent/flashcard/animal.png')
    },
    {
        collection: 'fruit',
        imageHolder: require('../../../assets/images/parent/flashcard/fruit.png')
    },
    {
        collection: 'vehicle',
        imageHolder: require('../../../assets/images/parent/flashcard/vehicle.png')
    },
    {
        collection: CUSTOM,
        imageHolder: require('../../../assets/images/parent/flashcard/custom.png')
    }
]

const Flashcard = (props) => {
    const history = useHistory();

    const renderItem = (flashcard) => {
        const windowWidth = Dimensions.get('window').width
        return (
            <View style={{ position: "relative", width: windowWidth * 0.46, height: RFValue(220), margin: windowWidth * 0.02 }}>
                <Image style={{ width: "100%", height: '100%' }} resizeMode='contain' source={flashcard.imageHolder} />
                {
                    flashcard.collection !== CUSTOM ?
                        <TouchableOpacity activeOpacity={0.8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: "absolute", bottom: 0, height: RFValue(60), width: '100%', backgroundColor: 'rgba(255,255,255,0.6)', }}>
                            <Text category='h5'> {flashcard.collection} </Text>
                        </TouchableOpacity> :
                        <TouchableOpacity style={{ display: "flex", justifyContent: "center", alignItems: 'center', position: "absolute", width: "100%", height: "100%" }} onPress={() => history.replace(RouteURL.parent_home_flashcard_custom)}>
                            <AntIcon size={RFValue(30)} name='pluscircle' color='white' />
                            <Text category='h5' style={{ padding: RFValue(10), color: "#fff" }}> Custom </Text>
                        </TouchableOpacity>
                }

            </View>
        )
    };

    return (
        <>
            <Route exact path={RouteURL.parent_home_flashcard} render={() =>
                <Layout>
                    <StatusBar barStyle='dark-content' backgroundColor='rgb(79, 97, 248)' />
                    <NavigationBar
                        colors={['rgb(79, 97, 248)', 'rgb(0, 14, 128)']}
                        leftComponent={<NavigationBar.Item onPress={() => history.replace(RouteURL.parent_home)} icon={<AntIcon name='left' style={{ color: "#fff" }} />} />}
                        centerComponent={<NavigationBar.Item title='Flashcards' textStyle={{ color: '#fff' }} />}
                    />
                    <ScrollView>
                        <View style={{ display: "flex", flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center' }}>
                            {
                                flashcards.map(item => renderItem(item))
                            }
                        </View>
                    </ScrollView>
                </Layout>
            } />
            <Route path={RouteURL.parent_home_flashcard_custom} component={FlashcardCustomize} />
        </>
    )
}




export default Flashcard;