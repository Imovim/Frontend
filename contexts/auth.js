import React, { createContext, useEffect, useState } from "react";
import * as SecureStore from 'expo-secure-store';
export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [id, setId] = useState();
  const [login, setLogin] = useState();
  const [nickname, setNickname] = useState();
  const [profilePicture, setProfilePicture] = useState("");
  const [image, setImage] = useState(null);
  const [anotherUser_id, setAnotherUser_id] = useState(null);
  const [chats, setChats] = useState(null);
  const [reloadChats, setReloadChats] = useState(1);
  const [chatFocusedId, setChatFocusedId] = useState(null);
  const [chatProfileImage, setChatProfileImage] = useState(null);
  const [chatNickname, setChatNickname] = useState(null);
  const [messageList, setMessageList] = useState([]);
  const [changePosts, setChangePosts] = useState(1);
  const [eventDate, setEventDate] = useState(null)
  const [eventHour, setEventHour] = useState(null)
  const [eventLocation, setEventLocation] = useState(null)
  const [eventName, setEventName] = useState(null)

  async function getUserIsLoggedIn() {
    let result = await SecureStore.getItemAsync('isUserLoggedIn');
    let user_id = await SecureStore.getItemAsync('user_id');
    let user_data = await SecureStore.getItemAsync('user_data');

    if (result == 'loggedIn') {
      setId(user_id);
      setLogin(true)
    } else {
      setLogin(false)
      setId(null)
    }
    return result
  }

  useEffect(() => {
    getUserIsLoggedIn()
  }, [login])


  return (
    <AuthContext.Provider
      value={{
        changePosts,
        setChangePosts,
        messageList,
        setMessageList,
        chatProfileImage,
        setChatProfileImage,
        chatNickname,
        setChatNickname,
        chatFocusedId,
        setChatFocusedId,
        reloadChats,
        setReloadChats,
        chats,
        setChats,
        anotherUser_id,
        setAnotherUser_id,
        login,
        setLogin,
        id,
        setId,
        nickname,
        setNickname,
        profilePicture,
        setProfilePicture,
        image,
        setImage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
