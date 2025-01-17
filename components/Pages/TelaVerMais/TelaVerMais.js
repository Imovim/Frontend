import React, { useState, useEffect, useContext } from 'react'
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import Header from '../../Header/Header';
import { styles } from './style'

import TagName from '../../VerMaisTags/VerMaisTags';
import Photo from '../../Photo/Photo';
import TagEvent from '../../VerMaisEventos/VerMaisEventos';

import { AuthContext } from '../../../contexts/auth.js';
import { getSportsPracticed as getSportsData } from '../../../services/sports'

export default function TelaVerMais({ navigation }) {
  const { id, changePosts, posts } = useContext(AuthContext)

  const [sportsPracticed, setSportsPracticed] = useState(null)
  // const [posts, setPosts] = useState(null)

  const getSportsPracticed = async () => {
    const data = await getSportsData(id)
    setSportsPracticed(data)
    console.log(data)
    return data
  }


  useEffect(() => {
    getSportsPracticed()
  }, [])

  if (!sportsPracticed || !posts) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header navigation={navigation} />

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Ver mais</Text>
        </View>

        <View style={styles.containerTags}>
          <Text style={styles.titleTags}>Tags</Text>

          <View style={styles.tags} >
            {sportsPracticed.map((i, index) => {
              console.log(i);
              return (
                <TagName key={index} nameTag={i} />
              )
            })}
          </View>
        </View>

        <View style={styles.containerPhotos}>

          <View style={styles.containerPhotoTitle}>

            <Text style={styles.titlePhotos}>Fotos</Text>
            <TouchableOpacity
              onPress={() => { navigation.navigate('Fotos') }}
            >
              <Text style={styles.seeMorePhotos}>...</Text>
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.photos} horizontal={true}>
            {posts.map((post, index) => {
              if(parseInt(index) < 3){
                return(
                  <Photo key={index} post_id={post.id} image={post.image} navigation={navigation} />
                  )
              }
            })}
            <Photo />
          </ScrollView>

        </View>

        <View style={styles.containerEvents}>

          <View style={styles.containerEventsTitle}>
            <Text style={styles.titleEvents}>Meus eventos</Text>
            <TouchableOpacity
              onPress={() => { navigation.navigate('Meus Eventos') }}
            >
              <Text style={styles.seeMoreEvents}>...</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.events}>
            <TagEvent nameEvent="Evento 0" />
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}