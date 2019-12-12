import React, {useEffect} from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import Star from '../../assets/images/parent/profile/star.png';
import YellowStar from '../../assets/images/parent/profile/yellowstar.png';
import { RFValue } from 'react-native-responsive-fontsize';
import PT from 'prop-types'


const StarRating = (props) => {
    const { rating, onTapRate, ...others } = props
    const [rated, setRated] = React.useState(rating);
    

    return (
        <View style={{
            display:'flex',
            flexDirection:"row",
            justifyContent:'center',
            alignItems:'center',
            width:"100%",
            maxHeight: RFValue(80)
        }}>
            {[1,2,3,4,5].map((e, idx) => (
                <TouchableOpacity key={idx} style={{flex:1}} onPress={() => {  
                    if(!!rating) 
                        onTapRate(e);
                    else
                        setRated(e);
                }}>
                    <Image style={{height:"100%", width:"100%"}} resizeMode='contain' source={e > rated ? Star : YellowStar }></Image>
                </TouchableOpacity>
            ))}
        </View>
    )
}


StarRating.propTypes = {
    rating : PT.any,
    onTapRate : PT.func
}
StarRating.defaultProps = {
    rating: 0,
    onTapRate: () => {}
}
export default StarRating;
