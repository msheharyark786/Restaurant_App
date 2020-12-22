import React from 'react';
import { Platform, View, Text } from 'react-native';
import {  
  createAppContainer
  
} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer'
import {createBottomTabNavigator, createMaterialTopTabNavigator} from 'react-navigation-tabs';
//import  Icon  from 'react-native-vector-icons/Ionicons';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import DealsScreen from '../screens/DealsScreen';
import ActiveOrderScreen from '../screens/ActiveOrderScreen';
import NewScreen from '../screens/NewScreen';
import HistoryScreen from '../screens/HistoryScreen';
import RatingScreen from '../screens/RatingScreen';
import FirstScreen from '../navigation/FirstScreen';
import ShoppingCartIcon from '../components/ShoppingCartIcon';
import UserDetailScreen from '../screens/UserDetailScreen';
import SecondTopScreen from '../navigation/SecondTopScreen';

//import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
//import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';




//import Forms from '../components/Forms';
import HeaderButton from '../components/HeaderButton'; 
import { HeaderButtons, Item } from 'react-navigation-header-buttons';




import Colors from '../constants/Colors';

import { useSelector, useDispatch } from 'react-redux';
//import { Header } from 'react-native/Libraries/NewAppScreen';


 
// const defaultStackNavOptions ={
//   headerStyle: {
//     backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
    
//   },
//   headerTitleStyle: { 
//     //fontFamily: 'open-sans-bold',
//     //paddingLeft:105,
//     alignContent:'center',
//     fontWeight:'bold',
//     //justifyContent:'space-between'
//   },
//   headerBackTitleStyle: {
//     //fontFamily: 'open-sans',
//     //paddingLeft:100,
//   },
  
//   headerTitle: 'Restaurants',
//     // headerLeft:()=>(
//     //   <HeaderButtons HeaderButtonComponent={HeaderButton}>
//     //     <Item
//     //       title="Menu"
//     //       iconName="ios-menu"
//     //       onPress={() => {
//     //         //navData.navigation.toggleDrawer();
//     //       }}
//     //     />
//     //   </HeaderButtons>
//     // ),
//   headerTintColor: Platform.OS === 'android' ? Colors.themeColor : Colors.primaryColor,
  
// };
const defaultNavOptions = { 
  headerStyle: {
    height:100,
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
  },
  
  headerTitleStyle: {
    fontSize:30,
    //alignSelf: 'center' ,
    fontWeight: 'bold',
    color:Colors.accentColor,
    fontStyle:'italic'
   
  },
  // header:{
    
  //   left: <Text style={{color: "#3b5998"}}> BackBtn ,
    
  //   }
  headerBackTitleStyle: {
    fontFamily: 'open-sans'
  },
  // headerLeft:() =>(
  //   <HeaderButtons HeaderButtonComponent={HeaderButton}>
  //     <Item
  //       title="Menu"
  //       iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
  //       onPress={() => {
  //         navData.navigation.toggleDrawer();
  //       }}
  //     />
  //   </HeaderButtons>
  // ),
  headerTintColor: Platform.OS === 'android' ? Colors.themeColor : Colors.primary
};


const DealsNavigator = createStackNavigator(
  {
    Deals: DealsScreen,
    UserDetailScreen:UserDetailScreen,
    //MealDetail: MealDetailScreen
  },
  {
    // initialRouteName: 'Categories',
   defaultNavigationOptions: defaultNavOptions
  }
);
// const name=()=>{
//   const availableCategory=useSelector(state=>state.mealReducer.categoryId);

//   const selectedCategory = availableCategory.find(cat => cat.id === catId);
//   return selectedCategory.title;
// };


const FirstNavigator = createStackNavigator(
  {
    //Active:ActiveOrderScreen

    First: {
      navigationOptions: (navData) = {
        headerTitle:()=> (
          <View>
            <Text style={{fontSize:20,
            //alignSelf: 'center' ,
            //fontWeight: 'bold',
            color:Colors.accentColor,
            marginBottom:0,
            fontFamily:'Bitter-ExtraBold'}}>
            Restaurant 
        </Text>
        <Text style={{fontSize:30,
            //alignSelf: 'center' ,
            //fontWeight: 'bold',
            color:Colors.blackColor,
            //fontStyle:'italic'
          fontFamily:'Bitter-SemiBoldItalic'
            }}>
            Coco Cubano
        </Text>
        <Text style={{fontSize:15,
            color:Colors.accentColor,
            fontFamily:'Bitter-ExtraBoldItalic'
            }}>
            Owner
        </Text>
        </View>
        ),
        headerRight:()=> (
       <ShoppingCartIcon />
        )
      },
      screen:FirstScreen
       
    },
    
    
    // HeaderIamgeScreen: {
    //   navigationOptions: {
    //     title: '',
    //     headerShown: false,
    //   },
    //   screen: HeaderIamgeScreen,
    // },
    // UberEats: {
    //   screen: UberEats,
    //   navigationOptions: {
    //     title: "Uber Eats",
    //     header: () => null,
    //   },
    // },
    // ImageAnimationScreen:{
    //   screen: ImageAnimationScreen,
    //   navigationOptions: {
    //   headerBackTitleVisible: false,
    //       headerTitle: ()=>(false),
    //       headerTransparent: true,
    //       headerTintColor: '#fff',
    //       //headerShown:false
    //   }
   // },
    // ThreeTopScreen:{
    //   navigationOptions: (navData) = {
    //     headerTitle: "RESTAURANT MENU",
    //     headerLeft:()=>null,
    //     headerRight:()=> (
    //       <ShoppingCartIcon />
    //     )
    //   },
    // screen:ThreeTopScreen,

    // },
    UserDetailScreen:UserDetailScreen,
    // Cart:CartScreen,
    // PaymentScreen:PaymentScreen
    // SecondTop:{
    //   navigationOptions: {
    //     title: '',
    //     headerShown: false,
    //   },
    //   screen: SecondTopScreen
    // },
    // CategoryMeals: {
    //   screen: CategoryMealsScreen
    // },
    // MealDetail: MealDetailScreen
  },
  {
    // initialRouteName: 'Categories',
    // navigationOptions: {
    //   drawerIcon: drawerConfig => (
    //     <Icon
    //       name={Platform.OS === 'android' ? 'cart-outline' : 'ios-cart'}
    //       size={23}
    //       color={drawerConfig.tintColor}
    //     />
    //   )
    // },
    defaultNavigationOptions: defaultNavOptions
  }
);

const NewNavigator = createStackNavigator(
  {
    New: NewScreen,
    UserDetailScreen:UserDetailScreen,
    //MealDetail: MealDetailScreen
  },
  {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: defaultNavOptions
  }
);

const HisNavigator= createStackNavigator(
  {
    History: HistoryScreen,
    UserDetailScreen:UserDetailScreen,
   // MealDetail: MealDetailScreen
  },
  {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: defaultNavOptions
  }
);

const RatingNavigator = createStackNavigator(
  {
    Rating:RatingScreen,
    UserDetailScreen:UserDetailScreen,
  },
  {
    // initialRouteName: 'Categories',
    defaultNavigationOptions:defaultNavOptions
  }
);






const TabNavigator = createBottomTabNavigator({
  Active: {
    screen: FirstNavigator,
    navigationOptions : {
      tabBarLabel: 'Active',
      tabBarIcon: ({focused, tintColor }) => (
          <Icon
              focused={focused}
              name={Platform.OS === 'ios' ? 'alarm-clock' : 'alarm-sharp'}
              style={{ fontSize:27, color: tintColor }}
          />
      )}
  },
  Deals: { 
    screen: DealsNavigator,
    navigationOptions : {
      tabBarLabel: 'Deals',
      tabBarIcon: ({focused, tintColor }) => (
          <MaterialIcons
              focused={focused}
              name={Platform.OS === 'ios' ? 'ios-home' : 'room-service'}
              style={{ fontSize:30, color: tintColor }}
  
          />
      )}
  },
  New: { 
    screen: NewNavigator,
    navigationOptions : {
      tabBarLabel: 'New',
      tabBarIcon: ({focused, tintColor }) => (
          <SimpleLineIcons
              focused={focused}
              name={Platform.OS === 'ios' ? 'ios-home' : 'plus'}
              style={{ fontSize:30, color: tintColor }}
  
          />
      )}
  },
  History: { 
    screen: HisNavigator,
    navigationOptions : {
      tabBarLabel: 'History',
      tabBarIcon: ({focused, tintColor }) => (
          <FontAwesome
              focused={focused}
              name={Platform.OS === 'ios' ? 'ios-home' : 'history'}
              style={{ fontSize:30, color: tintColor }}
  
          />
      )}
  },
  Rating: { 
    screen: RatingNavigator,
    navigationOptions : {
      tabBarLabel: 'Ratings',
      tabBarIcon: ({focused, tintColor }) => (
          <MaterialIcons
              focused={focused}
              name={Platform.OS === 'ios' ? 'ios-home' : 'rate-review'}
              style={{ fontSize:30, color: tintColor }}
  
          />
      )}
  }
  
},
{
  initialRouteName: 'Active',
  tabBarOptions: {
      activeTintColor: Colors.accentColor,
      inactiveTintColor: Colors.themeColor,
      labelPosition: 'below-icon',
      labelStyle: { fontSize: 11,fontWeight:"bold" },
      //swipeEnabled:true,
      fontWeight:'bold',
      style: {
        height: 50,
        backgroundColor: Colors.primaryColor,
       }
    },
  });






// const MealsFavTabNavigator =
//   Platform.OS === 'android'
//     ? createMaterialBottomTabNavigator(tabScreenConfig, {
//         activeTintColor: 'red',
//         shifting: true,
//         barStyle: {
//           backgroundColor: Colors.primaryColor
//         }
//       })
//     : createBottomTabNavigator(tabScreenConfig, {
//         tabBarOptions: {
//           labelStyle: {
//             fontFamily: 'open-sans'
//           },
//           activeTintColor: Colors.accentColor
//         }
//       });

// const FiltersNavigator = createStackNavigator(
//   {
//     Filters: FiltersScreen
//   },
//   {
//     navigationOptions: {
//       drawerLabel: 'Filters!!!!'
//     },
//     defaultNavigationOptions: defaultNavOptions
//   }
// );


const MainNavigator = createDrawerNavigator(
  {
    // SplashScreen: {
    //   screen: SplashScreen,
    //   navigationOptions: {
    //     title: '',
    //     headerShown: false,
    //   }},
    //   LoginScreen:{
    //     screen: LoginScreen,
    //     navigationOptions: {
    //     title: '',
    //     headerShown: false,
    //     headerMode: 'none'
    //   }},
    //   SignupScreen:{
    //     screen: SignupScreen,
    //     navigationOptions: {
    //     title: '',
    //     headerShown: false,
    //     headerMode: 'none'
    //   }},
    MealsFavs: {
      navigationOptions: {
        drawerLockMode: 'locked-closed',
        title: '',
        headerShown: false,
        headerMode: 'none'
      },
      screen: TabNavigator
    },
   
    // 
    //Forms: Forms
},
  {
    //initialRouteName:'MealsFavs',
    contentOptions: {
      //color:'White',
      activeTintColor: Colors.accentColor,
      iconContainerStyle: {
        opacity: 1,
      },
    },
    drawerBackgroundColor: Colors.primaryColor,
    drawerWidth:200,
  }
);

// const MiniNavigator = createDrawerNavigator(
//   {
//     TopFavs:{
//         screen: AppNavigator,
//         navigationOptions: {
//           drawerLabel: 'Dine'
//         }
//       }
//   },
//   {
//     contentOptions: {
//       activeTintColor: Colors.accentColor,
//       labelStyle: {
//         //fontFamily: 'open-sans-bold'
//       }
//     }
//   }
//   // {

//   // }
//   );

export default createAppContainer(MainNavigator);
