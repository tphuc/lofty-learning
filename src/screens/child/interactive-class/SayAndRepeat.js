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
        img: require('../../../assets/images/child/interactive/apple.png'),
        id: 1,
        rightAnswer: true
    },
    {
        img: require('../../../assets/images/child/interactive/coconut.png'),
        id: 2,
    },
    {
        img: require('../../../assets/images/child/interactive/watermelon.png'),
        id: 3,
    },
    {
        img: require('../../../assets/images/child/interactive/strawberry.png'),
        id: 4
    }
]

const targetWord = 'apple';
const wavedata = [50, 10, 40, 95, 10, 24, 12, 85, 40, 32, 22, 10, 35, 53, 13, 24, 50, 14, 50, 56, 60, 50, 10, 24, 12, 85, 40, 32, 22]

const SayAndRepeat = (props) => {
    const history = useHistory();
    const dragTarget = React.useRef();
    const [targetLocation, setTargetLocation] = React.useState(null);
    const [rightPicture, setRightPicture] = React.useState(null);
    const [AttemptedList, setAttemptedList] = React.useState([]);
    const [soundDisable, setSoundDisable] = React.useState(false);
    const [voiceText, setVoiceText] = React.useState(null);
    const [soundTestStatus, setSoundTestStatus] = React.useState(null);


    const [voiceWaveData, setVoiceWaveData] = React.useState([]);
    const [voiceResultWaveData, setVoiceResultWaveData] = React.useState([]);


    useEffect(() => {
        Voice.onSpeechStart = voiceStart;
        Voice.onSpeechEnd = voiceEnd;
        Voice.onSpeechRecognized = voiceRecognized;
        Voice.onSpeechResults = voiceResult;
        setVoiceWaveData(SoundHelper.soundTextToData('apple'))
        console.log(voiceWaveData)
        setVoiceResultWaveData([])
        return () => {
            Voice.destroy().then(Voice.removeAllListeners);
        }
    }, [])

    const handleLayoutImgHolder = (e) => {
        const { width, height, x, y } = e.nativeEvent.layout;
        setTargetLocation([x + width / 2, y + height / 2])
    }

    const voiceStart = () => { console.log('voice start') }
    const voiceEnd = () => { console.log('voice end') }
    const voiceRecognized = () => { console.log('voice recognized') }
    const voiceResult = (e) => { console.log('result: ' + e.value[0]); 
        setVoiceText(e.value[0]) ;
        const similarity = SoundHelper.stringSimilarity('apple', e.value[0].toLowerCase())
        const resultWave = SoundHelper.generateDataBySimilarPercentage(voiceWaveData, similarity);

        setVoiceResultWaveData(resultWave)
    }

    const requestVoicePermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
                {
                    title: 'Cool Photo App Camera Permission',
                    message:
                        'Cool Photo App needs access to your camera ' +
                        'so you can take awesome pictures.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('You can use the camera');
            } else {
                console.log('Camera permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    }

    const _startRecognizing = async () => {

        try {
            await Voice.start('en-US');
        } catch (e) {
            console.error(e);
        }
    };

    const _stopRecognizing = async () => {
        try {
            await Voice.stop();

        } catch (e) {
            console.error(e);
        }
    };

    return (
        <Modal supportedOrientations={['landscape', 'portrait']} visible={props.visible} >
            <Anim.View style={styles.baseContainer} animation='fadeInRightBig'>
                <ImageBackground resizeMode='cover' style={{ width: "130%", height: "100%", position: "absolute", left: "-30%" }} source={require('../../../assets/images/child/interactive/paper-bg.png')} />
                <ActionButton position='left' onPress={props.onPressClose} />
                <ActionButton position='right' icon={<Entypo name='controller-next' />} />
                <View style={{ flex: 1, flexDirection: "row", paddingHorizontal: "5%" }}>
                    <View style={{ flex: 1, padding: RFValue(40), justifyContent: "center", alignItems: 'center' }}>
                        <View onLayout={handleLayoutImgHolder} style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: 'center', alignItems: "center", height: "100%", width: "100%", borderRadius: 9999, backgroundColor: '#fff', borderWidth: RFValue(20), borderColor: "#fff" }}>
                            <Image style={{ height: "100%" }} resizeMode='contain' source={rightPicture ? rightPicture : require('../../../assets/images/child/interactive/apple.png')} />
                        </View>
                    </View>
                    <View style={{ flex: 1.2, padding: RFValue(10), justifyContent: "center", alignItems: 'center' }}>
                        <View style={{ display: "flex", flexDirection: "column", width: "100%", height: '100%', justifyContent: 'center', alignItems: "stretch" }}>
                            <View style={{ flex: 1, paddingBottom:RFValue(10) }}>
                                <BarChart style={{ height: '100%', backgroundColor:"#222", padding: RFValue(15), borderRadius: RFValue(20), borderWidth: RFValue(6), borderColor:"rgb(230, 88, 56)" }} data={voiceWaveData} 
                                    svg={{ fill:"rgba(185,254,255, 0.3)"  }} 
                                    spacingInner={0.3}
                                    spacingOuter={0.8}
                                    contentInset={{ top: 0, bottom: 0, let:40 }}
                                    // animate
                                    // animationDuration={500}
                                >
                                </BarChart>
                                <BarChart style={{position:"absolute",width:"100%", height: '100%', backgroundColor:"transparent", padding: RFValue(15), borderRadius: RFValue(20), borderWidth: RFValue(6), borderColor:"rgb(230, 88, 56)" }} data={voiceResultWaveData} 
                                    svg={{ fill:"rgba(185,24,255, 0.6)"  }} 
                                    spacingInner={0.3}
                                    spacingOuter={0.8}
                                    contentInset={{ top: 0, bottom: 0, let:40 }}
                                    // animate
                                    // animationDuration={500}
                                >
                                </BarChart>
                            </View>
                            <View>
                                {/* <Text style={{textAlign:"center"}}> Incorrect !</Text> */}
                            </View>
                            <View style={{ flex: 1 }}>
                                <TouchableOpacity style={{ flex: 1 }} activeOpacity={0.6}
                                    onPressIn={_startRecognizing}
                                    onPressOut={_stopRecognizing}
                                >
                                    <Image style={{ width: "100%", height: "100%" }} resizeMode='contain' source={require('../../../assets/images/child/interactive/microphone.png')} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </Anim.View>
        </Modal>
    )
}

SayAndRepeat.propTypes = {
    options: PT.array,
    visible: PT.bool
}

SayAndRepeat.defaultProps = {
    options: [],
    visible: false
}


export default SayAndRepeat;





