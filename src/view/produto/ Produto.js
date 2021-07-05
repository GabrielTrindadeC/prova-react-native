import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default props => {
    return (
        <View style={styles.container}>
            <Text>Estamos em produto</Text>
            <Button title='Home' onPress={()=> props.navigation.navigate('Home')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})