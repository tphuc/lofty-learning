import React from 'react';
import { TouchableOpacity, View, ScrollView} from 'react-native'
import Layout from '../../../components/Layout';
import NavigationBar from '../../../components/NavigationBar/NavigationBar';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { useHistory } from 'react-router-native'
import { RFValue } from 'react-native-responsive-fontsize';
import { Text } from 'react-native-ui-kitten';
import RouteURL from '../../../components/RouteURL';


const faqs = [
    {
        title: 'Aliquam eu imperdiet massa?',
        description: 'Donec ut dolor faucibus orci pretium pulvinar ac vitae sapien. Nunc sed arcu neque. Curabitur dolor nunc, ultricies sed volutpat et, molestie a sapien. Nam viverra egestas nibh, ut molestie erat auctor quis. Nunc accumsan odio et nisi aliquam condimentum. Aenean ultricies lectus lectus, luctus convallis dolor volutpat ut. Fusce non orci pellentesque libero luctus aliquam ac ac erat. Suspendisse dictum fermentum sapien. Nam bibendum ipsum vitae tellus condimentum pharetra.'
    },
    {
        title: 'Morbi volutpat elementum nibh, eu scelerisque elit porttitor a? ',
        description: 'Donec ut dolor faucibus orci pretium pulvinar ac vitae sapien. Nunc sed arcu neque. Curabitur dolor nunc, ultricies sed volutpat et, molestie a sapien. Nam viverra egestas nibh, ut molestie erat auctor quis. Nunc accumsan odio et nisi aliquam condimentum. Aenean ultricies lectus lectus, luctus convallis dolor volutpat ut. Fusce non orci pellentesque libero luctus aliquam ac ac erat. Suspendisse dictum fermentum sapien. Nam bibendum ipsum vitae tellus condimentum pharetra.',
    },
    {
        title: 'Nam tristique tristique semper?',
        description: 'Donec ut dolor faucibus orci pretium pulvinar ac vitae sapien. Nunc sed arcu neque. Curabitur dolor nunc, ultricies sed volutpat et, molestie a sapien. Nam viverra egestas nibh, ut molestie erat auctor quis. Nunc accumsan odio et nisi aliquam condimentum. Aenean ultricies lectus lectus, luctus convallis dolor volutpat ut. Fusce non orci pellentesque libero luctus aliquam ac ac erat. Suspendisse dictum fermentum sapien. Nam bibendum ipsum vitae tellus condimentum pharetra.'
    },
    {
        title: 'Cras augue dolor, suscipit a posuere sed?',
        description: 'Donec ut dolor faucibus orci pretium pulvinar ac vitae sapien. Nunc sed arcu neque. Curabitur dolor nunc, ultricies sed volutpat et, molestie a sapien. Nam viverra egestas nibh, ut molestie erat auctor quis. Nunc accumsan odio et nisi aliquam condimentum. Aenean ultricies lectus lectus, luctus convallis dolor volutpat ut. Fusce non orci pellentesque libero luctus aliquam ac ac erat. Suspendisse dictum fermentum sapien. Nam bibendum ipsum vitae tellus condimentum pharetra.'
    }
]
const FAQ = (props) => {
    const history = useHistory();
    return (
        <Layout>
            <NavigationBar 
                leftComponent={<NavigationBar.Item onPress={() => history.replace(RouteURL.parent_profile)} icon={<AntIcon name='left' />} />} 
                centerComponent={<NavigationBar.Item title='FAQ' />}
                rightComponent={<NavigationBar.Item icon={<AntIcon name='mail' /> }/>}
            />
            <ScrollView>
            {
                faqs.map((obj,idx) => <ExpandableItem title={obj.title} key={idx} description={obj.description} />)
            }
            </ScrollView>
        </Layout>
    )
}


const ExpandableItem = (props) => {
    const { title, description, ...others } = props;
    const [expand, setExpand ] = React.useState(false)
    return (
        <>
            <TouchableOpacity activeOpacity={0.8} style={{padding: RFValue(10),  display:'flex', flexDirection:'row', justifyContent:'space-between'}} onPress={() => setExpand(!expand)}>
                <View style={{flex:6}}>
                    <Text category='h6'>{title} </Text>
                </View>
                <View style={{flex:1, justifyContent:'center', alignItems:"center"}}>
                    <AntIcon size={RFValue(20)} name={ expand ? 'up' : 'down' } />
                </View>
            </TouchableOpacity>
            {expand && <View style={{padding: RFValue(10)}}>
                <Text style={{fontWeight:'200', color:'#345'}}>
                    {description}
                </Text>
            </View>
            }
        </>
    )
}



export default FAQ;