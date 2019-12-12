import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { RFValue } from 'react-native-responsive-fontsize';
import NavigationBarItem from './NavigationBarItem';
import LinearGradient from 'react-native-linear-gradient';

const styles = {
    container: {
        width: '100%',
        backgroundColor: '#fff',
        diplay: 'flex',
        justifyContent: 'space-between',
        zIndex: 2,
        flexDirection: 'row',
        minHeight: RFValue(50)
    },
    barItem: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: RFValue(10),
    },
    itemLeft: {
        flex: 1
    },
    itemCenter: {
        flex: 2
    },
    itemRight: {
        flex: 1
    }
}

const NavigationBar = (props) => {
    const { leftComponent, centerComponent, rightComponent, style, ...others } = props;

    return (
        <LinearGradient 
            colors={['transparent', 'transparent']}
            style={{ ...styles.container, backgroundColor: 'transparent', ...style }} 
            {...others}
            >
            {React.cloneElement(leftComponent, {
                style: {
                    ...leftComponent.props.style,
                    flexGrow: 1,
                    flexBasis: RFValue(30)
                }
            })}
            {React.cloneElement(centerComponent, {
                style: {
                    ...leftComponent.props.style,
                    flexGrow: 3
                }
            })}
            {React.cloneElement(rightComponent, {
                style: {
                    ...rightComponent.props.style,
                    flexGrow: 1,
                    flexBasis: RFValue(30)
                }
            })}

        </LinearGradient>
        
    )
}

NavigationBar.Item = NavigationBarItem;

NavigationBar.propTypes = {
    centerComponent: PropTypes.any,
    leftComponent: PropTypes.any,
    rightComponent: PropTypes.any,
}

NavigationBar.defaultProps = {
    leftComponent: <NavigationBarItem iconFirst />,
    centerComponent: <NavigationBarItem icon={false} />,
    rightComponent: <NavigationBarItem iconFirst={false} />,
}

export default NavigationBar;