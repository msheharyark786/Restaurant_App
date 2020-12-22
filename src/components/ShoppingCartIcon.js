import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Platform
} from "react-native";



import { withNavigation } from 'react-navigation';
import * as Animatable from 'react-native-animatable';
import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons'
import Octicons from 'react-native-vector-icons/Octicons'
//import { Colors } from "react-native/Libraries/NewAppScreen";
import UserDetailScreen from '../screens/UserDetailScreen';
import Colors from '../constants/Colors';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
const ShoppingCartIcon = (props) => {

    bs = React.createRef();
  fall = new Animated.Value(1);


    const cartTotalLenght = useSelector(state => state.cart.count );
    return(
    <View style={[{ padding: 5 }, Platform.OS == 'android' ? styles.iconContainer : null]}>
        {/* <View style={{
            position: 'absolute', height: 25, width: 25, borderRadius: 15, backgroundColor: Colors.primaryColor, right: 30, bottom: 20, alignItems: 'center', justifyContent: 'center', zIndex: 2000,

        }}>
        <Text style={{ color: Colors.orangeColor, fontWeight: 'bold' }}>{cartTotalLenght}</Text>
        </View> */}
        <Icon onPress={() => props.navigation.navigate('UserDetailScreen')} name="md-person-circle-sharp" size={55} color="green" />
    </View>
    )
    }

const mapStateToProps = (state) => {
    return {
        cartItems: state
    }
}

export default connect(mapStateToProps)(withNavigation(ShoppingCartIcon));

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconContainer: {
        paddingLeft: 20, paddingTop: 10, marginRight: 5
    },
    header: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: {width: -1, height: -3},
        shadowRadius: 2,
        shadowOpacity: 0.4,
        // elevation: 5,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      },
      panelHeader: {
        alignItems: 'center',
      },
      panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
      },
});