import React from 'react';
import { View, TouchableOpacity, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { IconButton, Card, Text } from 'react-native-paper';
import { Appartment } from '../models/Appartment';
import BubbleItemComponent from './BubbleItem';

const CardComponent = ( {appart} : {appart : Appartment} ) => {
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
                
    const navigation = useNavigation();
    const navigateToDetails = ({ appart }: { appart: Appartment }) => { navigation.navigate('Details', { appart }); }
    return (
        <TouchableOpacity onPress={() => navigateToDetails({ appart })}>
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
                    <BubbleItemComponent content={appart.yield.toFixed(2)} pos={1} type='yield'/>
                    <Text style={style.card.content.title}>{appart.postalCode.toString().substring(0, 2)} {appart.city} - {appart.surfaceArea} m²</Text>
                    <BubbleItemComponent content={appart.score.toFixed(2)} pos={2} type='score'/>
                </Card.Content>
            </Card>
        </TouchableOpacity>
    );
}

const style = StyleSheet.create({
    card: {
        marginVertical: 10,
        marginHorizontal: 20,
        cover: {
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            container: {

            }
        },
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
        },
        content: {
            marginBottom: 0,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 0,
            paddingBottom: 0,
            title: {
                fontSize: 16,
                fontWeight: '500',
            } as TextStyle,
        },
    },
});

export default CardComponent;