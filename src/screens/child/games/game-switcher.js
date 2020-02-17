import React from 'react';
import { View, StatusBar, ScrollView, ImageBackground, TouchableOpacity, Dimensions, Image,} from 'react-native';
import KidBackBtn from '../../../components/KidBackBtn/KidBackBtn';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import GameBoardLabel from './game-board-label';
import { useHistory, Route } from 'react-router-native';
import Carousel from 'react-native-snap-carousel';
import { Divider, Button, Text } from 'react-native-ui-kitten';
import { Grid, Row, Col } from 'react-native-easy-grid';
import Widget from '../../../components/TouchWidget';
import RouteURL from '../../../components/RouteURL';
import GameMemoryCards from './memory-cards';


const CraneGame = () => {
    const history = useHistory()
    return <GameBoardLabel>
        <Image style={{ position: "absolute", top: 0, width: RFValue(300), height: RFValue(150) }} resizeMode='contain' source={require('../../../assets/images/child/games/crane.png')} />
        <Button style={{ position: "absolute", bottom: RFValue(-20) }} size='large' status='danger'>
            Crane Game
        </Button>
    </GameBoardLabel>
}

const MemoryCard = () => {
    const history = useHistory()
    return <GameBoardLabel>
        <View style={{ display: 'flex', flexDirection: "row", flex: 1 }}>
            <View style={{ flex: 1, margin: RFPercentage(2) }}>
                <View style={{ flex: 1, backgroundColor: "rgb(254,213,1)", marginVertical: RFValue(10), marginLeft: RFValue(40), borderRadius: 10, justifyContent:"center", alignItems:'center' }}>
                    <Text category='h5' >?</Text>
                </View>
                <View style={{ flex: 1, backgroundColor: "#fff", marginVertical: RFValue(10), marginLeft: RFValue(40), borderRadius: 10 }}>
                </View>
            </View>
            <View style={{ flex: 1, margin: RFPercentage(2) }}>
                <View style={{ flex: 1, backgroundColor: "#fff", marginVertical:RFValue(10), marginRight: RFValue(40), borderRadius: 10 }}>
                </View>
                <View style={{ flex: 1, backgroundColor: "rgb(254,213,1)", marginVertical:RFValue(10), marginRight: RFValue(40), borderRadius: 10, justifyContent:"center", alignItems:'center' }}>
                <Text category='h5' >?</Text>
                </View>
            </View>
        </View>
        <Button onPress={() => history.push(RouteURL.child_games+'/memorycards')} style={{ position: "absolute", bottom: RFValue(-20) }} size='large' status='danger'>
            Memory Game
        </Button>
    </GameBoardLabel>
}

const GAMES = [
    {
        component: <CraneGame></CraneGame>
    },
    {
        component: <MemoryCard></MemoryCard>
    }
]


const GameSwitch = (props) => {
    const history = useHistory();
    return (
        <>
            <Route exact path={RouteURL.child_games}>
                <View style={{ flex: 1 }}>
                    <StatusBar translucent />
                    <KidBackBtn onPress={() => history.goBack()} />
                    <ImageBackground
                        style={{ position: 'absolute', width: "100%", height: "100%", zIndex: -1 }}
                        resizeMode='cover'
                        source={require('../../../assets/images/child/games/game-bg.png')}
                    />
                    <Divider></Divider>
                    <Carousel
                        data={GAMES}
                        renderItem={(item, idx) => (item.item.component)}
                        sliderWidth={Dimensions.get('window').width}
                        itemWidth={Dimensions.get('window').width * 0.45}
                        itemHeight={Dimensions.get('window').height * 0.2}
                    />
                    
                </View>
            </Route>
            <Route path={RouteURL.child_games + '/memorycards'} component={GameMemoryCards} />
        </>
    )
}


export default GameSwitch;
