import * as React from 'react';
import { Alert, Button, StyleSheet, TextInput} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown'

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function ExamScreen() {
  const [percent, setPercent] = React.useState("");
  const [grade, setGrade] = React.useState("");
  
  const data = [
    {value: 'A',},
    {value: 'B',},
    {value: 'C',},
    {value: 'D',},
    {value: 'F',},
  ]


  return (
    <>
    <View style={styles.container}>
      <Text style={styles.title}>Exam Grade Caculator</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text>Enter the precentage your Exam counts for:</Text>
      
      <TextInput
        style={styles.title}
        value={percent}
        placeholder="Percent"
        keyboardType="numeric"
        onChangeText={setPercent}
      />

      <Text>Enter your current grade:</Text>

      <TextInput
        style={styles.title}
        value={grade}
        placeholder="Grade"
        keyboardType="numeric"
        onChangeText={setGrade}
      />

      <Text>Select what grade you want:</Text>

      <Dropdown
      label="Grade"
      data={data}
      />

      <Button
        title="Caculate My Grade!"
        onPress={()=>Alert.alert(percent)}
      />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
