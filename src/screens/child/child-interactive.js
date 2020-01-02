import React from 'react';
import {TouchableOpacity} from 'react-native';
import VideoPlayer from '../../components/VideoPlayer';
import ActionButton from '../../components/ActionButton';
import Entypo from 'react-native-vector-icons/Entypo';
import { useHistory } from 'react-router-native';
import ChoosePicture from './interactive-class/ChoosePicture';
import SayAndRepeat from './interactive-class/SayAndRepeat';
import SeeAndChoose from './interactive-class/SeeAndChoose';

const approximate = (value1, value2) => {
    return Math.abs(value2 - value1) <= 0.02
}

const GAMETYPES = {
    ListenNChoose: 'ListenAndChoose',
    SeeNRepeat: 'SeeNRepeat',
    SeeNChoose: 'SeeNChoose'
}

const games = [
    {
        id: 1,
        type: GAMETYPES.ListenNChoose,
        time: 0.2,
    },
    {
        id:2,
        type: GAMETYPES.SeeNRepeat,
        time: 0.5,
    },
    {
        id:3,
        type: GAMETYPES.SeeNChoose,
        time: 0.8,
    }
]

const ChildInteractive = (props) => {
    const history = useHistory();
    const [gameVisible, setGameVisible] = React.useState(false);
    const [videoPaused, setVideoPaused] = React.useState(false);
    const [timeRatio, setTimeRatio] = React.useState(0);
    const [gameIdActive, setGameIdActive ] = React.useState(null);
    const videoRef = React.createRef()
    return (
        <>
            <VideoPlayer 
                videoRef={videoRef}
                paused={videoPaused}
                actionButton={<ActionButton icon={<Entypo name='chevron-left' />} onPress={() => history.goBack()} />}
                videoFile={require('../../assets/video/bear.mov')} 
                onProgress={(time, duration) => {
                    setTimeRatio(time/duration);
                    games.map(game => {
                        if(approximate(game.time, time/duration)){
                            setGameVisible(true);
                            setVideoPaused(true);
                            setGameIdActive(game.id);
                        }
                    })
                }}
                onPlayStateChange={(state) => setVideoPaused(!state)}
            />
            {/* <ChoosePicture visible={gameVisible} onPressClose={() => { setGameVisible(false); }}/>
            <SeeAndChoose visible={gameVisible}  onPressClose={() => { setGameVisible(false); }}/> */}
            {
                games.map(game => {
                    if(game.type === GAMETYPES.ListenNChoose)
                        return <ChoosePicture  visible={gameVisible && approximate(game.time, timeRatio)}  onPressClose={() => { setGameVisible(false); }} />
                    if(game.type === GAMETYPES.SeeNRepeat)
                        return <SayAndRepeat visible={gameVisible && approximate(game.time, timeRatio)}  onPressClose={() => { setGameVisible(false); }} />
                    if(game.type === GAMETYPES.SeeNChoose)
                        return <SeeAndChoose visible={gameVisible && approximate(game.time, timeRatio)}  onPressClose={() => { setGameVisible(false); }} />
                })
            }
        </>
        
    )
}



export default ChildInteractive;