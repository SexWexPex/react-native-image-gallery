import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {withNavigation} from "react-navigation";
import ImageComponent from "./ImageComponent";
import {bindActionCreators} from "redux";
import {fetchMoreImages} from "../../library/store/actions/actionCreators";
import connect from "react-redux/es/connect/connect";

class ImageGallery extends Component {
    static propTypes = {
        data: PropTypes.arrayOf(PropTypes.object).isRequired
    };

    state = {
        page: 4
    };

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

    endReached = () => {
        this.props.fetchMoreImages(this.state.page);
        this.setState({page: this.state.page+1})
    };

    render() {
        let page = 4;
        return (
            <FlatList
                showsVerticalScrollIndicator={false}
                data={this.props.data}
                renderItem={this.renderItem}
                keyExtractor={(x, i) => i.toString()}
                onEndReached={()=> this.endReached()}
                onEndReachedThreshold={2}
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


const mapStateToProps = state =>{
    return{
        fetch: state.fetch,
    };
};
const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            fetchMoreImages
        },
        dispatch
    );

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(ImageGallery));
