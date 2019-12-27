import React from 'react';
import {TouchableOpacity} from 'react-native';
import VideoPlayer from '../../components/VideoPlayer';
import ActionButton from '../../components/ActionButton';
import Entypo from 'react-native-vector-icons/Entypo';
import { useHistory } from 'react-router-native';
import ChoosePicture from './interactive-class/ChoosePicture';



const ChildInteractive = (props) => {
    const history = useHistory();
    const [gameVisible, setGameVisible] = React.useState(false);
    const [videoPaused, setVideoPaused] = React.useState(false);
    return (
        <>
            <VideoPlayer 
                paused={videoPaused}
                actionButton={<ActionButton icon={<Entypo name='chevron-left' />} onPress={() => history.goBack()} />}
                videoFile={require('../../assets/video/bear.mov')} 
                onProgress={(time, duration) => { 
                    if( Math.abs(duration/2 - time) <= 0.02){
                        setGameVisible(true);
                        setVideoPaused(true);
                    }
                }}
                onPlayStateChange={(state) => setVideoPaused(!state)}
            />
            <ChoosePicture visible={gameVisible} onPressClose={() => { setGameVisible(false); }}/>
        </>
        
    )
}



export default ChildInteractive;