import React, {Component} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import ImageGallery from "./components/ImageGallery";

const API = "https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0";

class GalleryScreen extends Component {

    state = {
        isLoading: true,
        data: null,
    };

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        const response = await fetch(API, {
            method: 'GET'
        });
        const json = await response.json();
        console.log(json);
        if (json) {
            this.setState({data: json, isLoading: false}, () => console.log("DATA", this.state.data))
        }
    };


    render() {
        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <ActivityIndicator size={"large"} color={'red'}/>
                </View>
            )
        }
        else {
            return (
                <ImageGallery data={this.state.data}/>
            )
        }
    }
}

export default GalleryScreen;
