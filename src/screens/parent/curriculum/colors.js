import React from 'react';
import { View, Image, ScrollView } from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Layout from '../../../components/Layout';
import Navigationbar from '../../../components/NavigationBar';
import { useHistory } from 'react-router-native';
import { Text } from 'react-native-ui-kitten'
import { RFValue } from 'react-native-responsive-fontsize';
import { Row, Col, Grid} from 'react-native-easy-grid';




const Colors = (props) => {
    const history = useHistory();
    return (
        <Layout animation='slideInUp'>
            <Navigationbar colors={['rgb(229, 103, 85)', 'rgb(219, 23, 110)']}
                leftComponent={<Navigationbar.Item icon={<AntIcon color='white' name='left' />} onPress={() => history.replace(RouteURL.parent_curriculum)} />}
                centerComponent={<Navigationbar.Item title='Colors' textStyle={{ color: 'white' }} />}
            />
            <View style={{display:'flex', flexDirection:'row', alignItems:'center', maxHeight: RFValue(80), elevation:8, backgroundColor:"#fff"}}>
                <View style={{flex:1}}>
                    <Image style={{width:"100%", height:"100%"}} resizeMode='contain' source={require('../../../assets/images/curriculum/color.png')}></Image>
                </View>
                <View style={{flex:3}}>
                    <Text >See what color your child will know</Text>
                </View>
            </View>

            <ScrollView>
                <View style={{padding: RFValue(10)}}>
                    <Text>Listening game</Text>
                    <Row>
                        <Col style={{maxHeight: RFValue(120)}}>
                            <Image style={{ width:'100%', height:'100%',}} resizeMode='contain' source={require('../../../assets/images/curriculum/game1.png')} />
                        </Col>
                        <Col  style={{maxHeight: RFValue(120)}}>
                            <Image style={{width:'100%',  height:'100%',}} resizeMode='contain' source={require('../../../assets/images/curriculum/game2.png')} />
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{maxHeight: RFValue(120)}}>
                            <Image style={{ width:'100%', height:'100%',}} resizeMode='contain' source={require('../../../assets/images/curriculum/game3.png')} />
                        </Col>
                        <Col  style={{maxHeight: RFValue(120)}}>
                            <Image style={{width:'100%',  height:'100%',}} resizeMode='contain' source={require('../../../assets/images/curriculum/game4.png')} />
                        </Col>
                    </Row>
                    <Text>Song and videos</Text>
                    <Row>
                        <Col style={{maxHeight: RFValue(120)}}>
                            <Image style={{ width:'100%', height:'100%',}} resizeMode='contain' source={require('../../../assets/images/curriculum/game5.png')} />
                        </Col>
                        <Col  style={{maxHeight: RFValue(120)}}>
                            <Image style={{width:'100%',  height:'100%',}} resizeMode='contain' source={require('../../../assets/images/curriculum/game6.png')} />
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{maxHeight: RFValue(120)}}>
                            <Image style={{ width:'100%', height:'100%',}} resizeMode='contain' source={require('../../../assets/images/curriculum/game7.png')} />
                        </Col>
                        <Col  style={{maxHeight: RFValue(120)}}>
                            <Image style={{width:'100%',  height:'100%',}} resizeMode='contain' source={require('../../../assets/images/curriculum/game8.png')} />
                        </Col>
                    </Row>
                </View>
            </ScrollView>

        </Layout>
    )
}


export default Colors;