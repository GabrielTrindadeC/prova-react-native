import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

import Cards from './Dashboard/Cards'
export default props => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.normalText}>Hi</Text>
                <Text style={styles.nameText}> Jhon</Text>
                <Text style={styles.normalText}>,Welcome back</Text>
            </View>
            <View style={styles.cards}>
                <Cards name='user' subtext='Total Users' text='29.75 M'/>
            </View>
            <View style={styles.cards}>
                <Cards name='eye' grey subtext='Daily Visitors' text='51.25 K'/>
            </View>
            <View style={styles.cards}>
                <Cards name='cloud'  green subtext='Dowloads' text='166.89 M'/>
            </View>
            <View style={styles.cards}>
                <Cards name='shopping-cart' red  subtext='Purchased' text='1,250 K'/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 20,
    },
    normalText:{
        fontSize: 24,
    },
    nameText: {
        fontSize: 24,
        color: '#007bff'
    },
    cards:{
        alignItems:'center',
        marginBottom: 20
    }

})