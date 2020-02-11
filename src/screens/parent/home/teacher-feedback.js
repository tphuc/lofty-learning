import React from 'react';
import { ScrollView, View, Image, Dimensions, TouchableOpacity, StatusBar } from 'react-native';
import Layout from '../../../components/Layout';
import Navigationbar from '../../../components/NavigationBar';
import { useHistory, Route } from 'react-router-native';
import { RFValue } from 'react-native-responsive-fontsize';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { Text, Button } from 'react-native-ui-kitten';
import { Grid, Row, Col } from 'react-native-easy-grid';
import RouteURL from '../../../components/RouteURL'
import { Detail } from './feedback'

const mockupData = [
    {
        id: 1,
        name: 'Homework 1',
        date: '30/08/2019',
        video: require('../../../assets/images/parent/video1.png'),
        downloaded: true
    },
    {
        id: 2,
        name: 'Homework 2',
        date: '22/08/2019',
        video: require('../../../assets/images/parent/video2.png'),
        downloaded: false
    },
    {
        id: 3,
        name: 'Homework 3',
        date: '01/08/2019',
        video: require('../../../assets/images/parent/video3.png'),
        downloaded: true,
    },
    {
        id: 4,
        name: 'Homework 4',
        date: '01/09/2019',
        video: require('../../../assets/images/parent/video4.png'),
        downloaded: false
    }
]

const MarkPlayBtn = () => {
    return <TouchableOpacity activeOpacity={0.8} style={{ position: 'absolute', display: "flex", justifyContent: 'center', alignItems: "center", width: '100%', height: '100%' }}>
        <AntIcon size={RFValue(20)} color='#fff' name='play' />
    </TouchableOpacity>
}

const Homework = (props) => {
    const history = useHistory();
    const { name, date, video, downloaded, id } = props
    return <View>
        <Row>
            <Col style={{ height: RFValue(120) }}>
                <View>
                    <Image style={{ width: "100%", height: '100%' }} resizeMode='contain' source={video} />
                    <MarkPlayBtn />
                </View>
            </Col>
            <Col style={{ padding: 10 }}>
                <TouchableOpacity onPress={() => { history.push(RouteURL.parent_home_feedback + '/' + id); console.log(history.location.pathname)}}>
                    <Text category='h6'>{name}</Text>
                    <Text style={{ color: '#555' }}>{date}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ paddingVertical: RFValue(10) }}>
                    <Text style={{ color: downloaded ? '#aaa' : 'rgb(0,193,255)' }}> <AntIcon size={RFValue(20)} name={downloaded ? 'check' : 'download'} />{downloaded ? ' Downloaded' : ' Download'}</Text>
                </TouchableOpacity>
            </Col>
        </Row>
    </View>
}

const TeacherFeedback = (props) => {
    const history = useHistory();
    return (
        <>
            <Route exact path={RouteURL.parent_home_feedback} render={() =>
                <Layout>
                    <StatusBar barStyle='dark-content' backgroundColor='rgb(0,193,255)' />
                    <Navigationbar colors={['rgb(0,193,255)', 'rgb(0,193,255)']}
                        leftComponent={<Navigationbar.Item icon={<AntIcon color='white' name='left' />} onPress={() => history.replace(RouteURL.parent_home)} />}
                        centerComponent={<Navigationbar.Item title="Teacher's feedback" textStyle={{ color: 'white' }} />}
                    />
                    <ScrollView>
                        <View style={{ padding: RFValue(10) }}>
                            <Text category='h5'> CURRENT HOMEWORK </Text>
                            {
                                mockupData.slice(0, 1).map((item, idx) => <Homework key={idx} {...item} />)
                            }
                            <Text category='h5'> PREVIOUS HOMEWORK </Text>
                            {
                                mockupData.slice(1, mockupData.length).map((item, idx) => <Homework key={idx} {...item} />)
                            }
                        </View>
                    </ScrollView>
                </Layout>
            } />
            {
                mockupData.map((item, idx) => {
                    return <Route path={RouteURL.parent_home_feedback + '/' + item.id} render={(props) => <Detail data={item} />} />
                })
            }
        </>
    )
}
export default TeacherFeedback;