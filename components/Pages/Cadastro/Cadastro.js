import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, StatusBar, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons';
import { styles } from './styles'
import { defaultStyle } from '../../../assets/style/style';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import basketBall from '../../../assets/bolaBasquete.png';
import soccerBall from '../../../assets/bolaFutebol.png';
import { CreateUserContext } from '../../../contexts/createUser';

export default function Cadastro({ navigation }) {
  const { setNickname, setBirthday, setPhoneNumber } = useContext(CreateUserContext)
  let phoneNumber = ['', '']
  let birthday = ['', '', '']
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [phoneNumberInput, setPhoneNumberInput] = useState('')
  const [ddd, setDDD] = useState('')

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SafeAreaView>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
          <StatusBar />
          <Text style={defaultStyle.title}>Imovim</Text>

          <Image
            style={defaultStyle.basketBall}
            source={basketBall}
          />

          <Image
            style={defaultStyle.soccerBall}
            source={soccerBall}
          />

          <View style={defaultStyle.inputContainer}>
            <Text style={defaultStyle.subTitle}>Cadastro</Text>
            <Input width="90%" inputText="Nome" getInputValue={(value) => { setNickname(value) }} />

            <View style={styles.textBox}>
              <Text style={defaultStyle.defaultText}>Data de nascimento</Text>

              <TextInput
                style={styles.input}
                keyboardType='numeric'
                placeholder='dd'
                placeholderTextColor="#DCDCDC"
                textAlign="center"
                maxLength={2}
                onChangeText={(value) => { setDay(value) }}
              >
              </TextInput>

              <TextInput
                style={styles.input}
                keyboardType='numeric'
                placeholder='mm'
                placeholderTextColor="#DCDCDC"
                textAlign="center"
                maxLength={2}
                onChangeText={(value) => { setMonth(value) }}
              >
              </TextInput>

              <TextInput
                style={styles.input}
                keyboardType='numeric'
                placeholder='aaaa'
                placeholderTextColor="#DCDCDC"
                textAlign="center"
                maxLength={4}
                onChangeText={(value) => { setYear(value) }}
              >
              </TextInput>

            </View>

            <View style={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
              justifyContent: "space-around",
              width: "85%",
              marginLeft: 25,
            }}
            >
              <TextInput
                style={styles.input}
                placeholder='DDD'
                placeholderTextColor="#DCDCDC"
                textAlign="center"
                maxLength={2}
                onChangeText={(value) => { setDDD(value) }}
              >
              </TextInput>

              <TextInput
                style={styles.input}
                placeholder='Telefone'
                placeholderTextColor="#DCDCDC"
                textAlign="center"
                maxLength={9}
                onChangeText={(value) => { setPhoneNumberInput(value) }}
              >
              </TextInput>
            </View>

            <View style={styles.buttonContainer}>
              <Button buttonText="Avançar" pressFunction=
                {() => {
                  // phoneNumber.reverse();
                  // birthday.reverse()
                  setPhoneNumber(`${ddd} ${phoneNumberInput}`);
                  setBirthday(`${year}/${month}/${day}`);
                  navigation.navigate('CadastroContinuacao')
                }
                }
              />

              <Text
                style={defaultStyle.mediumText}
                onPress={() => { navigation.navigate('Login') }}
              >
                Já possui um cadastro?

                <Text
                  style={{
                    color: '#FF6709',
                    fontSize: 16,
                    fontWeight: '700',
                    paddingTop: 5
                  }}
                >
                  Login
                </Text>
              </Text>
            </View>
          </View>
          <StatusBar />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ScrollView>
  );
}