import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, Image, Dimensions, Modal } from "react-native";
import { styles } from "./style";
import ProfileImage from "../../ProfileImage/ProfileImage";
import RenderImage from "../../RenderImage/RenderImage";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import Header from "../../Header/Header";
import EditPhotoModal from "../../Modals/EditPhotoModal";

let screenWidth = Dimensions.get("window").width / 100; // screen width

export default function EditPhoto(props) {

    const [visibleModal, setVisibleModal] = useState(false)

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [aspectRatio, setAspectRatio] = useState(0);

    async function getImagesSize() {
        // Use the width and height props to optimize
        await Image.getSize(props.image, (width, height) => {
            setHeight(height);
            setWidth(width);
        })

        setAspectRatio(width / height)
    }

    const ImageStyle = {
        style: [
            styles.postImage,
            props.image ?
                aspectRatio >= 1 ?
                    { height: (90 * screenWidth / aspectRatio) }
                    : { height: 450 }
                : { height: 0 }
        ]
    }

    useEffect(() => {
        // if image is empty it doesnt call function
        props.image && getImagesSize();
    })

    return (
        <View style={styles.container}>
            <Header />

            <View style={styles.postBackground}>
                <View style={styles.postContainer}>

                    <View style={styles.headerPost} >
                        <View style={styles.postProfile}>
                            <ProfileImage profileImage={props.profileImage} />

                            <View style={styles.profileContainer}>
                                <Text style={styles.profileName}>{props.nickname}</Text>
                                <Text style={styles.postDate}>{props.created_at}</Text>
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => setVisibleModal(true)}>
                                <Text style={{ fontWeight: "bold", fontSize: 20 }}>...</Text>
                            </TouchableOpacity>

                            <Modal
                                visible={visibleModal}
                                transparent={true}
                                onRequestClose={() => setVisibleModal(false)}
                            >
                                <EditPhotoModal
                                    handleClose={() => setVisibleModal(false)}
                                />
                            </Modal>

                        </View>
                    </View>


                    <RenderImage
                        style=
                        {
                            ImageStyle.style
                        }
                        url={
                            props.image ? { uri: props.image } : ''
                        }
                        id={props.id}
                    />

                    <Text style={styles.postDescription}>{props.caption}</Text>

                    <View style={styles.postInteraction}>
                        <TouchableOpacity onPress={props.likePost} style={styles.postInteractionImage}>
                            <AntDesign name="like1" size={24} color="white" />
                            <Text style={styles.interactionQuantity}>{props.likes}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => props.goToCommentScreen()} style={styles.postInteractionImage}>
                            <Ionicons name="chatbubble" size={24} color="white" />
                            <Text style={styles.interactionQuantity}>{props.comments}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.postInteractionImage}>
                            <FontAwesome name="share" size={24} color="white" />
                            <Text style={styles.interactionQuantity}>{props.updated}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}