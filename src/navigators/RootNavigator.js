import * as React from 'react';
import {Dimensions, Image, TouchableOpacity} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {createNavigationContainerRef} from '@react-navigation/native';

import LoginScreen from '../screens/LoginScreen';
import MainScreen from '../screens/MainScreen';

const Stack = createStackNavigator();

export const navigationRef = createNavigationContainerRef()

export function navigate(name, params) {
    if (navigationRef.isReady()) {
        navigationRef.navigate(name, params);
    }
}

function LogoTitle() {
    return (
        Dimensions.get('screen').width > 400 ?
            <Image
                style={{width: 152, height: 35, marginLeft: 15, marginBottom: 10}}
                source={require('../../assets/logo2.png')}
            />
            :
            <Image
                style={{width: 45, height: 40, marginLeft: 15, marginBottom: 10}}
                source={require('../../assets/logo.png')}
            />
    );
}

function BackButton() {
    return (
        <TouchableOpacity onPress={() => navigationRef.goBack()}>
            <Image
                style={{width: 43, height: 38, marginRight: 15, marginBottom: 10}}
                source={require('../../assets/Group.png')}
            />
        </TouchableOpacity>
    );
}

export const RootNavigator = () => {
    return (
        <Stack.Navigator initialRouteName={'login'}>
            <Stack.Screen
                name='ы'
                component={LoginScreen}
                options={{
                    headerLeft: (props) => <LogoTitle {...props} />,
                    headerStyle: {
                        backgroundColor: '#E4B062',
                    },
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    title: '',
                }}
            />
            <Stack.Screen name={'posts'} component={MainScreen} options={{
                headerLeft: (props) => <LogoTitle {...props} />,
                headerStyle: {
                    backgroundColor: '#E4B062',
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                title: '',
                headerRight: (props) => <BackButton {...props} />
            }} />
        </Stack.Navigator>
    );
};