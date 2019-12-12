import React from 'react';
import { View, Image, } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize';
import NavigationBar from '../../../components/NavigationBar/NavigationBar';
import Anticon from 'react-native-vector-icons/AntDesign'
import { Grid, Col, Row } from 'react-native-easy-grid';
import {  Datepicker, Text, Input, Button } from 'react-native-ui-kitten';
import RouteURL from '../../../components/RouteURL';
import { useHistory } from 'react-router-native'
import Layout from '../../../components/Layout';




const MyAccount = () => {
    const history = useHistory()
    const [date, setDate] = React.useState(new Date());

    return (
        <Layout>
            <NavigationBar
                leftComponent={<NavigationBar.Item icon={<Anticon name='left' />} onPress={() => history.replace(RouteURL.parent_profile)} />}
                centerComponent={<NavigationBar.Item title='My Account' />}
            />
            <Grid>
                <Col>
                    <Row size={1}>
                        <Image style={{ width: "100%", height: "100%" }} resizeMode='contain' source={require('../../../assets/images/edward-parent-ava.png')} ></Image>
                    </Row>
                    <Row size={5}>
                        <Col style={{ padding: RFValue(20) }}>

                            <Input style={{ margin: 0 }} label='Name' placeholder='Joanna'></Input>
                            <Input style={{ margin: 0 }} label='Email' placeholder='JoannaKiala@gmail.com' keyboardType='email-address'></Input>
                            <Text category='s1' style={{ color: '#8f9bb3' }}>Birthday</Text>
                            <Datepicker date={date}
                                min={new Date('01/01/2000')}
                                onSelect={setDate}></Datepicker>
  
                            <Button size='large' status='danger' appearance='ghost' icon={(style) => <Anticon {...style} color='red' size={RFValue(18)} name='delete'></Anticon>}> Delete profile </Button>
                            <Button size='large' status='info'>Save</Button>
                        </Col>
                    </Row>
                </Col>
            </Grid>
        </Layout>
    )
}

export default MyAccount;