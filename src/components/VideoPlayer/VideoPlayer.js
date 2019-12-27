import React, { useState, useEffect } from 'react';
import { View, Dimensions, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Slider from '@react-native-community/slider';
import Video from 'react-native-video';
import PT from 'prop-types';
import { RFValue } from 'react-native-responsive-fontsize';
import TistoIcon from 'react-native-vector-icons/Fontisto';
import AntIcon from 'react-native-vector-icons/AntDesign';
import NavigationBar from '../NavigationBar';
import { useHistory } from 'react-router-native';
import Entypo from 'react-native-vector-icons/Entypo'
import KidBackBtn from '../KidBackBtn/KidBackBtn';
import ActionButton from '../ActionButton';



const styles = StyleSheet.create({
    controlBar: {
        position: 'absolute',
        bottom: 0,
        height: RFValue(40),
        width: "100%",
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: "rgba(0,0,0,0.2)",
        alignItems: "center",
    },
    overLay: {
        backgroundColor: "rgba(0,0,0,0.2)",
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    }
})



const VideoPlayer = (props) => {
    const { videoFile, actionButton, videoRef, videoURL } = props;
    const history = useHistory()
    const VideoRef =  videoRef || React.createRef();
    const [videoPlayRatio, setVideoPlayRatio] = useState(0); // 0 - 1
    const [videoDuration, setVideoDuration] = useState(0); // miliseconds
    const [paused, setPaused] = useState(false)

    const [userSeeking, setUserSeeking] = useState(false);

    const handleOnProgress = (e) => {
        const { currentTime, playableDuration, seekableDuration } = e;
        setVideoPlayRatio(currentTime / videoDuration)
        if(props.onProgress) props.onProgress(currentTime, videoDuration)
    }

    const handleLoad = (e) => {
        const { currentTime, duration, naturalSize } = e;
        setVideoDuration(duration);
        continute()
        if(props.onLoad) props.onLoad(duration);
    }

    const continute = () => {
        setPaused(false);
        props.onPlayStateChange(true)
    }

    const stop = () => {
        setPaused(true);
        props.onPlayStateChange(false)
    }

    useEffect(() => {
        if(props.paused){
            stop()
        }   
    })

    return (
        <>
            <Video
                progressUpdateInterval={100}
                paused={paused}
                onProgress={handleOnProgress}
                onLoad={handleLoad}
                onEnd={() => setVideoPlayRatio(1)}
                ref={VideoRef}
                resizeMode='cover'
                source={videoFile}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                }}
            />
            {
                paused &&
                <View style={styles.overLay}>
                    {actionButton ? actionButton : <ActionButton position='right' icon={<Entypo name='cross' />} onPress={() => history.goBack()} />}
                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', position: 'absolute', width: '100%', height: '100%' }} 
                        onPress={() => continute()}>
                        <Image style={{ width: RFValue(80), height: RFValue(80) }} resizeMode='contain' source={require('../../assets/images/player-btn.png')} />
                    </TouchableOpacity>
                </View>
            }


            <View style={styles.controlBar}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => { paused ? continute() : stop()}} style={{ padding: RFValue(10), paddingLeft: RFValue(20) }} >
                    {
                        paused ? <TistoIcon name='play' size={RFValue(20)} style={{ color: "#fff" }} />
                            : <TistoIcon name='pause' size={RFValue(20)} style={{ color: "#fff" }} />
                    }
                </TouchableOpacity>
                <Slider
                    value={videoPlayRatio}
                    // onValueChange={controlSeekVideo}
                    onSlidingStart={() => { setUserSeeking(true); stop() }}
                    onSlidingComplete={(val) => { setUserSeeking(false); VideoRef.current.seek(val * videoDuration, 0) }}
                    style={{ width: Dimensions.get('window').width * 0.9, height: "100%" }}
                    minimumValue={0}
                    maximumValue={1}
                    minimumTrackTintColor="rgb(72, 238, 255)"
                    maximumTrackTintColor="#fff"
                    thumbTintColor='rgb(72, 238, 255)'
                />
            </View>

        </>
    )
}


VideoPlayer.propTypes = {
    videoURL: PT.any,
    videoFile: PT.any,
    actionButton: PT.element,
    onProgress: PT.func,
    onLoad: PT.func,
    paused: PT.bool,
    videoRef: PT.any,
    onPlayStateChange: PT.func,
}

VideoPlayer.defaultProps = {
    videoFile: require('../../assets/video/demo.mov'),
    videoURL: null,
    actionButton: null,
    onProgress: () => {},
    onLoad: () => {},
    paused: false,
    videoRef: null,
    onPlayStateChange: () => {}
}

export default VideoPlayer;