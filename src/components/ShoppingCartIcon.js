import React, {useState} from "react";
import {
    View,
    Text,
    StyleSheet,
    Platform,
    TouchableOpacity,
} from "react-native";
import {useTheme} from 'react-native-paper';
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
//import BottomSheet from 'react-native-bottomsheet-reanimated';
import { SocialIcon } from 'react-native-elements';


//import BottomSheetScreen from './BottomSheetScreen';
import { withNavigation } from 'react-navigation';
import * as Animatable from 'react-native-animatable';
import { BottomSheet } from 'react-native-btr';
import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Octicons from 'react-native-vector-icons/Octicons'
//import { Colors } from "react-native/Libraries/NewAppScreen";
import UserDetailScreen from '../screens/UserDetailScreen';
import Colors from '../constants/Colors';

import Animated from 'react-native-reanimated';
//import BottomSheet from 'react-native-bottomsheet-reanimated';
const ShoppingCartIcon = (props) => {
  const {colors} = useTheme();
//     bs = React.createRef();
//   fall = new Animated.Value(1);
    const cartTotalLenght = useSelector(state => state.cart.count );
    const [visible, setVisible] = useState(false);

    const toggleBottomNavigationView = () => {
      //Toggling the visibility state of the bottom sheet
      setVisible(!visible);
    };
    // renderInner = () => (
    //   <View style={styles.panel}>
    //     <View style={{alignItems: 'center'}}>
    //       <Text style={styles.panelTitle}>Upload Photo</Text>
    //       <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
    //     </View>
    //     {/* <TouchableOpacity style={styles.panelButton} onPress={takePhotoFromCamera}>
    //       <Text style={styles.panelButtonTitle}>Take Photo</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity style={styles.panelButton} onPress={choosePhotoFromLibrary}>
    //       <Text style={styles.panelButtonTitle}>Choose From Library</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity */}
    //       {/* style={styles.panelButton}
    //       onPress={() => this.bs.current.snapTo(1)}>
    //       <Text style={styles.panelButtonTitle}>Cancel</Text>
    //     </TouchableOpacity> */}
    //   </View>
    // );
  
    // renderHeader = () => (
    //   <View style={styles.header}>
    //     <View style={styles.panelHeader}>
    //       <View style={styles.panelHandle} />
    //     </View>
    //   </View>
    // );
  
    // bs = React.createRef();
    // fall = new Animated.Value(1);




    return(
    <View style={[{ padding: 5 }, Platform.OS == 'android' ? styles.iconContainer : null]}>
        {/* <View style={{
            position: 'absolute', height: 25, width: 25, borderRadius: 15, backgroundColor: Colors.primaryColor, right: 30, bottom: 20, alignItems: 'center', justifyContent: 'center', zIndex: 2000,
        }}>
        <Text style={{ color: Colors.orangeColor, fontWeight: 'bold' }}>{cartTotalLenght}</Text>
        </View> */}
        
        {/* <BottomSheet
         visible={visible}
        ref={bs}
        snapPoints={[330, 0]}
        //setting the visibility state of the bottom shee
        onBackButtonPress={toggleBottomNavigationView}
        //Toggling the visibility state
        onBackdropPress={toggleBottomNavigationView}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
      />
      <Animated.View style={{margin: 20,
        opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
    }}> */}
      <Icon 
    onPress={toggleBottomNavigationView}
    name="md-person-circle-sharp" 
    size={55} 
    color="green" 
    />
     <BottomSheet
          visible={visible}
          //setting the visibility state of the bottom shee
          onBackButtonPress={toggleBottomNavigationView}
          //Toggling the visibility state on the click of the back botton
          onBackdropPress={toggleBottomNavigationView}
          //Toggling the visibility state on the clicking out side of the sheet
        >
          {/*Bottom Sheet inner View*/}
          <View style={styles.bottomNavigationView}>
            <View
              style={{
                //flex: 1,
                flexDirection: 'column',
                marginTop:10,
                marginLeft:10
                //justifyContent: 'space-between',
              }}>
              <View>
            <Text style={{fontSize:25,
            //alignSelf: 'center' ,
            //fontWeight: 'bold',
            color:Colors.accentColor,
            marginBottom:0,
            fontFamily:'Bitter-ExtraBold'}}>
            Restaurant 
        </Text>
        <Text style={{fontSize:35,
            //alignSelf: 'center' ,
            //fontWeight: 'bold',
            color:Colors.blackColor,
            //fontStyle:'italic'
          fontFamily:'Bitter-SemiBoldItalic'
            }}>
            Coco Cubano
        </Text>
        
        
        </View>
              <View style={{ flex:1}}>
              <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginTop:15}}>
              
                <Entypo name="location-pin" color={Colors.accentColor} size={20}  />
      <Text style={{fontSize:15, color:Colors.themeColor}}>Gulberg 3, Lahore</Text>
                
              </View>
              <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginTop:25}}>
                <Entypo name="phone" color={Colors.accentColor} size={20}  />
                <Text style={{fontSize:15, color:Colors.themeColor}}>+93249472294</Text>
              </View>

              <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginTop:40}}>
                <Text style={{fontSize:13, color:Colors.accentColor}}>Logged In: </Text>
                <Text style={{fontSize:15}}>M. Sheharyar Khan</Text>
                <Text style={{fontSize:13, color:Colors.accentColor}}>      Designation: </Text>
                <Text style={{fontSize:15}}>Owner</Text>
              </View>

              <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginTop:50}}>
        <TouchableOpacity style={styles.button}  onPress={() => {
        props.navigation.navigate({
          routeName: 'TermCondition'
        });
        }} >
        <FontAwesome name='ban' size={25}
        color={Colors.accentColor} />
        <Text style={styles.textDatas}>Terms & Conditions</Text></TouchableOpacity>
        </View>


        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginTop:50}}>
        <TouchableOpacity style={styles.button}  onPress={() => {
        props.navigation.navigate({
          routeName: 'PrivacyPolicy',
        });
         }} >
        <MaterialIcons name='privacy-tip' size={25}
        color={Colors.accentColor} />
        <Text style={styles.textDatas}>Privacy Policy</Text></TouchableOpacity>
        </View>


        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginTop:50}}> 
        <TouchableOpacity style={styles.button}  onPress={() => {
        props.navigation.navigate({
          routeName: 'LoginScreen',
        });
      }} >
        <SimpleLineIcons name="logout" size={25} 
      color={Colors.accentColor} />
      <Text style={styles.textDatas}>Logout</Text></TouchableOpacity>   
      </View>
    
      
      {/* </View> */}
                {/* <SocialIcon
                  //Social Icon using react-native-elements
                  type="twitter"
                  //Type of Social Icon
                  onPress={() => {
                    //Action to perform on press of Social Icon
                    toggleBottomNavigationView();
                    alert('twitter');
                  }}
                /> */}
                
              </View>
            </View>
          </View>
        </BottomSheet>
    {/* </Animated.View> */}
        
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
    container: {
      flex: 1,
    },
    commandButton: {
      padding: 15,
      borderRadius: 10,
      backgroundColor: '#FF6347',
      alignItems: 'center',
      marginTop: 10,
    },
    panel: {
      padding: 20,
      backgroundColor: '#FFFFFF',
      paddingTop: 20,
      // borderTopLeftRadius: 20,
      // borderTopRightRadius: 20,
      // shadowColor: '#000000',
      // shadowOffset: {width: 0, height: 0},
      // shadowRadius: 5,
      // shadowOpacity: 0.4,
    },
    line:{
      
      padding: 5,
      paddingLeft:15,
      borderColor:"#b0bec5",
      borderWidth:0.5,
    },
    button: {
      paddingTop: 15,
      flexDirection: 'row',
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
    panelTitle: {
      fontSize: 27,
      height: 35,
    },
    panelSubtitle: {
      fontSize: 14,
      color: 'gray',
      height: 30,
      marginBottom: 10,
    },
    textDatas:{
      marginLeft:15,
      fontSize:19
    },
  
    panelButton: {
      padding: 13,
      borderRadius: 10,
      backgroundColor: '#FF6347',
      alignItems: 'center',
      marginVertical: 7,
    },
    panelButtonTitle: {
      fontSize: 17,
      fontWeight: 'bold',
      color: 'white',
    },
    action: {
      flexDirection: 'row',
      marginTop: 10,
      marginBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5,
    },
    actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF0000',
      paddingBottom: 5,
    },
    textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
    },
    containerr: {
      flex: 1,
      margin: 2,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#E0F7FA',
    },
    bottomNavigationView: {
      backgroundColor: '#fff',
      width: '100%',
      height: 350,
      
     // justifyContent: 'center',
      //alignItems: 'center',
    },
});