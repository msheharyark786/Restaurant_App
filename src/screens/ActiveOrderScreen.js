import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';

function ActiveOrderScreen() {
    return (
        <View style={styles.screen}>
            <Text>
                No Active Order Record
            </Text>
        </View>
    )
}

ActiveOrderScreen.navigationOptions = navData => {
    return {
      headerTitle: 'Rating',
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

export default ActiveOrderScreen
