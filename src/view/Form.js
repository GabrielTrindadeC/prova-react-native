import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

import Header from '../components/home/Header'
import Input from '../components/forms/Inputs/Input'
import Button from '../components/forms/Buttons/Button'
export default props => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerArea}>
                <Header/>
            </View>
            <Text style={styles.title}>Forms</Text>
            <View style = {styles.input}>
                <Input place='Email' label='Email'/>
                <Input place='Password' label = 'Password'/>
                <Input place='1234 Main St' label = 'Address'/>
                <Input place='Apartment, studio, or floor' label = 'Address 2'/>
                <Input place='' label = 'City'/>
                <Input place='' label ='Zip'/>
            </View>
            <View style={styles.btn}>
            <Button/>
            </View>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 5
        
    },
    headerArea:{
        marginBottom: 50
    },
    title:{
        fontSize: 30,
        paddingLeft: 20,
        color: '#4755ab',
        height: 100,
        borderBottomWidth: 1
    },
    btn:{
        width: 150,
        paddingLeft: 20
    }
    
})