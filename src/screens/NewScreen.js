import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import ShoppingCartIcon from '../components/ShoppingCartIcon';
import Colors from '../constants/Colors';
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
    headerTitle:()=> (
      <View>
        <Text style={{fontSize:20,
        color:Colors.accentColor,
        fontFamily:'Bitter-ExtraBold'}}>
        Restaurant 
    </Text>
    <Text style={{fontSize:30,
        color:Colors.blackColor,
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
