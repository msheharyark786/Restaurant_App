import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import ShoppingCartIcon from '../components/ShoppingCartIcon';
import Colors from '../constants/Colors';
import HeaderButton from '../components/HeaderButton';

function CurrentOrderScreen() {
    return (
        <View style={styles.screen}>
            <Text>
                No Current Order  Record
            </Text>
        </View>
    )
}

CurrentOrderScreen.navigationOptions = navData => {
    return {
      headerTitle: 'HISTORY',
      headerLeft: ()=>null
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

export default CurrentOrderScreen
