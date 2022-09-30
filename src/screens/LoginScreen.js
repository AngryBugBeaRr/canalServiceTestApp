import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

import * as RootNavigation from '../navigators/RootNavigator';

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
            isCorrect: true
        };

        this.handleChangeLogin = this.handleChangeLogin.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }

    handleChangeLogin(event) {
        this.setState({login: event.nativeEvent.text});
    }

    handleChangePassword(event) {
        this.setState({password: event.nativeEvent.text});
    }

    getData = async () => {
        let data = await fetch('https://my-json-server.typicode.com/AngryBugBeaRr/canalServiceTestApp/users')
            .then((response) => response.json())
            .then(json => {return json});
        return data[0];
    };

    getPosts = async () => {
        let data = await fetch('https://my-json-server.typicode.com/AngryBugBeaRr/canalServiceTestApp/posts')
            .then((response) => response.json())
            .then(json => {return json});
        return data;
    }

    checkAuth = async (login, password) => {
        let data = await this.getData();
        if (data?.username === login && data?.password === password) {
            let posts = await this.getPosts();
            RootNavigation.navigate('posts', posts);
            this.setState({isCorrect: true});
        } else {
            this.setState({isCorrect: false});
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.border}>
                    <Text style={styles.titleText}>Authorization</Text>
                    <View style={styles.inputContainer}>
                        <Text style={styles.commonText}>login</Text>
                        <TextInput
                            onChange={this.handleChangeLogin}
                            style={styles.input}
                            value={this.state.login}
                        >
                        </TextInput>
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.commonText}>password</Text>
                        <TextInput
                            onChange={this.handleChangePassword}
                            value={this.state.password}
                            secureTextEntry={true}
                            style={styles.input}
                        >
                        </TextInput>
                    </View>
                    {this.state.isCorrect ? <Text></Text> : <Text style={styles.error}>Неверный логин или пароль</Text>}
                    <TouchableOpacity
                        onPress={() => this.checkAuth(this.state.login, this.state.password)}
                        color={'#E4B062'}
                        title={'Submit'}
                        style={styles.btn}
                    >
                        <Text style={styles.btnText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    border: {
        borderWidth: 5,
        borderColor: '#27569C',
        height: '70%',
        width: '90%',
        marginTop: '10%',
        justifyContent: 'space-evenly',
    },
    titleText: {
        fontFamily: 'Inter',
        fontSize: 24,
        color: '#27569C',
        alignSelf: 'center',
        fontWeight: 'bold',
    },
    inputContainer: {
        width: '73%',
        alignSelf: 'center',
    },
    commonText: {
        fontFamily: 'Inter',
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
    },
    input: {
        backgroundColor: '#D9D9D9',
        height: 39,
        borderRadius: 10,
        marginTop: 20,
        paddingLeft: 10,
    },
    error: {
        color: 'red',
        alignSelf: 'center',
    },
    btn: {
        width: '73%',
        backgroundColor: '#E4B062',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        height: 43,
        alignSelf: 'center',
    },
    btnText: {
        fontFamily: 'Inter',
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default LoginScreen;