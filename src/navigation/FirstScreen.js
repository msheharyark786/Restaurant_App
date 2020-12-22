import React from 'react';
import { Platform, View, Text, StyleSheet } from 'react-native';
import {  
  createAppContainer
  
} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer'
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

import SecondTopScreen from './SecondTopScreen';

import HeaderButton from '../components/HeaderButton'; 
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import Colors from '../constants/Colors';
import StatusScreen from '../screens/StatusScreen';
import CurrentOrderScreen from '../screens/CurrentOrderScreen';
//import DesiScreen from '../screens/DesiScreen';




    const defaultStackNavOptions = {
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        },
        // headerTitleStyle: {
        //   //fontFamily: 'open-sans-bold'
        // },
        // headerBackTitleStyle: {
        //   //fontFamily: 'open-sans'
        // },
        // headerTintColor: Platform.OS === 'android' ? Colors.themeColor : Colors.primaryColor,
        // headerTitle: '',
      };
    const DineNavigator = createStackNavigator(
        {
            CurrentOrderScreen:CurrentOrderScreen,
            Status: {
                screen: StatusScreen,
                // navigationOptions: {
                //   title: '',
                //   headerShown: false,
                // },
                
              },
            
          
          //MealDetail: MealDetailScreen
        },
        {
          // initialRouteName: 'Categories',
          //defaultNavigationOptions: defaultStackNavOptions
        }
      );
    //   const SecondTopNavigator = createStackNavigator(
    //     {
    //         SecondTop: SecondTopScreen,
          
    //       //MealDetail: MealDetailScreen
    //     },
    //     {
    //       // initialRouteName: 'Categories',
    //       defaultNavigationOptions: defaultStackNavOptions
    //     }
    //   );
      
      const DeliveryNavigator = createStackNavigator(
        {
          //Delivery: DeliveryScreen,
          //MealDetail: MealDetailScreen,
        //   SecondTop:SecondTopScreen,
        //   Pakistani: PakistaniScreen,
          // Status: {
          //   screen: StatusScreen,
          //   // navigationOptions: {
          //   //   title: '',
          //   //   headerShown: false,
          //   // },
            
          // },
          SecondTop:{
            screen: SecondTopScreen,
            navigationOptions: {
                  title: '',
                  headerShown: false,
                },
          },
        //   CategoryMeals: {
        //     screen: CategoryMealsScreen
        //   },
        //   MealDetail: MealDetailScreen
        },
        {
          // initialRouteName: 'Categories',
          //defaultNavigationOptions: defaultStackNavOptions
        }
      );
      const AppNavigator = createMaterialTopTabNavigator( 
        {
          Delivery: {
            screen: DeliveryNavigator,
            navigationOptions: {
              title:'Delivery'
            }
          },
          Dine: {
            screen: DineNavigator,
            navigationOptions: {
              title:'Dine In',
            }
          },
        },{
          tabBarOptions:{
            activeTintColor:Colors.primaryColor,
            inactiveTintColor: Colors.primaryColor,
            indicatorStyle: {
              backgroundColor: Colors.primaryColor,
            }, 
            style: {
              height: 45,
              backgroundColor: Colors.accentColor,
            },
            labelStyle: { fontSize: 14, fontWeight:"bold" },
            
          }
        }); 
    //       
    const MinNavigator = createDrawerNavigator(
          {
            TopFavs:{
                screen: AppNavigator,
                navigationOptions: {
                  drawerLockMode: 'locked-closed',
                  // title: '',
                  // headerShown: false,
                  // headerMode: 'none'
                }
              }
          },
          {
            contentOptions: {
              //activeTintColor: Colors.accentColor,
              // labelStyle: {
              //   fontWeight:'bold'
              // }
            }
          }
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
// const FirstScreen=(props)=>{

// }
// FirstScreen.navigationOptions = navData => {
//   return {
//     headerTitle: 'Restaurants',
//     headerLeft:() =>(
//       <HeaderButtons HeaderButtonComponent={HeaderButton}>
//         <Item
//           title="Menu"
//           iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
//           onPress={() => {
//             navData.navigation.toggleDrawer();
//           }}
//         />
//       </HeaderButtons>
//     ),
//     headerRight: () =>(
//       <HeaderButtons HeaderButtonComponent={HeaderButton}>
//         <Item
//           title="Cart"
//           iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
//           onPress={() => {
//             navData.navigation.navigate('Cart');
//           }}
//         />
//       </HeaderButtons>
//     )
//   };
// };

export default createAppContainer(MinNavigator);
