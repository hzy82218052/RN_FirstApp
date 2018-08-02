/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
} from 'react-native';

const {width,height} = Dimensions.get('window');
const thirdwidth = width /3;
const imgwidth = thirdwidth-10*2;
const imgheight = imgwidth*215/150;

const styles = StyleSheet.create({
    // root:{
    //     backgroundColor:'red',
    //     width:50,
    //     height:50,
    //     borderWidth:2,
    //     borderColor:'black',
    // }
    root:{
        width:imgwidth,
    },
    img:{
        width:imgwidth,
        height:imgheight,
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        marginTop:5,
    },
});


export default class Item extends Component<Props> {
    render() {
        return (
            <View style={styles.root}>
                <Image
                    source={require('../img/poster.jpg')}
                    style={styles.img}
                />
                <Text
                    numberOfLines={1}
                    style={styles.title}
                >
                    金刚狼3：殊死一战
                </Text>
            </View>
        );
    }
}


