import React, {Component} from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, ScrollView} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import DatePicker from 'react-native-datepicker';
import Constants from "expo-constants";
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default class signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      userName: '',
      eMail: '',
      password: '',
      date:1 +"-"+ 1 +"-"+ (new Date().getFullYear() - 6),

     data: [
      {
          label: 'Male',
          color: 'blue',
      },
      {
        label: 'Female',
        color: 'red',
      },
    ],

    };
  }

  onPress = data => this.setState({ data });

  render() {
    let genderSelectedButton = this.state.data.find(e => e.selected == true);
    genderSelectedButton = genderSelectedButton ? genderSelectedButton.value : this.state.data[0].label;

    return (
      <View style={styles.MainContainer}>
      <View style={styles.statusBar}>
        <TouchableOpacity //onPress={}
        style={styles.backward}>
           <MaterialCommunityIcons name="keyboard-backspace" size={36} color="black" />
        </TouchableOpacity>
        <Text  style={styles.statusBarText}>Registration Form</Text>
      </View>

          <ScrollView style={styles.ScrollContainer}>
                    <Text style={styles.inputLabel}>First Name</Text>
                    <TextInput placeholder="Fex. Axel" style={styles.input} />
                    <Text style={styles.inputLabel}>Last Name</Text>
                    <TextInput placeholder="ex. Brock" style={styles.input} />
                    <Text style={styles.inputLabel}>Username</Text>
                    <TextInput placeholder="ex. Whatever" style={styles.input} />
                    <Text style={styles.inputLabel}>Email</Text>
                    <TextInput placeholder="ex. whatever@whatever.com" style={styles.input}/>
                    <Text style={styles.inputLabel}>Password</Text>
                    <TextInput placeholder="ex. bG0J5GW2g^16%klm" style={styles.input}/>
                    <Text style={styles.inputLabel}>Confirm Password</Text>
                    <TextInput placeholder="Re-type your password..." style={styles.input}/>

                    <Text style={styles.inputLabel}>Pick your Gender</Text>
                    <View style={styles.bottomViewContainer}>
                      <RadioGroup radioButtons={this.state.data} onPress={this.onPress} flexDirection='row' />
                    </View>

                    <Text style={styles.inputLabel}>Birth Date</Text>
                    <View style={styles.bottomViewContainer}>
                    <DatePicker
                    style={ styles.datePicker}
                    date={this.state.date}
                    mode="date"
                    placeholder="select date"
                    format="DD-MM-YYYY"
                    minDate="1950-01-01"
                    maxDate={new Date().getDate()+"-"+(new Date().getMonth()+1)+"-"+new Date().getFullYear()}
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    onDateChange={(date) => {this.setState({date: date})}}/>
                    </View>


                    <View style={styles.touchableOpacityView}>
                      <TouchableOpacity style={styles.touchableOpacitySign}>
                        <Text style={styles.touchableOpacityTextSign}>Sign Up</Text>
                      </TouchableOpacity>
                    </View>
          </ScrollView>

      </View>);
  }
}
const styles = StyleSheet.create({
  statusBar: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor:'#e8e8e8',
    flexDirection: 'row',
      justifyContent:'flex-start',
        paddingVertical: 8,
        alignItems:'center'
  },
  backward :{
    paddingTop:8,
    paddingLeft:14,
    alignItems:'center'
  },
  statusBarText : {
    fontSize: 24,
    paddingTop:5,
    paddingLeft:20
  },
  MainContainer: {
    flex: 1,
   backgroundColor: '#f9f9f9',
  },

  ScrollContainer: {

  },

  bottomViewContainer:{
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#a6a6a6',
    padding: 8,
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 6,

  },

  genderText:{
    fontSize: 18,
  },

  input: {
    fontSize:18,
    paddingHorizontal: 20,
    paddingVertical:8,
     alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#a6a6a6',
    width: '80%',
    backgroundColor: 'transparent',
    borderRadius: 6
  },

  touchableOpacityView: {
    marginVertical: 20,
    width: 180,
    height: 50,
    alignSelf: "center"
  },

  touchableOpacitySign: {
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 50,
    alignSelf: "center",
  backgroundColor: "#e8e8e8",
  },

  touchableOpacityTextSign: {
    fontWeight: "bold"
  },
  inputLabel : {
       alignSelf: 'center',
    fontSize:18,
        width: '80%',
        marginBottom: 6,
        marginTop: 10
  },
   datePicker : {
     width: '100%'
   }
});
