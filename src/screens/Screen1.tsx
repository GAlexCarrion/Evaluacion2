import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

const Screen1 = ({ navigation }: { navigation: StackNavigationProp<any> }) => {
  return (
    
    <View style={styles.container}>
      <View style={styles.row}>
        <Button title="Imagen 1" onPress={() => navigation.navigate('Screen2')} />
        <Button title="Imagen 2" onPress={() => navigation.navigate('Screen3')} />
      </View>
      <View style={styles.row}>
        <Button title="Mayor o Igual" onPress={() => navigation.navigate('Screen4')} />
        <Button title="Menor o Igual" onPress={() => navigation.navigate('Screen5')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
});

export default Screen1;
