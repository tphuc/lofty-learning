import React from 'react';
import { View, StatusBar, ScrollView, Image, StyleSheet } from 'react-native';
import * as Anim from 'react-native-animatable';
import { Grid, Row, Col } from 'react-native-easy-grid';
import { useHistory, Route } from 'react-router-native';
import BottomNav from '../../components/BottomNav';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import MatIcon from 'react-native-vector-icons/MaterialIcons'
import { RFValue } from 'react-native-responsive-fontsize';
import { Avatar, Text, Button, ThemeProvider } from 'react-native-ui-kitten';
import Widget from '../../components/TouchWidget';
import RouteURL from '../../components/RouteURL'
import ModalContainer from '../../components/Modal';
import Orientation from 'react-native-orientation-locker';
import { TodayHomework, TeacherFeedback, Flashcard, VocalBooster, ParentInvitation  } from './home';


const styles = StyleSheet.create({
    pane:{
        shadowOffset:{  width: 0,  height: 10,  },
        shadowColor: '#111',
        shadowOpacity: 0.4,
        elevation: 20,
        margin:RFValue(10)
    }
})




const ParentHome = (props) => {
    const history = useHistory();
    React.useEffect(() => {
        Orientation.lockToPortrait()
    }, [])


    const [modalToKidArea, setModalToKidArea] = React.useState(false)
    const navigationItems = [
        {
            icon: <Entypo style={{ fontSize: RFValue(20) }} name='home' />,
            active: true,
            onPress: () => { }
        },
        {
            icon: <FAIcon style={{ fontSize: RFValue(20) }} name='book' />,
            onPress: () => { history.replace(RouteURL.parent_curriculum) }
        },
        {
            icon: <MatIcon style={{ fontSize: RFValue(20) }} name='child-care' />,
            onPress: () => { setModalToKidArea(true) }
        },
        {
            icon: <FAIcon style={{ fontSize: RFValue(20) }} name='user' />,
            onPress: () => { history.replace(RouteURL.parent_profile) }
        }
    ]
    return (
        <>
            <Route exact path={RouteURL.parent_home} render={() =>
                <>
                    <View style={{ width: "100%", height: "100%", backgroundColor: "#eee", padding: 5, paddingTop: 40, paddingBottom: 80 }}>
                        <StatusBar translucent></StatusBar>
                        <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', padding: 10, alignItems: "center" }}>
                            <Text style={{ color: '#111', }} category='h5'>Welcome, Laurie</Text>
                            <Avatar source={require('../../assets/images/edward-parent-ava.png')}></Avatar>
                        </View>
                        <ScrollView>
                            <Grid style={{ minHeight: 700, paddingVertical:30 }}>
                                <Row size={10}>
                                    <Col size={2}>
                                        <Row size={5}>
                                            <Widget style={{backgroundColor:'rgb(254, 213, 1)', borderColor: '#525048', ...styles.pane }}  >
                                                <Text style={{ paddingHorizontal: 10, color: '#fff' }} category='h5'> Today's Tips </Text>
                                                <Image style={{position:"absolute", left: '40%', width: '100%', height:"100%", opacity: 0.3}} resizeMode='contain' source={require('../../assets/images/parent/underlay-tip.png')} />
                                            </Widget>
                                            
                                        </Row>
                                        <Row size={1}>
                                            <Widget
                                                 style={{backgroundColor:'rgb(0, 193, 255)', borderColor: '#525048', ...styles.pane }}
                                                 //  widgetImg={require('../../assets/images/hw.png')} 
                                                 onPress={() => history.push(RouteURL.parent_home_homework)} >
                                                <Text style={{ padding: 10, color: '#fff' }} category='h5'>Today's Homework </Text>
                                                <Image style={{position:"absolute", left: '40%', width: '100%', height:"100%"}} resizeMode='contain' source={require('../../assets/images/parent/underlay-homework.png')} />
                                            </Widget>
                                        </Row>
                                        <Row size={1}>
                                            <Widget
                                                style={{backgroundColor:'rgb(0, 193, 255)', borderColor: '#525048', ...styles.pane }}    
                                                // widgetImg={require('../../assets/images/teacher-feedback.png')} 
                                                onPress={() => history.push(RouteURL.parent_home_feedback)}
                                                >
                                                <Text style={{ padding: 10, color: '#fff' }} category='h5'>Teacher's Feedback </Text>
                                                <Image style={{position:"absolute", left: '40%', width: '100%', height:"100%"}} resizeMode='contain' source={require('../../assets/images/parent/underlay-feedback.png')} />
                                            </Widget>
                                        </Row>
                                    </Col>

                                    <Col size={1}>
                                        <Row size={2}>
                                            <Widget 
                                                style={{backgroundColor:'rgb(0, 193, 255)', borderColor: '#525048', ...styles.pane }} 
            
                                                onPress={() => history.replace(RouteURL.parent_home_vocalbooster)}>
                                                <Text style={{ padding: 0, color: '#fff' }} category='h6'>Parent vocal (booster) </Text>
                                                <Image style={{position:"absolute", left: '40%', width: '100%', height:"100%"}} resizeMode='contain' source={require('../../assets/images/parent/underlay-vocabulary.png')} />
                                            </Widget>
                                        </Row>
                                        <Row size={2}>
                                            <Widget 
                                                style={{backgroundColor:'rgb(0, 193, 255)', borderColor: '#525048', ...styles.pane }} 
                                                // widgetImg={require('../../assets/images/custom-flashcard.png')} 
                                                onPress={() => history.push(RouteURL.parent_home_flashcard)}>
                                                <Text style={{ padding: 0, color: '#fff' }} category='h6'>Custom flashcard</Text>
                                                <Image style={{position:"absolute", left: '40%', width: '100%', height:"100%"}} resizeMode='contain' source={require('../../assets/images/parent/underlay-flashcard.png')} />
                                            </Widget>
                                        </Row>
                                        <Row size={3}>
                                            <Widget 
                                                style={{backgroundColor:'rgb(0, 193, 255)', borderColor: '#525048', ...styles.pane }} 
                                                // widgetImg={require('../../assets/images/invite-friend.png')} 
                                                onPress={() => history.replace(RouteURL.parent_home_invitation)}>
                                                <Text style={{  paddingVertical: 0, color: '#fff' }} category='h6'>Invite a friend</Text>
                                            </Widget>
                                        </Row>
                                    </Col>
                                </Row>

                                <Row size={1}>
                                    
                                </Row>

                            </Grid>
                        </ScrollView>
                    </View>
                    <ModalContainer position='bottom' visible={modalToKidArea} onPressClose={() => setModalToKidArea(false)}>
                        <View style={{ padding: 20, paddingTop: 40, }}>
                            <Text category='h5' style={{ color: '#111', textAlign: 'center' }}>You're going to the Kid Area. Are you sure?</Text>
                            <View style={{ padding: 10, }}>
                                <Button status='info' size='large' onPress={() => history.push(RouteURL.child_home)}>Open Kid Area</Button>
                            </View>
                        </View>
                    </ModalContainer>
                    <BottomNav navigationItems={navigationItems}></BottomNav>
                </>
            } />
            <Route path={RouteURL.parent_home_homework} component={TodayHomework} />
            <Route path={RouteURL.parent_home_feedback} component={TeacherFeedback} />
            <Route path={RouteURL.parent_home_flashcard} component={Flashcard}/>
            <Route path={RouteURL.parent_home_vocalbooster} component={VocalBooster} />
            <Route path={RouteURL.parent_home_invitation} component={ParentInvitation} />
        </>

    )
}

export default ParentHome;