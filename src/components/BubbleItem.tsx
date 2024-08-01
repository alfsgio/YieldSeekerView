import { View } from 'react-native';
import { Avatar } from 'react-native-paper';

const BubbleItemComponent = ( {score, pos} : {score : number, pos : number } ) => {
    const getColorYield = () => {
        if (score > 1.3) return '#fa5050';  // Red
        if (score > 1.1) return '#faa450';  // Orange
        if (score > 0.9) return '#88d677';  // Green
        if (score > 0) return '#ac8bda';    // Violet
        return '#a9a9a9';                   // Grey
    };

    const getColorScore = () => {
        if (score >= 4.5) return '#ac8bda';   // Violet
        if (score >= 2.5) return '#88d677';    // Green
        if (score > 0) return '#faa450';    // Orange
        return '#fa5050';                   // Red
    };

    const baseStyle = {borderRadius: 0 };
    const colorStyle = pos === 1 ? {backgroundColor: getColorYield()} : {backgroundColor: getColorScore()};
    const conditionalStyle = pos === 1 ? {borderTopRightRadius: 10} : {borderTopLeftRadius: 10};
    const labelStyle = score.toString().length > 2 ? {fontSize: 13} : {fontSize: 15};

    return (
        <View>
            <Avatar.Text
                label={score.toString()}
                size={30}
                color={'#FFF'}
                style={[baseStyle, colorStyle, conditionalStyle]}
                labelStyle={labelStyle}
            />
        </View>
        
    );
}

export default BubbleItemComponent;