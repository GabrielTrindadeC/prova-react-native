import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-paper';


export default props => {
    return (
        <TextInput style={styles.container} 
        placeholder='Search Here...'/>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 50,
        borderRadius: 10
    }
})