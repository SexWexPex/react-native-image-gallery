import React, {Component} from 'react';
import {View, Image, ActivityIndicator} from 'react-native';
import {imageFiller} from "../library/utils/imageResizer";


const AppLoader = () => (
    <View style={{alignItems: 'center'}}>
        <ActivityIndicator size={"large"} color={'red'} style={{position: 'absolute', zIndex: 1}}/>
    </View>
);

class OpenImageScreen extends Component {

    state = {
        item: this.props.navigation.getParam('item', null),
        imageLoading: true
    };

    render() {
        return (
            <View>
                {this.state.imageLoading && <AppLoader/>}
                <Image source={{uri: this.state.item.urls.regular}} style={imageFiller(this.state.item)}
                       onLoad={() => this.setState({imageLoading: false})}/>
            </View>
        )
    }
}

export default OpenImageScreen;
