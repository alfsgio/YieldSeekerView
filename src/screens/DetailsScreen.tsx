import React from 'react';
import { SafeAreaView, View, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { IconButton, Card, Text } from 'react-native-paper';
import BubbleItemComponent from '../components/BubbleItem';
import DetailsItem from '../components/DetailsItem';

const DetailsScreen = ({ route }) => { 
  const {appart} = route.params;
  const [actualPos, setActualPos] = React.useState(0);
  const handleButtonPress = (photoLinks: Array<String>, direction: String) => {
      switch(direction){
          case 'left':
              setActualPos((prevPos) => (prevPos > 0 ? prevPos - 1 : prevPos));
              break;
              case 'right':
                  setActualPos((prevPos) => (prevPos < photoLinks.length - 1 ? prevPos + 1 : prevPos));
                  break;
                  default:
                      break;
                  }
              };
              
  return (
    <SafeAreaView>
      <View style={style.card.container}>
        <Card style={style.card}>
            <View style={style.card.cover.container}>
                <Card.Cover style={style.card.cover} source={{ uri: appart.photoLinks[actualPos] }} />
                <View style={style.card.buttons.container}>
                    <IconButton
                        icon="arrow-left-drop-circle" 
                        style={[style.card.buttons.arrow, style.card.buttons.arrow.left]}
                        iconColor={"#FFF"}
                        size={35}
                        onPress={() => handleButtonPress(appart.photoLinks, 'left')}>
                    </IconButton>
                    <IconButton
                        icon="arrow-right-drop-circle"
                        style={[style.card.buttons.arrow, style.card.buttons.arrow.right]}
                        iconColor={"#FFF"}
                        size={35}
                        onPress={() => handleButtonPress(appart.photoLinks, 'right')}>
                    </IconButton>
                </View> 
            </View>
            <Card.Content style={style.card.content}>
              <View style={style.card.content.bubbles}>
                <BubbleItemComponent content={appart.yield} pos={null} type='yield' />
                <BubbleItemComponent content={appart.score} pos={null} type='score'/>
                <BubbleItemComponent content={appart.dpe} pos={null} type='dpe'/>
                <BubbleItemComponent content={`${appart.surfaceArea}m²`} pos={null} type=''/>
              </View>

              <DetailsItem style={style.card.content.detailsitem} title={'Prix'} body={`${appart.price} €`}/>
              <DetailsItem style={style.card.content.detailsitem} title={'Ville'} body={`${appart.city} - ${appart.postalCode}`}/>
              <DetailsItem style={style.card.content.detailsitem} title={'Chauffage'} body={appart.heating}/>
              <DetailsItem style={style.card.content.detailsitem} title={'Parking'} body={appart.parking.toString()}/>
              <DetailsItem style={style.card.content.detailsitem} title={'Loué'} body={appart.rented.toString()}/>
              <DetailsItem style={style.card.content.detailsitem} title={'Procédure'} body={appart.procedureInProgress.toString()}/>
              <DetailsItem style={style.card.content.detailsitem} title={'Chauffage'} body={appart.heating}/>
              <DetailsItem style={style.card.content.detailsitem} title={'Chauffage'} body={appart.heating}/>
              <DetailsItem style={style.card.content.detailsitem} title={'Chauffage'} body={appart.heating}/>
              <DetailsItem style={style.card.content.detailsitem} title={'Chauffage'} body={appart.heating}/>
              <DetailsItem style={style.card.content.detailsitem} title={'Chauffage'} body={appart.heating}/>
            </Card.Content>
        </Card>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  card: {
    height: '100%',
    container: {
      paddingTop: 20,
      paddingHorizontal: 20,
    } as ViewStyle,
    cover: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        container: { }
    } as ViewStyle,
    buttons: {
        container:{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        arrow: {
          shadowColor: '#000',
          shadowOpacity: 0.5,
          shadowRadius: 1.5,
        },
    } as ViewStyle,
    content: {
        marginTop: 10,
        bubbles:{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginBottom: 10,
        } as ViewStyle,
    } as ViewStyle,
  } as ViewStyle,
});

export default DetailsScreen;