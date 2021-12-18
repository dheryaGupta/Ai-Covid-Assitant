import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import { ListItem } from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';
import AppHeader from '../components/AppHeader';

export default class FamilyReadScreen extends Component {
  constructor() {
    super();
    this.state = {
      allStories: [],
      experienceList: [],
    };
    this.requestRef = null;
  }

  renderItem = ({ item, i }) => {
    return (
      <ListItem
        key={i}
        title={item.name}
        subtitle={item.experience}
        list={item.isFamily}
        titleStyle={{ color: 'black', fontWeight: 'bold' }}
      
        rightElement={
          <TouchableOpacity style={styles.button}
           onPress={() => {
              this.props.navigation.navigate("InformationScreen", {
                details: item,
              });
            }}>
            <Text style={{ color: '#ffff' }}>View</Text>
          </TouchableOpacity>
        }
        bottomDivider
      />
    );
  };
  componentDidMount() {
    this.retrieveStories();
  }

  retrieveStories = () => {
    try {
      var allStories = [];
      var stories = db
        .collection('experience')
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            allStories.push(doc.data());
            console.log('experience', allStories);
          });
          this.setState({ allStories });
        });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <View style={styles.view}>
        <AppHeader title="Your Covid Story"  />
        <View style={{ flex: 1 }}>
          {this.state.allStories.length === 0 ? (
            <View style={styles.subContainer}>
              <Text style={{ fontSize: 20 }}>List Of All Requested Books</Text>
            </View>
          ) : (
            <FlatList
              keyExtractor={this.keyExtractor}
              data={this.state.allStories}
              renderItem={this.renderItem}
            />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#32867d',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
  },
});
