import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem.js'
import GoalInput from './components/GoalInput.js'

export default function App() {

  // When dealing with "FlatList" you need to have an object with a "key" propery inside
  // If we don't have a key property, than we can select a custom propery by "keyExtractor"
  const [state, setState] = useState([])
  

  


  return (
    <View style={{padding: 30}}>
      {/* Text must be in a "Text" tag */}
      <GoalInput state={state} setState={setState} />
      {/* "FlatList" is useful for data that can grow without a limit, because it increases the performance */}
      {/* It Only renders what is required */}
      <FlatList 
        style={styles.flatList}
        data={state} 
        keyExtractor={item => item.id}
        // By defaule "each" will be an object, with "item" inside, which will have our value 
        renderItem={each => <GoalItem item={each.item.value}/>} 
      />
      {/* One of the old ways */}
      {/* <ScrollView>
        {state.map((each, i) => (
          <View key={i} style={styles.listItem}>
            <Text>{each}</Text>
          </View>
        ))}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({

});
