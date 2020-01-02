import React from 'react';
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
} from '@react-native-community/audio-toolkit';

const styles = StyleSheet.create({
    baseContainer: {
        // position: "absolute",
        // // backgroundColor:"rgb(255,199,100)", 
        // width: '100%', height: '100%', zIndex: 1000,
        flex: 1,
        backgroundColor: "#fff"
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

const ChoosePicture = (props) => {
    const history = useHistory();
    const dragTarget = React.useRef();
    const [targetLocation, setTargetLocation] = React.useState(null);
    const [rightPicture, setRightPicture] = React.useState(null);
    const [AttemptedList, setAttemptedList] = React.useState([]);
    const [soundDisable, setSoundDisable] = React.useState(false)

    const handleLayoutImgHolder = (e) => {
        const { width, height, x, y } = e.nativeEvent.layout;
        setTargetLocation([x + width / 2, y + height / 2])
    }

    const playAudio = () => {
       setSoundDisable(true)
       var audio = new Player('https://raw.githubusercontent.com/tphuc/lofty-learning/dev/ios/src/assets/audio/apple.mp3');
       audio.play().on('ended', () => {
           setSoundDisable(false)
       })

    }

    return (
        <Modal supportedOrientations={['landscape', 'portrait']} visible={props.visible}>
            <Anim.View style={styles.baseContainer} animation='fadeInRightBig'>
                <ImageBackground resizeMode='cover' style={{ width: "130%", height: "100%", position: "absolute", left: "-30%" }} source={require('../../../assets/images/child/interactive/paper-bg.png')} />
                <ActionButton position='left' onPress={props.onPressClose} />
                <ActionButton position='right' icon={<Entypo name='controller-next' />} />
                <View style={{ flex: 1, flexDirection: "row", paddingHorizontal: "5%" }}>
                    <View style={{ flex: 1, padding: RFValue(40), justifyContent: "center", alignItems: 'center' }}>
                        <View onLayout={handleLayoutImgHolder} style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: 'center', alignItems: "center", height: "100%", width: "100%", borderRadius: 9999, backgroundColor: 'rgb(121,65,0)', borderWidth: RFValue(20), borderColor: "#fff" }}>
                            <Image style={{ height: "100%" }} resizeMode='contain' source={rightPicture ? rightPicture : require('../../../assets/images/child/interactive/question.png')} />
                            <TouchableOpacity disabled={soundDisable} style={{ position: "absolute", bottom: 0, left: 10, width: RFValue(80), height: RFValue(80) }} activeOpacity={0.8} onPress={() => playAudio()}>
                                <Image style={{ width: "100%", height: "100%" }} source={require('../../../assets/images/child/flashcard/speaker.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flex: 1.2, padding: RFValue(10), justifyContent: "center", alignItems: 'center' }}>
                        <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: 'center', alignItems: "center" }}>
                            {
                                data.map(item =>
                                    <View style={{ width: Dimensions.get('window').width * 0.15, height: Dimensions.get('window').width * 0.15, backgroundColor: "#fff", margin: RFValue(10), borderRadius: 999 }}>
                                        <Image style={{ width: "100%", height: "100%", opacity: 0.3 }} resizeMode='contain' source={item.img}></Image>
                                        <Draggable
                                            disabled={AttemptedList.includes(item.id)}
                                            shouldReverse
                                            // imageSource={item.img} 
                                            renderSize={Dimensions.get('window').width * 0.15}
                                            onLongPress={() => console.log('long press')}
                                            onShortPressRelease={() => console.log('press drag')}
                                            onPressIn={() => console.log('in press')}
                                            onPressOut={() => console.log('out press')}
                                            onDragRelease={(e, gesture) => {
                                                if (Math.abs(targetLocation[0] - gesture.moveX) + Math.abs(targetLocation[1] - gesture.moveY) <= RFValue(180)) {
                                                    if (item.rightAnswer) {
                                                        setRightPicture(item.img)
                                                    }
                                                    setAttemptedList([...AttemptedList, item.id])
                                                }

                                            }}
                                        >
                                            <View style={{ width: Dimensions.get('window').width * 0.15, height: Dimensions.get('window').width * 0.15 }}>
                                                <Image style={{ width: '100%', height: "100%", opacity: AttemptedList.includes(item.id) ? 0.5 : 1 }} resizeMode='contain' source={item.img} />
                                                {
                                                    AttemptedList.includes(item.id) && !item.rightAnswer && 
                                                    <View style={{ position: "absolute", width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }}>
                                                        <Entypo name='cross' size={RFValue(40)} color='rgb(247, 98, 94)' />
                                                    </View>
                                                }
                                                {
                                                    AttemptedList.includes(item.id) && item.rightAnswer && 
                                                    <View style={{ position: "absolute", width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }}>
                                                        <Entypo name='check' size={RFValue(40)} color='rgb(94, 200, 94)' />
                                                    </View>
                                                }
                                            </View>
                                        </Draggable>
                                        <Text category='h6'>{item.id}</Text>
                                    </View>)
                            }
                        </View>
                    </View>
                </View>
            </Anim.View>
        </Modal>
    )
}

ChoosePicture.propTypes = {
    options: PT.array,
    visible: PT.bool
}

ChoosePicture.defaultProps = {
    options: [],
    visible: false
}


export default ChoosePicture;





