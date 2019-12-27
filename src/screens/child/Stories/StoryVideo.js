import React from 'react';
import { View, Dimensions } from 'react-native';
import Video from 'react-native-video';
import VideoPlayer from '../../../components/VideoPlayer';

const StoryVideo = (props) => {
    return (
        <>
            <VideoPlayer videoFile={require('../../../assets/video/demo.mov')}></VideoPlayer>
        </>
    )
}

export default StoryVideo;