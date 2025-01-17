import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { styles } from './styles'

function Input(props)
{
  return(
    <View>
      <TextInput 
        style={styles.input} 
        value={props.value}
        placeholder={props.inputText} 
        placeholderTextColor="#DCDCDC" 
        width={props.width}
        textAlign={props.textAlign}
        onChangeText={props.getInputValue}
        maxLength={props.maxLength}
      >
      </TextInput>
    </View>
  );
}

export default Input;