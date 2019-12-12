import React from 'react';
import { ScrollView, View, TouchableOpacity, Image, Dimensions, TextInput } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize';
import NavigationBar from '../../../components/NavigationBar/NavigationBar';
import Anticon from 'react-native-vector-icons/AntDesign'
import { Grid, Col, Row } from 'react-native-easy-grid';
import { Avatar, Datepicker, Text, Input, Select, Button } from 'react-native-ui-kitten';
import Carousel from 'react-native-snap-carousel';
import RouteURL from '../../../components/RouteURL';
import { useHistory } from 'react-router-native'
import Layout from '../../../components/Layout';




const KidProfile = () => {
    const history = useHistory()
    const [date, setDate] = React.useState(new Date());
    const [selectedLevel, setSelectedLevel] = React.useState(null);
    return (
        <Layout>
            <NavigationBar
                leftComponent={<NavigationBar.Item icon={<Anticon name='left' />} onPress={() => history.replace(RouteURL.parent_profile)} />}
                centerComponent={<NavigationBar.Item title='Edit Child Profile' />}
            />
            <Grid>
                <Col>
                    <Row size={1}>
                        <Image style={{ width: "100%", height: "100%" }} resizeMode='contain' source={require('../../../assets/images/edward-avatar.png')} ></Image>
                    </Row>
                    <Row style={{ maxHeight: RFValue(100), width: "100%" }}>
                        <Carousel
                            data={[1, 2, 3, 4, 5]}
                            renderItem={(item) => (
                                <TouchableOpacity style={{ flex: 1 }}>
                                    <Image style={{ width: "100%", height: '100%' }} resizeMode='contain' source={require('../../../assets/images/edward-avatar.png')}></Image>
                                </TouchableOpacity>
                            )}
                            sliderWidth={Dimensions.get('window').width}
                            itemWidth={RFValue(60)}
                        />
                    </Row>
                    <Row size={5}>
                        <Col style={{ padding: RFValue(20) }}>
                            <Input style={{ margin: 0 }} label='Name' placeholder='Anna'></Input>
                            <Input style={{ margin: 0 }} label='Nickname' placeholder='Annabelle'></Input>
                            <Text category='s1' style={{ color: '#8f9bb3' }}> Birthday </Text>
                            <Datepicker date={date}
                                min={new Date('01/01/2000')}
                                onSelect={setDate}></Datepicker>
                            <Text category='s1' style={{ color: '#8f9bb3' }}> Level </Text>
                            <Select
                                data={[
                                    { text: '1' },
                                    { text: '2' },
                                    { text: '3' },
                                  ]}
                                placeholder='Select level'
                                selectedOption={selectedLevel}
                                onSelect={setSelectedLevel}
                            />
                            <Button size='large' status='danger' appearance='ghost' icon={(style) => <Anticon {...style} color='red' size={RFValue(18)} name='delete'></Anticon>}> Delete </Button>
                            <Button size='large' status='info'>Save</Button>
                        </Col>
                    </Row>
                </Col>
            </Grid>
        </Layout>
    )
}

export default KidProfile;