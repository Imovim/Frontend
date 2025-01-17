import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Image, StatusBar, Alert, TouchableOpacity, SafeAreaView, Modal, FlatList } from 'react-native';
import { styles } from './style'
import Post from '../../Post/Post';
import axios from 'axios';
import { Foundation } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { getAnotherUserData } from '../../../services/user';
import Header from '../../Header/Header.js'
import { AuthContext } from '../../../contexts/auth';
import likePost from "../../../services/post";
import { AccountDataContext } from '../../../contexts/accountData';
import Toast from 'react-native-toast-message'
import { toastConfig } from '../../Toast/toastConfig';
import { showToastSuccess } from '../../Toast/Toast';

import BlockUserModal from '../../Modals/BlockUserModal';

export default function PerfilVisãoExterna({ navigation }, props) {
    const { reloadChats, setReloadChats } = useContext(AuthContext)
    const { id } = useContext(AuthContext);
    const { setPostFocusedId } = useContext(AccountDataContext);
    const [changeIcon, setChangeIcon] = useState(false)

    const { anotherUser_id } = useContext(AuthContext)
    const [profileImage, setProfileImage] = useState()
    const [name, setName] = useState('')
    const [location, setLocation] = useState('s')
    const [currentUser, setCurrentUser] = useState()
    const [posts, setPosts] = useState()
    const [userIsFollowing, setUserIsFollowing] = useState()

    const [visibleModal, setVisibleModal] = useState(false)

    const handleChatButton = () => {
        const data = {
            user_id: id,
            friend_id: anotherUser_id
        }
        axios.post(`https://imovim-api.cyclic.app/chat/create-room`, data)
            .then(() => {
                setReloadChats(reloadChats + 1)
                navigation.navigate('Mensagens')
            })
    }

    const getUserData = async () => {
        const data = await getAnotherUserData(anotherUser_id, id)
        console.log(data)
        console.log(data.profileInfo[0].profileImage)
        setProfileImage(data.profileInfo[0].profileImage)
        setLocation(data.profileInfo[0].localization)
        setName(data.profileInfo[0].nickname)
        setUserIsFollowing(data.profileInfo[0].userIsFollowing)
        setCurrentUser(data.profileInfo[0].user_id)
        setPosts(data.userPosts)
        return data
    }

    const handleFollowUser = async () => {
        const data = { user_id: currentUser, follower_id: id }
        await axios.post(`https://imovim-api.cyclic.app/user/follow`, data)
            .then((res) => {
                getUserData()
                showToastSuccess(`${res.data.msg} ${name}!`, "")
            })
    }

    useEffect(() => {
        getUserData()
    }, [anotherUser_id])

    if (anotherUser_id !== currentUser) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        )
    }

    function handleClick() {
        handleChatButton();
        // navigation.navigate("Chat");
    }

    const handleModalVisible = () => {
        setVisibleModal(!visibleModal)
    }

    return (
        <FlatList style={styles.container}
            data={posts}
            renderItem={({ item }) => (
                <Post
                    goToCommentScreen={() => {
                        setPostFocusedId(item.id);
                        navigation.navigate("Comentarios");
                    }}
                    likePost={async () => {
                        await likePost(id, item.id);
                        await getUserData()
                    }}
                    {...item}
                />
            )}
            ListHeaderComponent={
                <SafeAreaView>
                    <Header navigation={navigation} />

                    <View style={styles.background} />

                    <View style={styles.perfil}>

                        <View style={styles.iconsContainer}>
                            {!profileImage && <View style={styles.iconCam}>
                                <Entypo name="camera" size={22} color="white" />
                            </View>}

                            {profileImage && <Image style={styles.profileImage} source={{ uri: profileImage }} />}

                            <View style={styles.addFriendContainer}>
                                <View>
                                    <TouchableOpacity
                                        style={styles.followButton}
                                        onPress={() => handleFollowUser()}
                                    >
                                        {
                                            userIsFollowing == 1 ?
                                                <View style={styles.addFriendsIcons}>
                                                    <FontAwesome5 name="user-check" size={24} color="#FFF" />
                                                    <Text style={styles.addFriendText}>Seguindo</Text>
                                                </View>
                                                :
                                                <View style={styles.addFriendsIcons} >
                                                    <Ionicons name="person-add" size={24} color="#FFF" />
                                                    <Text style={styles.addFriendText}>Seguir</Text>
                                                </View>

                                        }
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.iconsActions}>
                                    <TouchableOpacity>
                                        <Ionicons name="alert-circle" size={28} color="#F8670E" />
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={()=> setVisibleModal(true)}>
                                        <Entypo name="block" size={24} color="#F8670E" style={{ marginLeft: 8, marginRight: 8 }} />
                                    </TouchableOpacity>

                                    <View>
                                        <Modal
                                            visible={visibleModal}
                                            transparent={true}
                                            onRequestClose={() => setVisibleModal(false)}
                                        >
                                            <BlockUserModal handleClose={handleModalVisible} name={name}/>
                                        </Modal>
                                    </View>

                                    <TouchableOpacity onPress={() => handleClick()}>
                                        <Ionicons name="chatbubble" size={25} color="#F8670E" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={styles.infos}>

                            <View style={styles.data}>
                                <Text style={styles.name}>{name}</Text>
                                <Text style={styles.location}>{location}</Text>
                            </View>

                        </View>
                    </View>
                    <View style={styles.border}></View>

                    <View style={styles.tags}>
                        <Text style={styles.tagsText}>
                            #Adicione seus esportes favoritos
                        </Text>
                    </View>
                    <Toast config={toastConfig} />
                </SafeAreaView>
            }
        />

    );
}