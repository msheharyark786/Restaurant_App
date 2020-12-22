import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import ShoppingCartIcon from '../components/ShoppingCartIcon';
import Colors from '../constants/Colors';
import HeaderButton from '../components/HeaderButton';

function PendingOrderScreen() {
    return (
        <View style={styles.screen}>
            <Text>
                No Pending Order
            </Text>
        </View>
    )
}

PendingOrderScreen.navigationOptions = navData => {
    return {
        tabBarIcon:({tintColor, focused})=>(  
            <Icon  
                name={focused ? 'ios-home' : 'md-home'}  
                color={tintColor}  
                size={25}  
            />  
        )  ,
    //   headerTitle: 'PENDING',
    //   headerLeft: ()=>null
      //   <HeaderButtons HeaderButtonComponent={HeaderButton}>
      //     <Item
      //       title="Menu"
      //       iconName="ios-menu"
      //       onPress={() => {
      //         navData.navigation.toggleDrawer();
      //       }}
      //     />
      //   </HeaderButtons>
      // )
    };
  };

const styles=StyleSheet.create({
  screen:{
    flex:1,
    fontSize:20,
    justifyContent:'center',
    paddingLeft:120,
    fontFamily:'open-sans-bold'

}
})

export default PendingOrderScreen
