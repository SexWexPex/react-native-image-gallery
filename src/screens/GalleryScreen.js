import React, {Component} from 'react';
import {View, ActivityIndicator} from 'react-native';
import ImageGallery from "./components/ImageGallery";
import {connect} from "react-redux";
import {fetchImages} from "../library/store/actions/actionCreators";
import {bindActionCreators} from "redux";

class GalleryScreen extends Component {

    componentDidMount() {
        this.props.fetchImages();
    }


    render() {
        if (!this.props.fetch.data) {
            return (
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <ActivityIndicator size={"large"} color={'red'}/>
                </View>
            )
        }
        else {
            return (
                <ImageGallery data={this.props.fetch.data}/>
            )
        }
    }
}

const mapStateToProps = state =>{
    return{
        fetch: state.fetch,
    };
};
const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            fetchImages
        },
        dispatch
    );


export default connect(mapStateToProps, mapDispatchToProps)(GalleryScreen);
