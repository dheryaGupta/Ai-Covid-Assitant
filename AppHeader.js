import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, Text, StyeSheet ,Alert} from 'react-native';

const AppHeader = props => {
  return (
    <Header
    leftComponent={<Icon name='bars' type='font-awesome' color='magenta'  onPress={() => this.props.navigation.toggleDrawer()}/>}
      centerComponent={{ text: props.title, style: { color: 'magenta', fontSize:16,fontWeight:"bold", width:200, alignItems:"center"} }}
      backgroundColor = "#eaf8fe"
    />
  );
};

export default AppHeader;
