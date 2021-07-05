import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default props => {
    return (
        <View style={styles.container}>
             <Text style={styles.title}>{props.title}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    title:{
        fontSize: 30,
        paddingLeft: 20,
        color: '#4755ab',
        height: 100,
        borderBottomWidth: 1
    }
})