import React from 'react';
import { View, ScrollView, Image} from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize';
import NavigationBar from '../../../components/NavigationBar/NavigationBar';
import Anticon from 'react-native-vector-icons/AntDesign';
import {Text, Button } from 'react-native-ui-kitten';
import { Grid, Col, Row } from 'react-native-easy-grid';
import { useHistory } from 'react-router-native';
import Layout from '../../../components/Layout';


const ChangePlan = (props) => {
    const history = useHistory();

    return(
        <Layout>
            <NavigationBar
                leftComponent={<NavigationBar.Item icon={<Anticon name='left' />} onPress={() => history.replace(RouteURL.parent_profile)} />}
                centerComponent={<NavigationBar.Item title='Change your plan' />}
            />

            <ScrollView>
                <Text  style={{textAlign:'center'}} category='h6'>Your current plan</Text>
                <View style={{margin: RFValue(30), padding:RFValue(20), borderRadius:RFValue(20), backgroundColor:'#fff', shadowColor:'#111', shadowOffset: {width:0, height: 4}, shadowOpacity: 0.2, shadowRadius:10, elevation:10}}>
                    <Grid>
                        <Col>
                            <Image resizeMode='contain' style={{width: RFValue(80), height:RFValue(80)}} source={require('../../../assets/images/parent/profile/plan-basic.png')} />
                        </Col>
                        <Col>
                            <Text category='h6'>Basic</Text>
                            <Text style={{paddingVertical:RFValue(5)}}>1 classes / week</Text>
                            <Button status='info'>5$/Month</Button>
                        </Col>
                    </Grid>
                </View>
                <Text style={{textAlign:'center'}} category='h6'> Change your plan </Text>
                <View style={{margin: RFValue(30), marginVertical:RFValue(10), padding:RFValue(20), borderRadius:RFValue(20), backgroundColor:'#fff', shadowColor:'#111', shadowOffset: {width:0, height: 4}, shadowOpacity: 0.2, shadowRadius:10, elevation:10}}>
                    <Grid>
                        <Col>
                            <Image resizeMode='contain' style={{width: RFValue(80), height:RFValue(80)}} source={require('../../../assets/images/parent/profile/plan-deluxe.png')} />
                        </Col>
                        <Col>
                            <Text category='h6'>Deluxe</Text>
                            <Text style={{paddingVertical:RFValue(5)}}>2 classes / week</Text>
                            <Button status='warning'>10$/Month</Button>
                        </Col>
                    </Grid>
                </View>
                <View style={{margin: RFValue(30), marginVertical:RFValue(10), padding:RFValue(20), borderRadius:RFValue(20), backgroundColor:'#fff', shadowColor:'#111', shadowOffset: {width:0, height: 4}, shadowOpacity: 0.2, shadowRadius:10, elevation:10}}>
                    <Grid>
                        <Col>
                            <Image resizeMode='contain' style={{width: RFValue(80), height:RFValue(80)}} source={require('../../../assets/images/parent/profile/plan-premium.png')} />
                        </Col>
                        <Col>
                            <Text category='h6'>Premium</Text>
                            <Text style={{paddingVertical:RFValue(5)}}>5 classes / week</Text>
                            <Button status='danger'>20$/Month</Button>
                        </Col>
                    </Grid>
                </View>
                <View style={{margin: RFValue(30), marginVertical:RFValue(10), padding:RFValue(20),}}>
                    <Button>Save</Button>
                </View>
            </ScrollView>
        </Layout>
    )
}



export default ChangePlan;