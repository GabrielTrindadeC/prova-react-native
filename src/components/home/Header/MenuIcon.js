import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
export default props => {
    return (
        <View style={styles.container}>
            <View style={styles.menuArea}>
                <TouchableOpacity style={styles.menus}>
                    <Icon name='angle-double-right' size={25} color={'#7b88c3'}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    menuArea: {
        backgroundColor: '#e7edf6',
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
})