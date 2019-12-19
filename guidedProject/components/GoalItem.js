import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const GoalItem = props => {

    return (
        <View style={styles.listItem}>
            <Text>{props.item}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    // topContainer: {
    //   flexDirection: 'row', 
    //   justifyContent: 'space-between', 
    //   alignItems: 'center',
    // },
    // textInput: {
    //   borderBottomColor: 'black', 
    //   borderWidth: 1, 
    //   padding: 10, 
    //   width: '70%'
    // },
    listItem: {
      padding: 10,
      backgroundColor: '#ccc',
      borderColor: 'black',
      borderWidth: 1,
      marginVertical: 5,
      
    },
    // flatList: {
    //   marginBottom: 30
    // }
  });

export default GoalItem