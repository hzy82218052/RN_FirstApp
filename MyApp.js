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
    FlatList,
} from 'react-native';
import Item from './components/Item';
import movies from './movies';

const styles = StyleSheet.create({
    row:{
        // flexDirection:'row',
        // justifyContent:'space-between',
        paddingHorizontal:15,
    }
})

export default class MyApp extends Component<Props> {
    render() {
        return (
            <View >
                <FlatList
                    numColumns={3}
                    columnWrapperStyle={styles.row}
                    keyExtractor={item => item.id}
                    data={movies.subjects}
                    renderItem={({item}) =>
                        <Item
                            title={item.title}
                            image={item.images.medium}
                            stars={item.rating.stars}
                            average={item.rating.average}
                        />
                    }
                />
            </View>
        );
    }
}


