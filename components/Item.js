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
    Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');
const thirdwidth = width / 3;
const imgwidth = thirdwidth - 10 * 2;
const imgheight = imgwidth * 215 / 150;

const styles = StyleSheet.create({
    // root:{
    //     backgroundColor:'red',
    //     width:50,
    //     height:50,
    //     borderWidth:2,
    //     borderColor:'black',
    // }
    root: {
        marginTop: 20,
        width: imgwidth,
        marginRight: 15,
    },
    img: {
        width: imgwidth,
        height: imgheight,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 5,
    },
    starWrapper: {
        width: imgwidth,
        flexDirection: 'row',
        // justifyContent: 'center',
        justifyContent:'space-between',
        paddingHorizontal: 15,
    },
    stars: {
        width: 10,
        height: 10,
    },
    starsTxt: {
        fontSize: 10,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'red',
    },
});

//40 3颗半,45 4颗
const renderStars = (stars, average) => {
    if (stars === '00') {
        return (
        <View>
            <Text style={styles.starsTxt}>暂无评分</Text>
        </View>
        );
    }
    const total = 5;
    let full, half, empty;
    full = parseInt(stars[0]);
    if (stars[1] === '5') {//5是满星
        half = 0;
        empty = total - full;
    } else {//0是半星
        full = full - 1;
        half = 1;
        empty = total - full - half;
    }
    const results = [];
    let i;
    for (i = 0; i < full; i++) {
        results.push(<Image
            key={i}
            style={styles.stars}
            source={require('../img/star-full.png')}
        />)
    }
    if (half) {
        results.push(<Image
            key={i + half}
            style={styles.stars}
            source={require('../img/star-half.png')}
        />)
    }
    for (let j = 0; j < empty; j++) {
        results.push(<Image
            key={i + half + j}
            style={styles.stars}
            source={require('../img/star-empty.png')}
        />)
    }
    results.push(
        <Text key={total + 1} style={styles.starsTxt}>
            {average}分
        </Text>
    )
    return (
        <View
            style={styles.starWrapper}
        >{results}
        </View>
    );
}

const Item = (props) => {
    const {title, image, stars, average} = props;
    return (
        <View style={styles.root}>
            <Image
                // source={require('../img/poster.jpg')}
                source={{uri: image}}
                style={styles.img}
            />
            <Text
                numberOfLines={1}
                style={styles.title}
            >
                {title/*金刚狼3：殊死一战*/}
            </Text>
            {renderStars(stars, average)}
        </View>
    );
}

export default Item
// export default class Item extends Component<Props> {
//     render() {
//         const {title,image} = this.props;
//         return (
//             <View style={styles.root}>
//                 <Image
//                     // source={require('../img/poster.jpg')}
//                     source={{uri:image}}
//                     style={styles.img}
//                 />
//                 <Text
//                     numberOfLines={1}
//                     style={styles.title}
//                 >
//                     {title/*金刚狼3：殊死一战*/}
//                 </Text>
//             </View>
//         );
//     }
// }


