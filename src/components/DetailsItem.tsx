import React from 'react';
import { View, StyleSheet, ViewStyle, Text, TextStyle } from 'react-native';

const DetailsItem = ( {title, body} : {title : string, body : string } ) => {
  return (
    <View style={style.item}>
      <Text style={style.item.title}>{`${title} : `}</Text>
      <Text style={style.item.body}>{body}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  item:{
    flexDirection: 'row',
    marginVertical: 4,
    title: {
      fontSize: 16,
      alignSelf: 'center',
      fontWeight: '500',
    },
    body:{
      fontSize: 16,
      alignSelf: 'center',
    }
  }
});

export default DetailsItem;