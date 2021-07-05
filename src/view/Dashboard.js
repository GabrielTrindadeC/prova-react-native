import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Dashboard from '../components/home/Dashboard'
import Header from '../components/home/Header'
export default props => {
    return (
        <View style={styles.container}>
            <Header/>
            <View style={styles.Dashboard}>
                <Dashboard/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        paddingBottom: 50
    },
    Dashboard: {
        backgroundColor: '#eeeeee',
        marginTop: 50
    }
})