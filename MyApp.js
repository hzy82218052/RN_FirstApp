/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
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
    row: {
        // flexDirection:'row',
        // justifyContent:'space-between',
        paddingHorizontal: 15,
    }
})
//https://api.douban.com/v2/movie/in_theaters

const api = 'https://api.douban.com/v2/movie/in_theaters';

export default class MyApp extends Component<Props> {
    state = {
        movies: movies.subjects,
        refreshing: false,
    }

    refreshing = false;
    start = 0;
    count = 12;
    fetchData = (start = 0, count = 12) => {
        if (this.refreshing) {
            return
        }
        this.setState({
            refreshing: true,
        });
        this.refreshing = true;
        //1边上的点
        return fetch(`${api}?start=${start}&count=${count}`)
            .then((response) => response.text())
            .then((responseText) => {
                console.log("fetch:" + responseText);
                const json = JSON.parse(responseText);
                return json;
            })
            .then((responseJson) => {
                this.setState({
                    refreshing: false,
                });
                this.refreshing = false;
                return responseJson;
            })
            .catch((error) => {
                console.error(error);
            })
    };

    freshData = async () => {
        // this.fetchData().then(json=>{
        //      this.setState({
        //          movies: responseJson.subjects,
        //      })
        //  });
        const json = await this.fetchData();
        this.setState({
            movies: json.subjects,
        });
    }
    fetchMore = async () => {
        const json = await this.fetchData(this.start,this.count);
        this.start +=this.count-1;
        this.setState({
            movies: this.state.movies.concat(json.subjects),
        });
    }

    componentDidMount() {
        // this.fetchData();
    };


    render() {
        const {movies, refreshing} = this.state;
        return (
            <View>
                <FlatList
                    numColumns={3}
                    columnWrapperStyle={styles.row}
                    keyExtractor={item => item.id}
                    data={movies}
                    onRefresh={this.freshData}
                    onEndReached={this.fetchMore}
                    onEndReachedThreshold={0}
                    refreshing={refreshing}
                    renderItem={({item}) =>{
                        return (<Item
                            title={item.title}
                            image={item.images.medium}
                            stars={item.rating.stars}
                            average={item.rating.average}
                        />)}
                    }
                />
            </View>
        );
    }
}


