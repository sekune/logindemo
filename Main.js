import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function usePosts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => {
                setPosts(data)
            })
    }, [])

    return posts
}

export default function Main({ navigation: { navigate, getParam, dangerouslyGetParent } }) {
    const posts = usePosts()
    const email = dangerouslyGetParent().getParam('email')
    function logOut() {
        Alert.alert(
            'Холболт салгах'
            , 'Та холболт салгахдаа итгэлтэй байна уу?'
            , [
                { text: 'Тийм', onPress: () => { navigate('Login') } },
                { text: 'Болих' }
            ]
        );
    }
    return (
        <View style={styles.container}>
            <View style={styles.viewRightCorner}>
                <Text>{email}</Text>
                <Icon style={[{ color: '#000000' }]} size={35} name={'logout'} onPress={logOut} />
            </View>
            <ScrollView>
                {
                    posts.map(post => {
                        return (
                            <View style={styles.view} key={post.id}>
                                <Text>User ID: {post.userId}</Text>
                                <Text>ID: {post.id}</Text>
                                <Text>Title: {post.title}</Text>
                                <Text>Body: {post.body}</Text>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    view: {
        margin: 5,
        padding: 10
    },
    viewRightCorner: {
        alignSelf: 'flex-end',
        alignItems: 'flex-end',
    }
})