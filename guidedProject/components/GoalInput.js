import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'

const GoalInput = props => {
    const [text, setText] = useState('')

    const goalInputHandler = textParamValue => {
        setText(textParamValue)
      }

    const add = () => {
        if(text.length > 0) {
          props.setState([...props.state, {id: Math.random().toString(), value: text}])
          setText('')
        }
        
    
        //PrevState version:
        // props.setState(prevState => [...prevState, text])
      }

    return (
        <View style={styles.topContainer}>
            <TextInput 
                onChangeText={goalInputHandler}
                value={text}
                placeholder='Goal' 
                style={styles.textInput} 
            />
            <Button title='add' onPress={add} />
        </View>
    )
}


const styles = StyleSheet.create({
    textInput: {
        flexDirection: 'row',
        borderBottomColor: 'black', 
        borderWidth: 1, 
        padding: 10, 
        width: '70%'
    },
    topContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
    },
  });

export default GoalInput