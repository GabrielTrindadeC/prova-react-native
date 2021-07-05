import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


export default props => {
    return (
        <View style={styles.container}>
            <Text>Free</Text>
            <View style={styles.price}>
                <Text style={styles.bigPrice}>$0</Text>
                <Text>/month</Text>
            </View>
            <Text>
                There are many variations of passages of Lorem Ipsum Avaiable
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexWrap: 'wrap',
        
    },
    price: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    bigPrice: {
        fontSize: 50
    }
})