import { View } from 'react-native';
import { Avatar } from 'react-native-paper';

const BubbleItemComponent = ( {content, pos, type} : {content : any, pos : any, type : string } ) => {
    const getColorYield = () => {
        if (content > 10) return '#a9a9a9';     // Grey
        if (content > 1.3) return '#fa5050';    // Red
        if (content > 1.1) return '#faa450';    // Orange
        if (content > 0.9) return '#88d677';    // Green
        if (content > 0) return '#ac8bda';      // Violet
        return '#a9a9a9';                       // Grey
    };

    const getColorScore = () => {
        if (content >= 4.5) return '#ac8bda';   // Violet
        if (content >= 2.5) return '#88d677';   // Green
        if (content > 0) return '#faa450';      // Orange
        return '#fa5050';                       // Red
    };

    const getColorDpe = () => {
        if (content === 'A') return '#88d677';  // Green
        if (content === 'B') return '#ffe057';  // Yellow
        if (content === 'C') return '#88d677';  // Orange
        if (content === 'D') return '#fa5050';  // Red
    }

    const baseStyle = {borderRadius: 0 };
    const colorStyle = () => {
        switch(type){
            case 'yield':
                return {backgroundColor: getColorYield()};
            case 'score':
                return {backgroundColor: getColorScore()}
            case 'dpe':
                return {backgroundColor: getColorDpe()}
            default:
                return {backgroundColor: '#80d0eb'}
        }
    }

    const conditionalStyle = () => {
        if(pos != null){
            return pos === 1 ? {borderBottomLeftRadius: 10} : {borderBottomRightRadius: 10};
        } else {
            return {borderRadius: 10}
        }
    }

    const contentString = content !== undefined && content !== null ? content.toString() : '-';
    const labelStyle = contentString.length > 2 ? { fontSize: 13 } : { fontSize: 15 };

    return (
        <View>
            <Avatar.Text
                label={contentString}
                size={40}
                color={'#FFF'}
                style={[baseStyle, colorStyle(), conditionalStyle()]}
                labelStyle={labelStyle}
            />
        </View>
        
    );
}

export default BubbleItemComponent;