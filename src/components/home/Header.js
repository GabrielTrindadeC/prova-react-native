import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


import Search from './Header/Search'
import MenuIcon from './Header/MenuIcon'
import Avatar from './Header/Avatar'
export default props => {
    return (
        <View style={styles.container}>
            <MenuIcon/>
            <Search/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'relative',
        backgroundColor: 'white',
        
    }
})