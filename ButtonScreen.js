import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';

import{Linking } from 'react-native'
import AppHeader from '../components/AppHeader';

export default class ButtonScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View>
          <AppHeader title="Covid Helpline" />
        </View>
        <View>
          <TouchableOpacity style={styles.button}
          onPress={()=>{
            Linking.openURL("https://www.who.int/emergencies/diseases/novel-coronavirus-2019")
          }}>
            <Text style={styles.text}>All Information On Covid</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 100,
              height: 50,
              backgroundColor: 'cyan',
              marginLeft: 220,
              justifyContent: 'center',
              alignItems: ' center',
              marginTop: -50,
            }}
            onPress={()=>{
            Linking.openURL("https://api.whatsapp.com/send?phone=919000000000&")
          }}>
            <Text style={styles.text}>Doctors Consultation</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 100,
              height: 50,
              backgroundColor: 'cyan',
              marginLeft: 130,
              justifyContent: 'center',
              alignItems: ' center',
              marginTop:20
              
            }}
            onPress={()=>{
                Linking.openURL('https://swiggy.com')
            }}>
            <Text style={styles.text}>Order Food</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 120,
              height: 50,
              backgroundColor: 'cyan',
              marginLeft: 50,
              justifyContent: 'center',
              alignItems: ' center',
              marginTop:20
              
            }}
            onPress={()=>{
              this.props.navigation.navigate("FamilyWrite")
            }}>
            <Text style={styles.text}>Experience Of Covid Patients</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 120,
              height: 50,
              backgroundColor: 'cyan',
              marginLeft: 200,
              justifyContent: 'center',
              alignItems: ' center',
              marginTop:-50
              
            }}
            onPress={()=>{
              Linking.openURL('https://www.healthifyme.com/blog/diet-plan-for-covid-19-affected-patients/')
            }}>
            <Text style={styles.text}>Diet Chart</Text>
          </TouchableOpacity>
        </View>
        <View></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 50,
    backgroundColor: 'cyan',
    marginLeft: 50,
    justifyContent: 'center',
    alignItems: ' center',
    marginTop: 80,
  },
  text: {
    fontWeight: 'bold',
    padding: 10,
    justifyContent: 'center',
  },
});
