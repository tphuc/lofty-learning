import React from 'react';
import { View , Image} from 'react-native'; 
import NavigationBar from '../../../components/NavigationBar/NavigationBar';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { Grid, Col, Row } from 'react-native-easy-grid';
import { Text, Button } from 'react-native-ui-kitten'
import StarRating from '../../../components/StarRating';
import { useHistory} from 'react-router-native'
import RouteURL from '../../../components/RouteURL';
import Layout from '../../../components/Layout';





const RateUs = (props) => {
    const history = useHistory();
    return (
        <Layout style={{flex:1}} animation='slideInUp'>

            <NavigationBar 
                leftComponent={<NavigationBar.Item icon={<AntIcon name='left' />} onPress={() => history.replace(RouteURL.parent_profile)} />}
                centerComponent={<NavigationBar.Item title={'Rate us'} />}
            />

            <Grid>
                <Row size={4}>
                    <Image resizeMode='contain' style={{width:'100%', height:'100%'}} source={require('../../../assets/images/parent/profile/rateus-illus.png')}></Image>
                </Row>
                <Row size={1}>
                        <Text category='h6' style={{textAlign:'center', width:'100%'}}> Tap the stars to rate us </Text>
                </Row>
                <Row size={2} style={{paddingHorizontal:'15%'}}>
                    <StarRating></StarRating>
                </Row>
                <Row size={1}>
                    <View style={{flex:1, paddingHorizontal:'20%'}}>
                        <Button status='info'> Submit </Button>
                    </View>
                </Row>
                <Row size={5}></Row>
            </Grid>

        </Layout>
        
    )
}


export default RateUs;