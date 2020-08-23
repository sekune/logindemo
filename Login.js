import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Dimensions,
    TouchableOpacity,
    Alert,
    StatusBar
} from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);


export default function Login({ navigation: { navigate } }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [hide, setHide] = useState(true)
    const [hide1, setHide1] = useState(true)
    const [hide2, setHide2] = useState(true)
    useEffect(() => {
        if (hide1 == false && hide2 == false) {
            setHide(false)
        }
        console.log(hide1, hide2, hide)
    })
    function validateEmail(text) {
        console.log(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(text) === false) {
            console.log("Email is Not Correct");
            return false;
        }
        else {
            console.log("Email is Correct");
            return true
        }
    }
    function validatePassword(text) {
        console.log(text);
        let reg = /^[0-9]+$/;
        if (reg.test(text) === false) {
            console.log("Password is Not Correct");
            return false;
        }
        else {
            if (text.length >= 6) {
                console.log("Password is Correct");
                return true
            } else {
                console.log("Password is Not Correct");
                return false;
            }
        }
    }
    function login() {
        if (validateEmail(email) === true && validatePassword(password) === true) {
            console.log('yes')
            navigate('Main', { email: email})
        } else {
            Alert.alert(
                "Алдааны мэдээлэл",
                "Таны оруулсан и-мейл эсвэл нууц үг буруу байна",
                [
                    {
                        text: "OK",
                        onPress: () => console.log("OK Pressed")
                    }
                ]
            )
        }

    }
    return (
        <View style={styles.container}>
            <StatusBar />
            <TextInput
                style={styles.textInputs}
                placeholder={email}
                onChangeText={text => {setEmail(text); setHide1(false)}} 
                value={email}
                keyboardType={'email-address'}/>
            <TextInput
                style={styles.textInputs}
                placeholder={password}
                onChangeText={text => {setPassword(text); setHide2(false)}}
                value={password}
                keyboardType={'number-pad'} />
            {
                hide ? null : (
                    <TouchableOpacity
                        onPress={login}>
                        <Text>Нэвтрэх</Text>
                    </TouchableOpacity>
                )
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInputs: {
        height: screenHeight * 0.05,
        width: screenWidth * 0.9,
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        margin: 10
    }
});
