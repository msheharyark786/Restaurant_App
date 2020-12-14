import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';

function NewScreen() {
    return (
        <View style={styles.screen}>
            <Text>
                No New Record
            </Text>
        </View>
    )
}

NewScreen.navigationOptions = navData => {
    return {
      headerTitle: 'NewScreen ',
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

export default NewScreen
