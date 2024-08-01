import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { IconButton, Card, Text } from 'react-native-paper';
import { Appartment } from '../models/Appartment';
import BubbleItemComponent from './BubbleItem';

const CardComponent = ( {appart} : {appart : Appartment} ) => {
    
    const [actualPos, setActualPos] = useState(0);
    
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
        <Card style={style.card}>
            <View>
                <Card.Cover style={style.card.cover} source={{ uri: appart.photoLinks[actualPos] }} />
                <View style={style.card.cover.scores}>
                    <BubbleItemComponent score={appart.yield} pos={1}/>
                    <BubbleItemComponent score={appart.score} pos={2}/>
                </View>
                <View style={style.card.cover.buttons}>
                    <IconButton
                        icon="arrow-left-bold-circle" 
                        style={style.card.cover.buttons.arrow}
                        iconColor={"#FFF"}
                        size={30}
                        onPress={() => handleButtonPress(appart.photoLinks, 'left')}>
                    </IconButton>

                    <IconButton
                        icon="arrow-right-bold-circle"
                        style={style.card.cover.buttons.arrow}
                        iconColor={"#FFF"}
                        size={30}
                        onPress={() => handleButtonPress(appart.photoLinks, 'right')}>
                    </IconButton>
                </View>
            </View>

            {/* <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
            </Card.Actions> */}
            <Card.Content style={style.card.content}>
                
                <Text>Card title</Text>
                <Text variant="bodyMedium">Card content</Text>
            </Card.Content>
        </Card>
    );
    
}

const style = StyleSheet.create({
    card: {
        marginVertical: 10,
        marginHorizontal: 20,

        cover: {
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            scores: {
                position: 'absolute',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
            },
            buttons: {
                position: 'absolute',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
    
                arrow: {
                    shadowColor: '#000',
                    shadowOpacity: .5,
                    shadowRadius: 1.5,
                },
            },
        },
        
        content: {
            marginVertical: 10,
            container: {
                flexDirection: 'row',
                justifyContent: 'space-between'
            },
        },
    },
});

export default CardComponent;