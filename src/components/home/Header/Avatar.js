import React from 'react'
import { Avatar } from 'react-native-paper';

export default props => {
    return (
        <Avatar.Image size={24} 
        source={require('../../../../assets/images/profileimg.jpg')} />
    )
}

