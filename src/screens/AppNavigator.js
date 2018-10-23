import {createStackNavigator} from "react-navigation";
import transitionConfig from "../library/utils/transitionConfig";
import GalleryScreen from "./GalleryScreen";
import OpenImageScreen from "./OpenImageScreen";

const AppNavigator = createStackNavigator({
        GalleryScreen: {screen: GalleryScreen},
        OpenImageScreen: {screen: OpenImageScreen}
    },
    {
        transitionConfig,
        navigationOptions: {
            header: null,
            gesturesEnabled: true,
            gestureResponseDistance: {horizontal: 200}
        },
        initialRouteName: "GalleryScreen",
    });

export default AppNavigator;
