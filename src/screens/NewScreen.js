import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import ShoppingCartIcon from '../components/ShoppingCartIcon';
import Colors from '../constants/Colors';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { color } from 'react-native-reanimated';
// import SqureButton from '../components/SquareButton';
// import { Container, Header, Content, Button, Text } from 'native-base';

function NewScreen() {
    return (
      <View style={{flex: 1, }}>
        <Text style={{ alignSelf: 'center', marginTop:15, fontWeight:"bold", fontSize:16 }}>Add a new deal</Text>
      <ProgressSteps 
        style={{fontSize:20}} 
        completedProgressBarColor={Colors.accentColor} 
        completedStepIconColor={Colors.accentColor} 
        activeLabelColor={Colors.accentColor} 
        completedLabelColor={Colors.accentColor}
        activeStepNumColor={Colors.accentColor}
        // disabledStepNumColor={Colors.accentColor}
        disabledStepIconColor={Colors.themeColor}
        progressBarColor={Colors.themeColor}
        activeStepIconBorderColor	={Colors.accentColor}
        labelColor="black"
        // disabledStepIconColor="white"
        // borderStyle={color="black"}
        
        //activeLabelFontWeight="bold"
        >
          <ProgressStep label="First Step" removeBtnRow={false}  nextBtnTextStyle={{color:Colors.orangeColor}} previousBtnTextStyle={{color:Colors.orangeColor}}	>
              <View style={{ alignItems: 'center' }}>
                  <Text style={{fontSize:20, marginTop:10}}>(This is the content within step 1!)</Text>
              </View>
          </ProgressStep>
          <ProgressStep label="Second Step" nextBtnTextStyle={{color:Colors.orangeColor}} previousBtnTextStyle={{color:Colors.orangeColor}}>
              <View style={{ alignItems: 'center' }}>
                  <Text style={{fontSize:20, marginTop:60}}>This is the content within step 2!</Text>
              </View>
          </ProgressStep>
          <ProgressStep label="Third Step" nextBtnTextStyle={{color:'green'}} previousBtnTextStyle={{color:Colors.orangeColor}}>
              <View style={{ alignItems: 'center' }}>
                  <Text style={{fontSize:20, marginTop:60}}>This is the content within step 3!</Text>
              </View>
          </ProgressStep>
      </ProgressSteps>
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
