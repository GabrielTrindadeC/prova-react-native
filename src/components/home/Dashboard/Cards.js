import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default props => {
    const stylesText = [styles.main]
    if(props.grey) stylesText.push(styles.greyText)
    if(props.red) stylesText.push(styles.redText)
    if(props.green) stylesText.push(styles.greenText)
    return (
        <View style={styles.container}>
            <Icon name={props.name} size={60} color={'#e6e6e6'}/>
            <View>
                <Text style={[stylesText]}>{props.text}</Text>
                <Text style={styles.second}>{props.subtext}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 30,
        borderRadius:10,
    },
    main: {
        fontSize: 30,
        color: '#007bff'

    },
    second:{
        color: '#7f8a8e',
        alignSelf: 'flex-end'
    },
    greyText:{
        color: '#6c757d'
    },
    greenText:{
        color: '#28a745'
    },
    redText: {
        color: '#dc3545'
    }
})