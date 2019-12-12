import React from 'react';
import { View, StatusBar, Image } from 'react-native';

import { Text, Avatar, ListItem } from 'react-native-ui-kitten';
import BottomNav from '../../components/BottomNav';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import { RFValue } from 'react-native-responsive-fontsize';
import { useHistory, Route } from 'react-router-native';
import * as Anim from 'react-native-animatable'
import RouteURL from '../../components/RouteURL';
import { RateUs, KidProfile, MyAccount, EditReminder, ChangePlan, FAQ } from './profile';
import Layout from '../../components/Layout'


const Profile = (props) => {
    const history = useHistory()
    return (
        <>
            <Route exact path={RouteURL.parent_profile} render={() =>
                <>
                <Layout animation='slideInLeft'>
                    <StatusBar barStyle='dark-content' backgroundColor='#fff'></StatusBar>

                    <View style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', padding: RFValue(10) }}>
                        <Text category='h4' style={{ color: "#111" }}> SETTING </Text>
                        <Avatar source={require('../../assets/images/edward-parent-ava.png')}></Avatar>
                    </View>

                    <View style={{ display: 'flex', flexDirection: 'column' }}>
                        <ListItem style={{backgroundColor:'transparent'}} onPress={() => history.replace(RouteURL.parent_profile_rateus)}>
                            <Avatar size='medium' source={require('../../assets/images/parent/profile/rateus.png')}></Avatar>
                            <Text category='h6'>Rate us</Text>
                        </ListItem>

                        <ListItem style={{backgroundColor:'transparent'}} onPress={() => history.replace(RouteURL.parent_profile_childProfile)}>
                            <Avatar size='medium' source={require('../../assets/images/parent/profile/child-profile.png')}></Avatar>
                            <Text category='h6'>Child profile</Text>
                        </ListItem>

                        <ListItem style={{backgroundColor:'transparent'}} onPress={() => history.replace(RouteURL.parent_profile_account)}>
                            <Avatar size='medium' source={require('../../assets/images/parent/profile/account.png')}></Avatar>
                            <Text category='h6'>My account</Text>
                        </ListItem>

                        <ListItem style={{backgroundColor:'transparent'}} onPress={() => history.replace(RouteURL.parent_profile_reminder)}>
                            <Avatar size='medium' source={require('../../assets/images/parent/profile/edit-reminder.png')}></Avatar>
                            <Text category='h6'>Edit reminders</Text>
                        </ListItem>
                        <ListItem style={{backgroundColor:'transparent'}} onPress={() => history.replace(RouteURL.parent_profile_faq)} >
                            <Avatar size='medium' source={require('../../assets/images/parent/profile/faq.png')}></Avatar>
                            <Text category='h6'>FAQ</Text>
                        </ListItem>
                        <ListItem style={{backgroundColor:'transparent'}} onPress={() => history.replace(RouteURL.parent_profile_plans)}>
                            <Avatar size='medium' source={require('../../assets/images/parent/profile/change-plan.png')}></Avatar>
                            <Text category='h6'>Change plan</Text>
                        </ListItem>
                        <ListItem style={{backgroundColor:'transparent'}}>
                            <Avatar size='medium' source={require('../../assets/images/parent/profile/change-lang.png')}></Avatar>
                            <Text category='h6'>Change language</Text>
                        </ListItem>
                        <ListItem style={{backgroundColor:'transparent'}}>
                            <Avatar size='medium' source={require('../../assets/images/parent/profile/exit.png')}></Avatar>
                            <Text category='h6'>Log out</Text>
                        </ListItem>
                    </View>
                </Layout>
                <BottomNav navigationItems={[
                    {
                        icon: <Entypo style={{ fontSize: RFValue(20) }} name='home' />,
                        onPress: () => { history.replace(RouteURL.parent_home) }
                    },
                    {
                        icon: <FAIcon style={{ fontSize: RFValue(20) }} name='book' />,
                        onPress: () => { history.replace(RouteURL.parent_curriculum) }
                    },
                    {
                        icon: <MatIcon style={{ fontSize: RFValue(20) }} name='child-care' />,
                        onPress: () => { history.replace(RouteURL.child_home) }
                    },
                    {
                        icon: <FAIcon style={{ fontSize: RFValue(20) }} name='user' />,
                        active: true,
                    }
                ]}></BottomNav>
                </>
            } />
            
            <Route exact path={RouteURL.parent_profile_rateus} component={RateUs}></Route>
            <Route exact path={RouteURL.parent_profile_childProfile} component={KidProfile}></Route>
            <Route exact path={RouteURL.parent_profile_account} component={MyAccount} />
            <Route exact path={RouteURL.parent_profile_reminder} component={EditReminder} />
            <Route exact path={RouteURL.parent_profile_plans} component={ChangePlan} />
            <Route exact path={RouteURL.parent_profile_faq} component={FAQ} />
        </>
    )
}

export default Profile;