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
    const { videoFile, videoURL } = props;
    const history = useHistory()
    const VideoRef = React.useRef();
    const [videoPlayRatio, setVideoPlayRatio] = useState(0); // 0 - 1
    const [videoDuration, setVideoDuration] = useState(0); // miliseconds
    const [paused, setPaused] = useState(false)

    const [userSeeking, setUserSeeking] = useState(false);

    const handleOnProgress = (e) => {
        const { currentTime, playableDuration, seekableDuration } = e;
        setVideoPlayRatio(currentTime / seekableDuration)
    }

    const handleLoad = (e) => {
        const { currentTime, duration, naturalSize } = e;
        setVideoDuration(duration);
        setPaused(false)
    }

    return (
        <>
            <Video
                paused={paused}
                onProgress={handleOnProgress}
                onLoad={handleLoad}
                ref={VideoRef}
                resizeMode='cover'
                source={require('../../assets/video/demo.mov')}
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
                    <NavigationBar
                        leftComponent={<NavigationBar.Item
                            onPress={() => history.goBack()}
                            textStyle={{ color: '#fff' }}
                            icon={<Entypo name='chevron-left' color='#fff' size={RFValue(40)} />}
                            text="Unit 01 - Chapter 01/5"
                        />}
                    />
                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', position: 'absolute', width: '100%', height: '100%' }} onPress={() => setPaused(false)}>
                        <Image style={{ width: RFValue(80), height: RFValue(80) }} resizeMode='contain' source={require('../../assets/images/player-btn.png')} />
                    </TouchableOpacity>
                </View>
            }


            <View style={styles.controlBar}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => setPaused(!paused)} style={{padding:RFValue(10), paddingLeft:RFValue(20)}} >
                    {
                        paused ? <TistoIcon name='play' size={RFValue(20)} style={{  color: "#fff" }} />
                            : <TistoIcon name='pause' size={RFValue(20)} style={{  color: "#fff" }} />
                    }
                </TouchableOpacity>
                <Slider
                    value={videoPlayRatio}
                    // onValueChange={controlSeekVideo}
                    onSlidingStart={() => { setUserSeeking(true); setPaused(true) }}
                    onSlidingComplete={(val) => { setUserSeeking(false); VideoRef.current.seek(val * videoDuration, 20) }}
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
    videoURL: PT.string,
    videoFile: PT.string,
}

VideoPlayer.defaultProps = {
    videoFile: '../../../assets/video/demo.mov',
    videoURL: null,
}

export default VideoPlayer;