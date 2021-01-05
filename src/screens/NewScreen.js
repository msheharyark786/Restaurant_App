import React, { useState, Component } from 'react'
import { View, StyleSheet} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import ShoppingCartIcon from '../components/ShoppingCartIcon';
import { RadioButton } from 'react-native-paper';
import Colors from '../constants/Colors';
//import DropDownPicker from 'react-native-dropdown-picker';
//import Icon from 'react-native-vector-icons/Feather';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
//import {Picker} from '@react-native-community/picker';
import { Container, Header, Content, ListItem,Picker, Text,Icon,Radio, Right, Left } from 'native-base'
import { color } from 'react-native-reanimated';
// import SqureButton from '../components/SquareButton';
// import { Container, Header, Content, Button, Text } from 'native-base';

function NewScreen() {
  const [checked, setChecked] = useState('second');
 // const [selected, setSelected]=useState('key2');
  const [selectedValue, setSelectedValue] = useState("key");
  
 
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
              {/* <View style={{  }}> */}
              <View style={styles.radioButtonContainer}>
                <RadioButton
                color='#EE0202'
                value="first"
                status={ checked === 'first' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('first')}
                />
                <Text style={{ paddingTop:10, fontSize:12, marginRight:5 }}> Discount</Text>
                
                {/* <Text > {Visa} {masterCard} </Text> */}
               
                </View>

                <View style={styles.radioButtonContainer}>   
                <RadioButton
                // style={{ paddingTop:20}}
                color='#EE0202'
                value="second"
                status={ checked === 'second' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('second')}
                />
                <Text style={{ paddingTop:10, fontSize:12, marginRight:5 }}> Other Deal</Text> 
                {/* <DropDownPicker
                  items={[
                    {label: 'Select', value: 'key'},
                    {label: 'Buy 1 Get 2', value: 'key0' },
                    {label: 'Buy 2 Get 1', value: 'key1'},
                    {label: 'Buy 2 Get 2', value: 'key2'},
                    {label: 'Special Deal', value: 'key3'},
                    {label: 'Deal for 2', value: 'key4'},
                  ]}
                  defaultValue={selectedValue}
                  containerStyle={{height: 40,width:'60%'}}
                  style={{backgroundColor: '#fafafa'}}
                  itemStyle={{
                    justifyContent: 'flex-start'
                  }}
                  dropDownStyle={{backgroundColor: '#fafafa'}}
                  onChangeItem={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                /> */}
                <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              headerStyle={{ backgroundColor: "#b95dd3" }}
              headerBackButtonTextStyle={{ color: "#fff" }}
              headerTitleStyle={{ color: "#fff" }}
              selectedValue={selectedValue}
              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
              // style={{height: 50, width: 100}}
              // itemStyle={{ backgroundColor: "grey", color: "blue", fontSize:17 }}
            >
              <Picker.Item label="Buy 1 Get 2" value="key0" />
              <Picker.Item label="Buy 2 Get 1" value="key1" />
              <Picker.Item label="Buy 2 Get 2" value="key2" />
              <Picker.Item label="Special Deal" value="key3" />
              <Picker.Item label="Deal for 2" value="key4" />
            </Picker>
                {/* <Text> {cash} </Text> */}
                </View>

              {/* </View> */}
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
  },
  radioButtonContainer:{
    // flex:2,
    // paddingTop:0,
    flexDirection: 'row',

    marginLeft:5,
   // marginRight:10

},
})

export default NewScreen
