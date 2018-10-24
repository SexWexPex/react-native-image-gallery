import React, {Component} from 'react';
import {View, Animated, Image, TouchableWithoutFeedback} from 'react-native';
import {withNavigation} from 'react-navigation';
import {imageResizer} from "../../library/utils/imageResizer";

class ImageComponent extends Component {

    state = {
        animatePress: new Animated.Value(1)
    };

    animateIn = () => {
        Animated.timing(this.state.animatePress, {
            toValue: 0.8,
            duration: 150
        }).start();
    };

    animateOut = () => {
        Animated.timing(this.state.animatePress, {
            toValue: 1,
            duration: 150
        }).start();
    };

    openImage = (item) => {
        this.props.navigation.navigate(('OpenImageScreen'), {item})
    };

    render() {
        const {item} = this.props;

        return (
            <TouchableWithoutFeedback onPressIn={() => this.animateIn()}
                                      onPressOut={() => this.animateOut()}
                                      onPress={() => this.openImage(item)}>

                <Animated.View style={{transform: [{scale: this.state.animatePress}]}}>

                    <Image source={{uri: item.urls.small}} style={imageResizer(item)}/>

                </Animated.View>

            </TouchableWithoutFeedback>
        );
    }
}

export default withNavigation(ImageComponent);
