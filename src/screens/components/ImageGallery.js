import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet, Image, TouchableNativeFeedback} from 'react-native';
import {withNavigation} from "react-navigation";
import {imageResizer} from "../../library/utils/imageResizer";
import ImageComponent from "./ImageComponent";

class ImageGallery extends Component {


    renderItem = ({item}) => {
        return (
            <View>

                <View style={styles.cardContainer}>

                    <ImageComponent item={item}/>

                    <View style={styles.infoContainer}>
                        <Text>Author: {item.user.name}</Text>
                        <Text>Photo ID: {item.id}</Text>
                    </View>

                </View>

                <View style={{backgroundColor: 'lightgray', height: 10}}/>

            </View>
        )
    };

    render() {
        return (
            <FlatList
                showsVerticalScrollIndicator={false}
                data={this.props.data}
                renderItem={this.renderItem}
                keyExtractor={(x, i) => i.toString()}
            />
        );
    }
}


const styles = StyleSheet.create({
    cardContainer: {
        marginVertical: 10,
    },
    infoContainer: {
        alignItems: 'center',
        marginTop: 5
    },
});

export default withNavigation(ImageGallery);
