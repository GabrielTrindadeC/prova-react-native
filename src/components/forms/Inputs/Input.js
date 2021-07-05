import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

export default props => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.label}</Text>
            <TextInput placeholder={props.place} style={styles.input} />
        </View>  
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: 15
    },
    input:{
        borderWidth: 1,
        borderRadius: 3,
        width: '90%',
        height: 50,
        padding: 10,
        lineHeight: 50
    },
    text:{
        alignSelf:'flex-start',
        marginLeft: 19,
        fontSize: 20
    }
})