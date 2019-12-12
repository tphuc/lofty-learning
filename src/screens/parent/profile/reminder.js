import React from 'react';
import { ScrollView, View, TouchableOpacity, Image, Dimensions, TextInput } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize';
import NavigationBar from '../../../components/NavigationBar/NavigationBar';
import Anticon from 'react-native-vector-icons/AntDesign'
import { Grid, Col, Row } from 'react-native-easy-grid';
import { Avatar, Datepicker, Text, Input, Select, Button, ListItem, Toggle } from 'react-native-ui-kitten';
import RouteURL from '../../../components/RouteURL';
import { useHistory } from 'react-router-native';
import Layout from '../../../components/Layout'




const EditRemider = () => {
    const history = useHistory();

    const [ notiNewClass, setNotiNewclass ] = React.useState(false);
    const [ notiTeacherFeedback, setNotiTeacherFeedback] = React.useState(false);
    const [ notiClasswork, setNotiClasswork ] = React.useState(false);
    const [ notiHomework, setNotiHomework ] = React.useState(false);

    const [ PushNoti, setPushNoti] = React.useState(false);
    const [ EmailNoti, setEmailNoti] = React.useState(false)

    return (
        <Layout>
            <NavigationBar
                leftComponent={<NavigationBar.Item icon={<Anticon name='left' />} onPress={() => history.replace(RouteURL.parent_profile)} />}
                centerComponent={<NavigationBar.Item title='Edit reminder' />}
            />
            <Grid>
                <Col>
                    <ListItem style={{backgroundColor:"rgb(245,245,245)"}} title='Limit Usage' accessory={() => <Text>90mins</Text>}></ListItem>

                    <ListItem titleStyle={{fontWeight:"400"}} title='What notifications you recieve' />
                    <ListItem style={{backgroundColor:"rgb(245,245,245)"}} title='New class available' 
                        accessory={() => <Toggle status='warning' checked={notiNewClass} onChange={(checked) => setNotiNewclass(checked)} />}></ListItem>
                    <ListItem style={{backgroundColor:"rgb(245,245,245)"}} title='Teacher feedback available' 
                        accessory={() => <Toggle status='warning' checked={notiTeacherFeedback} onChange={(c) => setNotiTeacherFeedback(c) } />}></ListItem>
                    <ListItem style={{backgroundColor:"rgb(245,245,245)"}} title='Reminder to do Classwork' 
                        accessory={() => <Toggle status='warning' checked={notiClasswork} onChange={(c) => setNotiClasswork(c)} />}></ListItem>
                    <ListItem style={{backgroundColor:"rgb(245,245,245)"}} title='Reminder to do homework' 
                        accessory={() => <Toggle status='warning' checked={notiHomework} onChange={(c) => setNotiHomework(c) }/>}></ListItem>
                    
                    <ListItem  titleStyle={{fontWeight:"400"}} title='Where you recieve notifications' />
                    <ListItem style={{backgroundColor:"rgb(245,245,245)"}} title='Push' 
                        accessory={() => <Toggle status='warning' checked={PushNoti} onChange={(c) => setPushNoti(c)} />}></ListItem>
                    <ListItem style={{backgroundColor:"rgb(245,245,245)"}} title='Email' 
                        accessory={() => <Toggle status='warning' checked={EmailNoti} onChange={(c) => setEmailNoti(c)} />}></ListItem>
                </Col>
            </Grid>
        </Layout>
    )
}

export default EditRemider;