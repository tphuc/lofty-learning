import React, { useState } from 'react';
import KidBackBtn from '../../../components/KidBackBtn/KidBackBtn';
import { ImageBackground, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Text } from 'react-native-ui-kitten'
import { RFValue } from 'react-native-responsive-fontsize';
import { useHistory } from 'react-router-native';
import LG from 'react-native-linear-gradient'


const getRandomRotate = () => {
    return rotation = 10 + (Math.random() * 20) * (Math.random() - 0.5 > 0 ? 1 : -1) 
}

const Card = (props) => {
    const { open, value, img, rotation, ...others } = props;
    return <TouchableOpacity activeOpacity={0.9} style={{ marginHorizontal:RFValue(5),  width: Dimensions.get('window').width * 0.16, borderRadius:RFValue(10), height:Dimensions.get('window').width * 0.16,  transform: [{rotate: `${rotation}deg`}], elevation: 5, shadowColor:'#aaa', shadowOffset:{width: 2, height: 2}, shadowRadius: 10, shadowOpacity:0.5 }} {...others}>
        {open ? <Image style={{width:"100%", height:"100%", borderRadius:RFValue(10)}} resizeMode='cover' source={img}/> : 
        <LG colors={['#B2FBFF', '#00C9FC']} style={{flex:1, width:"100%", height:"100%", borderRadius:RFValue(10), justifyContent:"center", alignItems:"center",}}>
            <Text category='h4'>?</Text>
        </LG> }
    </TouchableOpacity>
}

const GameMemoryCards = (props) => {
    const history = useHistory()
    const [openedCards, setOpenedCards] = React.useState([])
    const [detectedCards, setDetectedCards] = React.useState([])
    const [data, setData] = React.useState([
        {
            value: 1,
            img: {uri: 'https://i.pinimg.com/564x/49/20/c7/4920c76a9c6e3fe8a1d8a12f1c565158.jpg'},
            rotation: getRandomRotate()
        },
        {
            value: 1,
            img: {uri: 'https://i.pinimg.com/564x/49/20/c7/4920c76a9c6e3fe8a1d8a12f1c565158.jpg'},
            rotation: getRandomRotate()
        },
        {
            value: 2,
            img: {uri: 'https://i.pinimg.com/originals/ee/d3/1d/eed31d9f909127fcbb453c5d6b800ab1.png'},
            rotation: getRandomRotate()
        },
        {
            value: 2,
            img: {uri: 'https://i.pinimg.com/originals/ee/d3/1d/eed31d9f909127fcbb453c5d6b800ab1.png'},
            rotation: getRandomRotate()
    
        },
        {
            value: 3,
            img: {uri: 'https://i.pinimg.com/originals/bc/4b/eb/bc4beb5a4e09e82c0e75a09e206d21fc.png'},
            rotation: getRandomRotate()
        },
        {
            value: 3,
            img: {uri: 'https://i.pinimg.com/originals/bc/4b/eb/bc4beb5a4e09e82c0e75a09e206d21fc.png'},
            rotation: getRandomRotate()
    
        },
        {
            value: 4,
            img: {uri: 'https://cdn.thedesigninspiration.com/wp-content/uploads/2012/08/Amazing-Animal-020.png'},
            rotation: getRandomRotate()
        },
        {
            value: 4,
            img: {uri: 'https://cdn.thedesigninspiration.com/wp-content/uploads/2012/08/Amazing-Animal-020.png'},
            rotation: getRandomRotate()
    
        }
    ])

    const removedCardsByValue = (cards, cardValues) => {
        var newCards = []
        for(let i = 0; i < cards.length; i++){
            if(!cardValues.includes(cards[i].value)){
                newCards.push(cards[i])
            }
        }
        return newCards
    }

    return (
        <View style={{ flex: 1, flexDirection:'column' }}>
            <ImageBackground
                style={{ position: 'absolute', width: "100%", height: "100%", zIndex: -1 }}
                resizeMode='cover'
                source={require('../../../assets/images/child/games/game-bg.png')}
            />
            <KidBackBtn onPress={() => history.goBack()} />
            <View style={{flex:5, width:"100%", flexDirection:"row", justifyContent:"center", alignItems:"center", paddingHorizontal:'10%', paddingTop:RFValue(20), flexWrap:"wrap"}}>
                {
                    data.map((item, idx) => <Card 
                    key={idx} open={openedCards.includes(idx) || detectedCards.includes(idx)} 
                    img={item.img} 
                    value={item.value} 
                    rotation={item.rotation}
                    onPress={() => {
                        if(openedCards.length < 2){
                            const newOpenCards = [...openedCards, idx]
                            setOpenedCards(newOpenCards)
                            console.log('1', newOpenCards)
                            if(newOpenCards === 2 && data[newOpenCards[0]].value === data[newOpenCards[1]].value){
                                setDetectedCards([...detectedCards, ...newOpenCards])
                                setOpenedCards([])
                                
                            }
                        }
                        else{
                            if(openedCards.includes(idx)){
                                const newOpenCards = [...openedCards]
                                newOpenCards.splice(newOpenCards.indexOf(idx), 1)
                                setOpenedCards(newOpenCards);
                                console.log('2', newOpenCards)
                                if(newOpenCards.length === 2 && data[newOpenCards[0]].value === data[newOpenCards[1]].value){
                                    setDetectedCards([...detectedCards, ...newOpenCards]);
                                    setOpenedCards([])
                                }
                            }
                            else{
                                var newOpenCards = [...openedCards]
                                newOpenCards.shift();
                                setOpenedCards([...newOpenCards, idx])
                                newOpenCards = [...newOpenCards, idx]
                                if(newOpenCards.length === 2 && data[newOpenCards[0]].value === data[newOpenCards[1]].value){
                                    setDetectedCards([...detectedCards, ...newOpenCards]);
                                    setOpenedCards([])

                                }
                            }
                            
                        }
                    }} />)
                }
            </View>
            <View style={{flex:1, backgroundColor:"#FEE447", justifyContent:"center", alignItems:"center"}}>
                <View style={{paddingHorizontal:RFValue(50), paddingVertical:RFValue(5), backgroundColor:'#1A2946', borderRadius:RFValue(100)}}>
                    <Text category='h6' style={{color:"#fff"}}>1/12</Text>
                </View>
            </View>
        </View>
    )
}

export default GameMemoryCards;