import React, { useState } from 'react';
import KidBackBtn from '../../../components/KidBackBtn/KidBackBtn';
import { ImageBackground, View, TouchableOpacity, Image } from 'react-native';
import { Text } from 'react-native-ui-kitten'
import { RFValue } from 'react-native-responsive-fontsize';
import { useHistory } from 'react-router-native';




const Card = (props) => {
    const { open, value, img, ...others } = props;
    return <TouchableOpacity activeOpacity={0.9} style={{ margin:RFValue(10), justifyContent:"center", alignItems:"center", width:RFValue(100), borderRadius:RFValue(10), height:RFValue(100), backgroundColor:"#B2FBFF", transform: [{rotate: `${10 + value*2}deg`}] }} {...others}>
        {open ? <Image style={{width:"100%", height:"100%", borderRadius:RFValue(10)}} resizeMode='cover' source={img}/> : <Text category='h4'>?</Text> }
    </TouchableOpacity>
}

const GameMemoryCards = (props) => {
    const history = useHistory()
    const [openedCards, setOpenedCards] = React.useState([])
    const [detectedCards, setDetectedCards] = React.useState([])
    const [data, setData] = React.useState([
        {
            value: 1,
            img: {uri: 'https://i.pinimg.com/564x/49/20/c7/4920c76a9c6e3fe8a1d8a12f1c565158.jpg'}
        },
        {
            value: 1,
            img: {uri: 'https://i.pinimg.com/564x/49/20/c7/4920c76a9c6e3fe8a1d8a12f1c565158.jpg'}
        },
        {
            value: 2,
            img: {uri: 'https://i.pinimg.com/originals/ee/d3/1d/eed31d9f909127fcbb453c5d6b800ab1.png'}
        },
        {
            value: 2,
            img: {uri: 'https://i.pinimg.com/originals/ee/d3/1d/eed31d9f909127fcbb453c5d6b800ab1.png'}
    
        },
        {
            value: 3,
            img: {uri: 'https://i.pinimg.com/originals/bc/4b/eb/bc4beb5a4e09e82c0e75a09e206d21fc.png'}
        },
        {
            value: 3,
            img: {uri: 'https://i.pinimg.com/originals/bc/4b/eb/bc4beb5a4e09e82c0e75a09e206d21fc.png'}
    
        },
        {
            value: 4,
            img: {uri: 'https://cdn.thedesigninspiration.com/wp-content/uploads/2012/08/Amazing-Animal-020.png'}
        },
        {
            value: 4,
            img: {uri: 'https://cdn.thedesigninspiration.com/wp-content/uploads/2012/08/Amazing-Animal-020.png'}
    
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
            <View style={{flex:5, flexDirection:"row", justifyContent:"center", alignItems:"center", padding:RFValue(30), flexWrap:"wrap"}}>
                {
                    data.map((item, idx) => <Card key={idx} open={openedCards.includes(idx) || detectedCards.includes(idx)} img={item.img} value={item.value} 
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