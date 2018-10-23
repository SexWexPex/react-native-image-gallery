import React, {Component} from 'react';
import {View, Image} from 'react-native';
import {imageFiller} from "../library/utils/imageResizer";

class OpenImageScreen extends Component {

    state = {
        item: this.props.navigation.getParam('item', null)
    };

    render() {
        console.log(this.state.item);
        return (
            <View>
                <Image source={{uri: this.state.item.urls.regular}} style={imageFiller(this.state.item)}/>
            </View>
        );
    }
}

export default OpenImageScreen;
