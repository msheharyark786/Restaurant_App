import React, {useRef} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
  Platform,
} from 'react-native';
// import HeaderImageScrollView, {
//   TriggeringView,
// } from 'react-native-image-header-scroll-view';

// import * as Animatable from 'react-native-animatable';
//import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
//import FontAwesome from 'react-native-vector-icons/FontAwesome';
//import MyNavigator from './MyNavigator';
import {  
  createAppContainer
  
} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer'
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import PendingOrderScreen from '../screens/PendingOrderScreen';
import AcceptedOrderScreen from '../screens/AcceptedOrderScreen';
import CookingOrderScreen from '../screens/CookingOrderScreen';
import DeliveredOrderScreen from '../screens/DeliveredOrderScreen';
import ActiveOrderScreen from '../screens/ActiveOrderScreen';
import Colors from '../constants/Colors';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
//import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';



    const defaultStackNavOption = {
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        },
        headerTitleStyle: {
          fontWeight:'bold'
        },
        headerBackTitleStyle: {
          //fontFamily: 'open-sans'
        },
        headerTintColor: Platform.OS === 'android' ? Colors.themeColor : Colors.primaryColor,
        // headerBackground:() => (
        //   <Image
        //     //style={StyleSheet.absoluteFill}
        //     source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg' }}
        //   />
        // ),
        headerTitle: ''
      };
    const PendingNavigator = createStackNavigator(
        {
           // Deal: DealScreen
            // Categories: {
            //     screen: CategoriesScreen
            //   },
            //HeaderIm: HeaderIamge,
            Pending:{
              screen:PendingOrderScreen,
              navigationOptions: {
                      title: '',
                      headerShown: false,
                    },
            }
            // CategoryMeals: {
            //     screen: CategoryMealsScreen,
            //     navigationOptions: {
            //       title: '',
            //       headerShown: false,
            //     },
            // },
            // MealDetail:{
            //   screen:MealDetailScreen,
            //   // navigationOptions: {
            //   //   title: '',
            //   //   headerShown: true,
            //   // },
            // },
           // Products:Products,
            // PaymentScreen: {
            //   screen:PaymentScreen,
            //   navigationOptions: {
            //     title: '',
            //     headerShown: false,
            //   },
            // }
            
            //Pakistani: PakistaniScreen,
          
          //MealDetail: MealDetailScreen
        },
        {
          //initialRouteName: 'Deal',
          //defaultNavigationOptions: defaultStackNavOption
        }
      );
      const AcceptedNavigator = createStackNavigator(
        {
          Accepted:{
            screen:ActiveOrderScreen,
            navigationOptions: {
              title: '',
              headerShown: false,
            },
          }
            
          
          //MealDetail: MealDetailScreen
        },
        {
          //initialRouteName: 'Deal',
          defaultNavigationOptions: defaultStackNavOption
        }
      );
      
      const CookingNavigator = createStackNavigator(
        {
          Cooking:{
            screen:CookingOrderScreen,
            navigationOptions: {
              title: '',
              headerShown: false,
            },
          }
          
        },
        {
          //initialRouteName: 'Deal',
          defaultNavigationOptions: defaultStackNavOption
        }
      );
      const DeliveredNavigator = createStackNavigator(
        {
          Delivered:{
            screen: DeliveredOrderScreen,
            navigationOptions: {
              title: '',
              headerShown: false,
            },
          }
           
          
        },
        {
          //initialRouteName: 'Deal',
          defaultNavigationOptions: defaultStackNavOption
        }
      );
     
      // const ShowHeaderNavigator=createStackNavigator({
      //   HeaderImageScreen:HeaderImageScreen,
        
      // });
        
      

      const ChooseNavigator = createMaterialTopTabNavigator(  
          {
            
           Pending: {
                screen: PendingNavigator,
                navigationOptions: {
                  //title:"PENDING",
                  //headerTitle: () => <LogoTitle />,
                  //tabBarLabel:"PENDING",
                  // tabBarIcon: ({ tintColor }) => (
                  //   <Icon name="hourglass" size={30} color="#900" />
                  // )
                  
                  tabBarLabel: 'PENDING',
                  //tabBarLabelStyle: 
            
                  // tabBarLabel:
                  //   Platform.OS === 'android' ? (
                  //     <Text style={{fontWeight:"bold"}}>PENDING</Text>
                  //   ) : (
                  //     'PENDING'
                  //   ),
                  tabBarIcon: ({focused, tintColor }) => (
                    <Icon
                        focused={focused}
                        name={Platform.OS === 'ios' ? 'ios-home' : 'hourglass-outline'}
                        style={{ fontSize:25, color: tintColor }}
            
                    />
                  ),
                  
                }
              },
          Accepted: {
            screen: AcceptedNavigator,
            navigationOptions: {
              //title:"ACCEPTED"
              tabBarLabel: 'ACCEPTED',
              tabBarIcon: ({focused, tintColor }) => (
              <FontAwesome
                focused={focused}
                name={Platform.OS === 'ios' ? 'ios-home' : 'check'}
                style={{ fontSize:27, color: tintColor }}

              />
              )
            }
          },
          Cooking: {
            screen: CookingNavigator,
            navigationOptions: {
              //title:"COOKING"
              tabBarLabel: 'COOKING',
              tabBarIcon: ({focused, tintColor }) => (
              <MaterialIcons
                focused={focused}
                name={Platform.OS === 'ios' ? 'ios-home' : 'outdoor-grill'}
                style={{ fontSize:30, color: tintColor }}

              />
              )
            }
          },
          Delivered: {
            screen:  DeliveredNavigator,
            navigationOptions: {
              //title:"DELIVERED"
              tabBarLabel: 'DELIVERED',
              tabBarIcon: ({focused, tintColor }) => (
              <MaterialIcons
                focused={focused}
                name={Platform.OS === 'ios' ? 'ios-home' : 'delivery-dining'}
                style={{ fontSize:26, color: tintColor }}

              />
              )
            }
          }
          
          
        },
        {  
          initialRouteName: 'Pending',
          tabBarOptions:{
            activeTintColor:Colors.accentColor,
            inactiveTintColor: Colors.themeColor,
            showIcon: true ,
           // gesturesEnabled: false,
            swipeEnabled: true,
            tabBarPosition:"top",
            //swipeEnabled:false,
           // scrollEnabled: true,
            //swipeEnabled:true,
            indicatorStyle: {
              backgroundColor: Colors.accentColor,
            }, 
            
            labelStyle: { fontWeight:"bold", fontSize:12 },
            style: {
             // height: 100,
              backgroundColor: Colors.primaryColor,
            },
            
          //   navigationOptions: {
          //     header: {
          //       visible: true,
          //     },
          //  },
            
          }
        }
        //} 
        
      );
    const MenuNavigator = createDrawerNavigator(
          {
            
            
           Favs:{
                screen: ChooseNavigator,
                navigationOptions: {
                  drawerLockMode: 'locked-closed',
                  headerShown: false,
                  headerMode: 'none',
                  // style:{flex:2}
                }
                
              }
          },
    );
    // return (
    //     <View style={styles.HomeView}>
    //         <Text>Home Screen</Text>
    //     </View>
    // )
// }

// const styles = StyleSheet.create({
//     HomeView:{
//         justifyContent:'center',
//         fontSize:20
//     }
// })

export default createAppContainer(MenuNavigator);
