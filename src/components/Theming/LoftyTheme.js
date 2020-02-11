import { dark as DarkEvaTheme, light} from '@eva-design/eva'
import { RFValue } from 'react-native-responsive-fontsize';

export default kaktusTheme = {
    ...light,
    "color-info-default": 'rgb(0,193,255)',
    "color-warning-default": 'rgb(254, 228, 71)',
    Lightning: {
    },
    KaktusTheme: {
        Typo: {
            default: {
                fontFamily: 'Baloo-Regular',
                textAlign:'center',
            }
        },
        Gutter: {
            level_1: RFValue(10),
            level_2: RFValue(20),
            left: {
                level_1: {
                    marginLeft: RFValue(10)
                },
                level_2: {
                    marginLeft: RFValue(20)
                }
            },
            right: {
                level_1: {
                    marginLeft: RFValue(10)
                },
                level_2: {
                    marginLeft: RFValue(20)
                }
            },
            top: {
                level_1: {
                    marginTop: RFValue(10)
                },
                level_2: {
                    marginTop: RFValue(20)
                }
            },
            bottom: {
                level_1:{
                    marginTop: RFValue(10)
                },
                level_2:{
                    marginTop: RFValue(20)
                }
            },
            horizontal: {
                level_1:{
                    marginHorizontal: RFValue(10),
                },
                level_2:{
                    marginHorizontal: RFValue(20)
                }
            },
            vertical: {
                level_1:{
                    marginVertical: RFValue(10)
                },
                level_2:{
                    marginVertical: RFValue(20)
                }
            }
        }
    }
    
}