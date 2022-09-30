import React, {Component} from 'react';
import {Dimensions, StyleSheet, Text, View, ScrollView, Image} from 'react-native';

class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: this.props?.route.params,
        }
    }

    render() {
        const height = Dimensions.get('screen').height;
        return (
            <View style={styles.container}>
                <ScrollView style={styles.postsContainer}>
                    {this.state.posts.map(item => {
                    return (
                    <View key={item.id} style={styles.border}>
                        {height > 900 ? <Image style={styles.img} source={require('../../assets/picture.png')} /> : ''}
                        <Text style={styles.commonText}>Author: {item?.author}</Text>
                        <Text style={styles.commonText}>Company: {item?.company}</Text>
                        <Text style={styles.commonText}>Title: {item?.title}</Text>
                    </View>
                    );
                })
                }
                </ScrollView>
            </View>
        );
    };
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    postsContainer: {
        paddingTop: 10,
    },
    border: {
        borderWidth: 5,
        borderColor: '#27569C',
        width: '91%',
        marginBottom: 25,
        alignSelf: 'center',
    },
    img: {
        marginLeft: 25,
        marginTop: 25,
    },
    commonText: {
        fontFamily: 'Inter',
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        marginTop: 25,
        marginLeft: 25,
    },
});

export default MainScreen;