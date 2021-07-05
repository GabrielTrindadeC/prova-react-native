import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

import Header from '../components/home/Header'
import Cards from '../components/Pricing/Cards'
import Title from '../components/Title'
export default props => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerArea}>
                <Header/>
            </View>
            <Title title='Pricing Tables'/>
            <Cards/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    headerArea:{
        marginBottom: 50
    },
})