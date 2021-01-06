import React, { useState, Component } from 'react'
import { View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import ShoppingCartIcon from '../components/ShoppingCartIcon';
import { RadioButton } from 'react-native-paper';
import Colors from '../constants/Colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from '@react-native-community/datetimepicker';
import Card from '../components/Card';
import SubCard from '../components/SubCard';
import CheckBox from '@react-native-community/checkbox';
//import DropDownPicker from 'react-native-dropdown-picker';
//import Icon from 'react-native-vector-icons/Feather';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import TimePicker from 'react-native-simple-time-picker';
//import {Picker} from '@react-native-community/picker';
import { Container, Header, Content, ListItem,Picker, Text,Icon,Radio, Right, Left } from 'native-base';
import DateSetter from '../components/DateSetter';

// import SqureButton from '../components/SquareButton';
// import { Container, Header, Content, Button, Text } from 'native-base';

function NewScreen() {
  const [checked, setChecked] = useState('second');
 // const [selected, setSelected]=useState('key2');
  const [selectedValue, setSelectedValue] = useState("key");
  const [selectedSeats, setSelectedSeats] = useState("k");
  const [selectedTime, setSelectedTime] = useState("t");
  const [count, setCount] = useState(5);
  const [seatCount, setSeatCount] = useState(25);
  const [reserveCount, setReserveCount] = useState(6);
  const [takeawayCount, setTakeawayCount] = useState(25);
  const [isTakeawaySelected, setTakeawaySelection] = useState(false);
  const [isDineSelected, setDineSelection] = useState(false);
  // const [count, setCount] = useState(5);
  const [selectedHours, setSelectedHours] = useState(0);
  const [selectedMinutes, setSelectedMinutes] = useState(0);
  const buttonView={
    // marginTop:10,
    alignSelf: 'center', 
    paddingBottom:10,
    justifyContent: 'center',
    marginHorizontal:100,
    width:'100%',
    height:40,
    backgroundColor: Colors.accentColor,
    borderRadius:30,
  };
  const buttonText={
    color:'#ffffff',
    fontWeight:'bold',
    fontSize: 20,
    alignSelf:"center"
  };
  
  const buttonView2={
    // marginTop:10,
    flexDirection:'row',
    // alignSelf: 'flex-end', 
    paddingBottom:10,
    // marginRight:0,
    // marginLeft:33,
    justifyContent: 'center',
    marginHorizontal:55,
    width:'100%',
    height:40,
    backgroundColor: Colors.accentColor,
    borderRadius:30,
  };
  const buttonText2={
    color:'#ffffff',
    fontWeight:'bold',
    fontSize: 20,
    alignSelf:"center"
  };
  const buttonView3={
    // marginTop:10,
    flexDirection:'row',
    // alignSelf: 'flex-end', 
    paddingBottom:10,
    // marginRight:0,
    // marginLeft:33,
    justifyContent: 'center',
    marginHorizontal:45,
    width:'100%',
    height:40,
    backgroundColor: Colors.accentColor,
    borderRadius:30,
  };
  const buttonText3={
    color:'#ffffff',
    fontWeight:'bold',
    fontSize: 20,
    alignSelf:"center"
  };
  const prebuttonView2={
    // marginTop:10,
    flexDirection:'row',
    alignSelf: 'flex-end', 
    paddingBottom:10,
    marginLeft:10,
    marginRight:15,
    justifyContent: 'center',
    // marginHorizontal:50,
    width:'130%',
    height:40,
    backgroundColor: Colors.accentColor,
    borderRadius:30,
  };
  const prebuttonText2={
    color:'#ffffff',
    fontWeight:'bold',
    fontSize: 20,
    alignSelf:"center"
  }


  // const MyIcon1 = <FontAwesome name="minus" size={18} color="#EE0202" solid />;
  //   const MyIcon2 = <FontAwesome name="plus" size={18} color="#EE0202" solid />;
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'android');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
  
    const plusHandler=()=>{

      setCount(count + 5)
      // const p= totalAmount + payment;
      // setPayment(p);
    }

    const minusHandler=()=>{
     if(count==5){
         return 5;
     }
     else{
         setCount(count - 5)
     } 
    //  const p=  payment - totalAmount ;
    //  setPayment(p);
    }

    const plusHandlerSeats=()=>{

      setSeatCount(seatCount + 5)
      // const p= totalAmount + payment;
      // setPayment(p);
    }

    const minusHandlerSeats=()=>{
     if(seatCount==5){
         return 5;
     }
     else if(seatCount==150){
      return 150;
    }
     else{
      setSeatCount(seatCount - 5)
     } 
    //  const p=  payment - totalAmount ;
    //  setPayment(p);
    }

    const plusHandlerReserve=()=>{

      setReserveCount(reserveCount + 2)
      // const p= totalAmount + payment;
      // setPayment(p);
    }

    const minusHandlerReserve=()=>{
     if(reserveCount==2){
         return 2;
     }
     else if(reserveCount==14){
      return 14;
    }
     else{
      setReserveCount(reserveCount - 2)
     } 
    //  const p=  payment - totalAmount ;
    //  setPayment(p);
    }
    const plusHandlerTakeaway=()=>{

      setTakeawayCount(takeawayCount + 5)
      // const p= totalAmount + payment;
      // setPayment(p);
    }

    const minusHandlerTakeaway=()=>{
     if(takeawayCount==5){
         return 5;
     }
     else if(takeawayCount==50){
      return 50;
    }
     else{
      setTakeawayCount(takeawayCount - 5)
     } 
    //  const p=  payment - totalAmount ;
    //  setPayment(p);
    }
    return (
      <View style={{flex: 1, }}>
        <ScrollView>
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
          <ProgressStep label="First Step" removeBtnRow={false} nextBtnStyle={buttonView} nextBtnTextStyle={buttonText} previousBtnTextStyle={{color:Colors.orangeColor}}	>
              
                
              <View style={styles.radioButtonContainer}>   
                <RadioButton
                style={{ paddingTop:20}}
                color='#EE0202'
                value="second"
                status={ checked === 'second' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('second')}
                />

                <Text style={{ paddingTop:10, fontSize:18, marginRight:'30%' }}> Deal</Text> 
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
                {/* <View style={styles.Container}> */}
                <Card>
                <Picker 
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              
              //headerStyle={{ backgroundColor: "#b95dd3" }}
             // headerBackButtonTextStyle={{ color: "#fff" }}
              //headerTitleStyle={{ color: "#fff" }}
              selectedValue={selectedValue}
              style={{ height: 50, width: 150 }}
              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
              
              // itemStyle={{ backgroundColor: "grey", color: "blue", fontSize:17 }}
            >
              <Picker.Item label="Select" value="key" />
              <Picker.Item label="Buy 1 Get 2" value="key0" />
              <Picker.Item label="Buy 2 Get 1" value="key1" />
              <Picker.Item label="Buy 2 Get 2" value="key2" />
              <Picker.Item label="Special Deal" value="key3" />
              <Picker.Item label="Deal for 2" value="key4" />
            </Picker>
            </Card>
            {/* </View> */}
                {/* <Text> {cash} </Text> */}
                </View>
               

               
              <View style={styles.radioButtonContainer}>
                <RadioButton
                color='#EE0202'
                value="first"
                status={ checked === 'first' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('first')}
                />
                <Text style={{ paddingTop:10, fontSize:18, marginRight:5 }}> Discount</Text>

                {/* <Text > {Visa} {masterCard} </Text> */}
                
                <View style={styles.discount}>
                
                <TouchableOpacity style={styles.minus} onPress={minusHandler}>
                <FontAwesome name="minus" size={20} color={Colors.themeColor} solid />
                </TouchableOpacity>
               
                <Text style={{ marginLeft:40, marginRight:40, fontSize:18, fontWeight:'bold', color:Colors.accentColor}}>{count}%</Text>

                <TouchableOpacity onPress={plusHandler}>
                <FontAwesome name="plus" size={20} color={Colors.themeColor} solid />
                </TouchableOpacity>
                
                </View> 
               
                </View>
                
                {/* <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>
          React Native Time Picker –
          To Pick the Time using Native Time Picker
        </Text>
        <Text>
          Selected Time: {selectedHours}:{selectedMinutes}
        </Text> */}
        <View style={styles.box}>
        {/* <Card> */}
        {/* <View> */}
          {/* <Card> */}
        <TouchableOpacity onPress={showTimepicker} title="Show date picker!" >
        <Text style={styles.time} >Deal Starts:      </Text>
        </TouchableOpacity>
        {/* </Card> */}
     
      {/* <View> */}
      {/* <Card> */}
        <TouchableOpacity onPress={showTimepicker} title="Show time picker!" >
        <Text style={styles.time}>Deal Ends:</Text>
        </TouchableOpacity>
        {/* </Card> */}
        {/* </View> */}

      
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
     
        </View>
       
        <Card style={{marginRight:3, marginLeft:3}}>
        <View style={{flexDirection:'row'}}>
         <CheckBox
          value={isDineSelected}
          onValueChange={setDineSelection}
          style={styles.checkbox}
        />
        <Text style={{fontWeight:'bold',marginLeft:2, marginTop:5}}>Dine In</Text>
         </View>
       <View style={{flexDirection:'row'}}>
         <Text style={{fontWeight:'bold',marginTop:15, marginLeft:3}}>Total Seats:</Text>
         <View style={styles.seats}>
            <TouchableOpacity style={styles.minus} onPress={minusHandlerSeats}>
            <FontAwesome name="minus" size={20} color={Colors.themeColor} solid />
            </TouchableOpacity>
               
            <Text style={{ marginLeft:40, marginRight:40, fontSize:18, fontWeight:'bold', color:Colors.accentColor}}>{seatCount}%</Text>
                
            <TouchableOpacity onPress={plusHandlerSeats}>
            <FontAwesome name="plus" size={20} color={Colors.themeColor} solid />
            </TouchableOpacity>
                
          </View> 

       </View>

       <View style={{flexDirection:'row'}}>
         <Text style={{fontWeight:'bold',marginTop:15, marginLeft:3}}>Seats/Reservation:</Text>
         <View style={styles.reservation}>
            <TouchableOpacity style={styles.minus} onPress={minusHandlerReserve}>
            <FontAwesome name="minus" size={20} color={Colors.themeColor} solid />
            </TouchableOpacity>
               
            <Text style={{ marginLeft:40, marginRight:40, fontSize:18, fontWeight:'bold', color:Colors.accentColor}}>{reserveCount}%</Text>
                
            <TouchableOpacity onPress={plusHandlerReserve}>
            <FontAwesome name="plus" size={20} color={Colors.themeColor} solid />
            </TouchableOpacity>
          </View> 
        </View>

     

      <View style={{flexDirection:'row'}}>
       <Text style={{fontWeight:'bold',marginTop:15, marginLeft:3}}>Max seat reserves in 30 mins:</Text>
       <Picker 
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              
              //headerStyle={{ backgroundColor: "#b95dd3" }}
             // headerBackButtonTextStyle={{ color: "#fff" }}
              //headerTitleStyle={{ color: "#fff" }}
              selectedValue={selectedSeats}
              style={{ height: 50, width: 150 }}
              onValueChange={(itemValue, itemIndex) => setSelectedSeats(itemValue)}
              
              // itemStyle={{ backgroundColor: "grey", color: "blue", fontSize:17 }}
            >
              <Picker.Item label="No Limit" value="k" />
              <Picker.Item label="5" value="k0" />
              <Picker.Item label="10" value="k1" />
              <Picker.Item label="15" value="k2" />
              <Picker.Item label="20" value="k3" />
              <Picker.Item label="25" value="k4" />
              <Picker.Item label="30" value="k5" />
              <Picker.Item label="35" value="k6" />
              <Picker.Item label="40" value="k7" />
              <Picker.Item label="45" value="k8" />
              <Picker.Item label="50" value="k9" />

            </Picker>
      </View>

      <View style={{flexDirection:'row'}}>
       <Text style={{fontWeight:'bold',marginTop:15, marginLeft:3}}>Guest seating time limit: </Text>
       <Picker 
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              
              //headerStyle={{ backgroundColor: "#b95dd3" }}
             // headerBackButtonTextStyle={{ color: "#fff" }}
              //headerTitleStyle={{ color: "#fff" }}
              selectedValue={selectedTime}
              style={{ height: 50, width: 150 }}
              onValueChange={(itemValue, itemIndex) => setSelectedTime(itemValue)}
              
              // itemStyle={{ backgroundColor: "grey", color: "blue", fontSize:17 }}
            >
              <Picker.Item label="No Limit" value="t" />
              <Picker.Item label="1:00 hr" value="t0" />
              <Picker.Item label="1:30 hr" value="t1" />
              <Picker.Item label="2:00 hr" value="t2" />
              <Picker.Item label="2:30 hr" value="t3" />
              <Picker.Item label="3:00 hr" value="t4" />

            </Picker>
      </View>
       </Card>

       <SubCard style={{marginRight:3, marginLeft:3, marginBottom:15}}>
         <View style={{flexDirection:'row'}}>
         <CheckBox
          value={isTakeawaySelected}
          onValueChange={setTakeawaySelection}
          style={styles.checkbox}
        />
        <Text style={{fontWeight:'bold',marginLeft:2, marginTop:5}}>Takeaway</Text>
         </View>
       <View  disabled={true} style={{flexDirection:'row'}}>
         <Text style={{fontWeight:'bold',marginTop:15, marginLeft:3}}>Takeaway Orders:</Text>
         <View style={styles.reservation}>
            <TouchableOpacity style={styles.minus} onPress={minusHandlerTakeaway}>
            <FontAwesome name="minus" size={20} color={Colors.themeColor} solid />
            </TouchableOpacity>
               
            <Text style={{ marginLeft:40, marginRight:40, fontSize:18, fontWeight:'bold', color:Colors.accentColor}}>{takeawayCount}%</Text>
                
            <TouchableOpacity onPress={plusHandlerTakeaway}>
            <FontAwesome name="plus" size={20} color={Colors.themeColor} solid />
            </TouchableOpacity>
          </View> 
        </View>
       </SubCard>

       {/* <View style={styles.buttonView}>
                <TouchableOpacity
                style={styles.button}
                activeOpacity={0.5}
                // onPress={func}
                >
                <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
            </View> */}
        
     
               

        
             
          </ProgressStep>
          <ProgressStep label="Second Step" nextBtnStyle={buttonView2} nextBtnTextStyle={buttonText2} previousBtnStyle={prebuttonView2} previousBtnTextStyle={prebuttonText2}>
              <View style={{ alignItems: 'center' }}>
                  <Text style={{fontSize:20, marginTop:60}}>This is the content within step 2!</Text>
              </View>
          </ProgressStep>
          <ProgressStep label="Third Step"  nextBtnStyle={buttonView3} nextBtnTextStyle={buttonText3} previousBtnStyle={prebuttonView2} previousBtnTextStyle={prebuttonText2}>
              <View style={{ alignItems: 'center' }}>
                  <Text style={{fontSize:20, marginTop:60}}>This is the content within step 3!</Text>
              </View>
          </ProgressStep>
      </ProgressSteps>
      </ScrollView>

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
  discount: {
    // marginVertical: 0,
    marginHorizontal: '16%',
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    flexDirection:'row', 
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white'
    // marginLeft:40,
    // marginTop:12
  },
 time: {
  flexDirection:'row', 
  // justifyContent:'flex-end',
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    fontSize:12,
    fontWeight:"bold"
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal:10,
    width:'70%',
    height:40,
    backgroundColor: Colors.accentColor,
    borderRadius:25,
  },
  buttonView:{
    marginTop:30,
    alignItems: 'center', 
    paddingBottom:10,
    
},
  
  buttonText: {    
    color:'#ffffff',
    fontWeight:'bold',
    fontSize: 20,
    // justifyContent:""
  },
  box: {
    flexDirection:'row', 
    marginVertical: 15,
    marginHorizontal: 5,
    borderColor: '#ccc',
    borderWidth: 1,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 5,
    backgroundColor: 'white'
    
  },
  seats: {
    marginVertical: 5,
    marginHorizontal: '27%',
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    flexDirection:'row', 
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white'
    
  },
  reservation: {
    marginVertical: 5,
    marginHorizontal: '13%',
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    flexDirection:'row', 
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white'
    
  },


  radioButtonContainer:{
    // flex:2,
    // paddingTop:0,
    flex:1,
    flexDirection: 'row',
    marginTop:10,
    marginEnd:10,
    marginLeft:1,
    // borderBottomColor:'black',
    // borderBottomWidth:0.2
   // marginRight:10
  },
  minus:{

    borderBottomColor:"red"
  },
  
  container: {
    flex: 1,
    flexDirection: 'row',
    // paddingTop: 40,
    // alignItems: "center"
  },
  pickerStyle:{  
    height: 100,  
    width: "80%",  
    color: '#344953',  
    justifyContent: 'center',  
  },
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },  
})

export default NewScreen
