import React, { useEffect } from 'react';
import { PermissionsAndroid } from 'react-native';
import PT from 'prop-types';
import * as Anim from 'react-native-animatable';
import { ImageBackground, StyleSheet, View, Image, Dimensions, TouchableOpacity, Modal } from 'react-native';
import ActionButton from '../../../components/ActionButton';
import Entypo from 'react-native-vector-icons/Entypo';
import { RFValue } from 'react-native-responsive-fontsize';
import { Text } from 'react-native-ui-kitten';
import Draggable from 'react-native-draggable';
import { useHistory } from 'react-router-native';
import {
    Player,
    Recorder,
    MediaStates
} from '@react-native-community/audio-toolkit';
import Voice from 'react-native-voice';
import { BarChart, Grid } from 'react-native-svg-charts'
import { SoundHelper } from '../../../helper';


const styles = StyleSheet.create({
    baseContainer: {
        // position: "absolute",
        // // backgroundColor:"rgb(255,199,100)", 
        // width: '100%', height: '100%', zIndex: 1000,
        flex: 1,
        backgroundColor: "#fff",
        position: 'relative',
    }
})

const data = [
    {
        id: 1,
        rightAnswer: true,
        audio:'https://raw.githubusercontent.com/tphuc/lofty-learning/dev/ios/src/assets/audio/apple.mp3'
    },
    {
        id: 2,
        audio:'https://raw.githubusercontent.com/tphuc/lofty-learning/dev/ios/src/assets/audio/bear.mp3'
    },
    {
        id: 3,
        audio:'https://raw.githubusercontent.com/tphuc/lofty-learning/dev/ios/src/assets/audio/bear.mp3'
    },
    {
        id: 4,
        audio:'https://raw.githubusercontent.com/tphuc/lofty-learning/dev/ios/src/assets/audio/bear.mp3'
    }
]

const targetWord = 'apple';
const wavedata = [50, 10, 40, 95, 10, 24, 12, 85, 40, 32, 22, 10, 35, 53, 13, 24, 50, 14, 50, 56, 60, 50, 10, 24, 12, 85, 40, 32, 22]

const SeeAndChoose = (props) => {
    const history = useHistory();
    const dragTarget = React.useRef();
    const [targetLocation, setTargetLocation] = React.useState(null);
    const [rightAnswer, setRightAnswer] = React.useState(null);
    const [AttemptedList, setAttemptedList] = React.useState([]);
    const [audioPlaying, setAudioPlaying] = React.useState(false)


    const [voiceWaveData, setVoiceWaveData] = React.useState([]);


    useEffect(() => {
        setVoiceWaveData(SoundHelper.soundTextToData('apple'))
    }, [])

    const handleLayoutImgHolder = (e) => {
        const { width, height, x, y } = e.nativeEvent.layout;
        setTargetLocation([x + width / 2, y + height / 2])
    }

    const playAudio = (url) => {
        if(audioPlaying) return

        setAudioPlaying(true)
        var audio = new Player(url);
        audio.play().on('ended', () => {
            setAudioPlaying(false)
        })

    }



    return (
        <Modal supportedOrientations={['landscape', 'portrait']} visible={props.visible} >
            <Anim.View style={styles.baseContainer} animation='fadeInRightBig'>
                <ImageBackground resizeMode='cover' style={{ width: "130%", height: "100%", position: "absolute", left: "-30%" }} source={require('../../../assets/images/child/interactive/paper-bg.png')} />
                <ActionButton position='left' onPress={props.onPressClose} />
                <ActionButton position='right' icon={<Entypo name='controller-next' />} />
                <View style={{ flex: 1, flexDirection: "row", paddingHorizontal: "5%" }}>
                    <View style={{ flex: 1, padding: RFValue(40), justifyContent: "center", alignItems: 'center' }}>
                        <View onLayout={handleLayoutImgHolder} style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: 'center', alignItems: "center", height: "100%", width: "100%", borderRadius: 9999, backgroundColor: '#fff', borderWidth: RFValue(0), borderColor: "#fff" }}>
                            <Image style={{ height: "100%" }} resizeMode='contain' source={require('../../../assets/images/child/interactive/apple.png')} />
                            <View style={{ position: "absolute", bottom: 0, left: 0, width: RFValue(80), height: RFValue(80) }} activeOpacity={0.8}>
                                <Image style={{ width: "100%", height: "100%" }} source={rightAnswer ? require('../../../assets/images/child/flashcard/speaker.png') : require('../../../assets/images/child/interactive/question.png')} />
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 1.2, padding: RFValue(10), justifyContent: "center", alignItems: 'center' }}>
                        <View style={{ display: "flex", flexDirection: "column", width: "100%", height: '100%', justifyContent: 'center', alignItems: "stretch" }}>
                            <View style={{ flex: 0.5 }}></View>
                            <View style={{ flex: 1.5, paddingBottom: RFValue(10) }}>
                                <BarChart style={{ height: '100%', backgroundColor: "#222", padding: RFValue(15), borderRadius: RFValue(20), borderWidth: RFValue(6), borderColor: "rgb(230, 88, 56)" }} data={voiceWaveData}
                                    svg={{ fill: "rgba(185,254,255, 0.8)" }}
                                    spacingInner={0.3}
                                    spacingOuter={0.8}
                                    contentInset={{ top: 0, bottom: 0, let: 40 }}
                                // animate
                                // animationDuration={500}
                                >
                                </BarChart>
                            </View>
                            <View style={{ flex: 0.5 }}></View>
                            <View style={{ flex: 1, flexDirection: "row" }}>
                                {
                                    data.map(item =>
                                        <View style={{ flex: 1, paddingHorizontal: RFValue(10)}}>
                                            <Image style={{  width: "100%", height: "100%", opacity: 0.3 }} resizeMode='contain' source={require('../../../assets/images/child/interactive/speaker-white.png')}></Image>
                                            <Draggable
                                                disabled={AttemptedList.includes(item.id)}
                                                shouldReverse
                                                // imageSource={item.img} 
                                                renderSize={Dimensions.get('window').width * 0.15}
                                                onLongPress={() => console.log('long press')}
                                                onShortPressRelease={() => console.log('press drag')}
                                                onPressIn={() => playAudio(item.audio)}
                                                onPressOut={() => console.log('out press')}
                                                onDragRelease={(e, gesture) => {
                                                    if (Math.abs(targetLocation[0] - gesture.moveX) + Math.abs(targetLocation[1] - gesture.moveY) <= RFValue(180)) {
                                                        if (item.rightAnswer) {
                                                            setRightAnswer(true)
                                                        }
                                                        
                                                        setAttemptedList([...AttemptedList, item.id])
                                                        
                                                    }

                                                }}
                                            >
                                                <View style={{ width:RFValue(80), height:RFValue(80), paddingHorizontal:RFValue(10),  }}>
                                                    <Image style={{  width: '100%', height: "100%", opacity: AttemptedList.includes(item.id) ? 0.5 : 1 }} resizeMode='contain'  source={require('../../../assets/images/child/interactive/speaker-white.png')} />
                                                    {
                                                        AttemptedList.includes(item.id) && !item.rightAnswer &&
                                                        <View style={{ position: "absolute", left:RFValue(10), width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }}>
                                                            <Entypo name='cross' size={RFValue(40)} color='rgb(247, 98, 94)' />
                                                        </View>
                                                    }
                                                    {
                                                        AttemptedList.includes(item.id) && item.rightAnswer && 
                                                        <View style={{ position: "absolute", left:RFValue(10), width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }}>
                                                            <Entypo name='check' size={RFValue(40)} color='rgb(94, 200, 94)' />
                                                        </View>
                                                    }
                                                </View>
                                            </Draggable>
                                            <Text category='h6' style={{textAlign:'center'}}>{item.id}</Text>
                                        </View>
                                    )
                                }
                            </View>
                            <View style={{ flex: 0.5 }}></View>

                        </View>
                    </View>
                </View>
            </Anim.View>
        </Modal>
    )
}

SeeAndChoose.propTypes = {
    options: PT.array,
    visible: PT.bool
}

SeeAndChoose.defaultProps = {
    options: [],
    visible: false
}


export default SeeAndChoose;





