import React from 'react';
import { SafeAreaView, FlatList, StyleSheet, ViewStyle } from 'react-native';
import { ToggleButton  } from 'react-native-paper';
import CardComponent from '../components/CardComponent';

const data = [
    {
      "index":"0",
      "city":"Antony",
      "postalCode":92160,
      "surfaceArea":23.0,
      "dpe":"D",
      "heating":"individuel",
      "parking":true,
      "extraSpaces":[],
      "conveniences":[ "ascenseur" ],
      "photoLinks":[
          "https://file.bienici.com/photo/ag921145-432359039_photos.ubiflow.net_921145_432359039_photos_1.jpg_INSOON_EB_5512801818_20240723100546",
          "https://file.bienici.com/photo/ag921145-432359039_photos.ubiflow.net_921145_432359039_photos_2.jpg_INSOON_EB_5512801818_20240723100546",
          "https://file.bienici.com/photo/ag921145-432359039_photos.ubiflow.net_921145_432359039_photos_3.jpg_INSOON_EB_5512801818_20240723100704",
          "https://file.bienici.com/photo/ag921145-432359039_photos.ubiflow.net_921145_432359039_photos_4.jpg_INSOON_EB_5512801818_20240723100704",
          "https://file.bienici.com/photo/ag921145-432359039_photos.ubiflow.net_921145_432359039_photos_5.jpg_INSOON_EB_5512801818_20240723100704",
          "https://file.bienici.com/photo/ag921145-432359039_photos.ubiflow.net_921145_432359039_photos_6.jpg_INSOON_EB_5512801818_20240723100704"
      ],
      "score":4.5,
      "price":149000.0,
      "agencyFeePercentage":0.0,
      "annualCondominiumFees":981.0,
      "rented":false,
      "procedureInProgress":false,
      "monthlyLoan":834.4308,
      "propertyTax":63.771214,
      "managementTax":89.820206,
      "monthlyCost":988.0222,
      "yield":1.11,
    },
    {
      "index":"1",
      "city":"Colombes",
      "postalCode":92700,
      "surfaceArea":21.0,
      "dpe":"D",
      "heating":"individuel",
      "parking":false,
      "extraSpaces":[ "terrasse" ],
      "conveniences":[ ],
      "photoLinks":[
          "https://file.bienici.com/photo/ag755959-397790106_photos.ubiflow.net_755959_397790106_photos_1.jpg_INSOON_EB_5512801818_20240629143705",
          "https://file.bienici.com/photo/ag755959-397790106_photos.ubiflow.net_755959_397790106_photos_2.jpg_INSOON_EB_5512801818_20240629143705",
          "https://file.bienici.com/photo/ag755959-397790106_photos.ubiflow.net_755959_397790106_photos_3.jpg_INSOON_EB_5512801818_20240629143705",
          "https://file.bienici.com/photo/ag755959-397790106_photos.ubiflow.net_755959_397790106_photos_4.jpg_INSOON_EB_5512801818_20240629143705",
          "https://file.bienici.com/photo/ag755959-397790106_photos.ubiflow.net_755959_397790106_photos_5.jpg_INSOON_EB_5512801818_20240629143705",
          "https://file.bienici.com/photo/ag755959-397790106_photos.ubiflow.net_755959_397790106_photos_6.jpg_INSOON_EB_5512801818_20240629143705",
          "https://file.bienici.com/photo/ag755959-397790106_photos.ubiflow.net_755959_397790106_photos_7.jpg_INSOON_EB_5512801818_20240629143705"
      ],
      "score":2.0,
      "price":119677.0,
      "agencyFeePercentage":0.0,
      "annualCondominiumFees":0.0,
      "rented":false,
      "procedureInProgress":false,
      "monthlyLoan":646.90985,
      "propertyTax":59.042645,
      "managementTax":70.59525,
      "monthlyCost":776.5478,
      "yield":0.92,
    },
    {
      "index":"2",
      "city":"Pontault-Combault",
      "postalCode":77340,
      "surfaceArea":27.0,
      "dpe":"D",
      "heating":"individuel",
      "parking":true,
      "extraSpaces":[ "balcon" ],
      "conveniences":[ "ascenseur", "digicode" ],
      "photoLinks":[
          "https://file.bienici.com/photo/iad-france-1629009_images.playiad.com_property_broadcast_2024_07_15_0190b6f204eec5a953c679766c0cf529.jpg",
          "https://file.bienici.com/photo/iad-france-1629009_images.playiad.com_property_broadcast_2024_07_15_0190b6f205096c18b423e4292cbccf95.jpg",
          "https://file.bienici.com/photo/iad-france-1629009_images.playiad.com_property_broadcast_2024_07_15_0190b6f20423738c91c938f8e32fd6b4.jpg",
          "https://file.bienici.com/photo/iad-france-1629009_images.playiad.com_property_broadcast_2024_07_15_0190b6f203d9a6e2b0aa16025f01e724.jpg",
          "https://file.bienici.com/photo/iad-france-1629009_images.playiad.com_property_broadcast_2024_07_15_0190b6f205f0e7404035b47882b65c08.jpg",
          "https://file.bienici.com/photo/iad-france-1629009_images.playiad.com_property_broadcast_2024_07_15_0190b6f205d7a057c0c703562b8bfe1d.jpg",
          "https://file.bienici.com/photo/iad-france-1629009_images.playiad.com_property_broadcast_2024_07_15_0190b6f2066cc6159bf396fea44858ca.jpg",
          "https://file.bienici.com/photo/iad-france-1629009_images.playiad.com_property_broadcast_2024_07_15_0190b6f205a659d0f0685ca6f7de2a57.jpg",
          "https://file.bienici.com/photo/iad-france-1629009_images.playiad.com_property_broadcast_2024_07_15_0190b6f203a0f74ceee224d2bf66e75a.jpg",
          "https://file.bienici.com/photo/iad-france-1629009_images.playiad.com_property_broadcast_2024_07_15_0190b6f204921765e09ac64ac26e902a.jpg",
          "https://file.bienici.com/photo/iad-france-1629009_images.playiad.com_property_broadcast_2024_07_15_0190b6f205b260050b0564e2a0e7924a.jpg"
      ],
      "score":2.5,
      "price":151000.0,
      "agencyFeePercentage":0.0,
      "annualCondominiumFees":936.0,
      "rented":false,
      "procedureInProgress":false,
      "monthlyLoan":847.22076,
      "propertyTax":128.4772,
      "managementTax":97.5698,
      "monthlyCost":1073.2678,
      "yield":1.43,
    },
];


const MainScreen = () => {

  const renderItem = ( {item} ) => (
    <CardComponent appart = {item} />
  );

  const [value, setValue] = React.useState('postalCode');
  const changeSort = (sortValue) => {
    switch(sortValue){
      case 'yield':
        data.sort( (a,b) => a.yield - b.yield);
        break;
      case 'city':
        data.sort( (a,b) => a.postalCode - b.postalCode);
        break;
      case 'size':
        data.sort( (a,b) => a.surfaceArea - b.surfaceArea);
        break;
      case 'score':
        data.sort( (a,b) => b.score - a.score );
        break;
      default:
        data.sort( (a,b) => a.postalCode - b.postalCode);
        break;
    }
    
    setValue(sortValue)
  }

  return (
    <SafeAreaView style= {style.safearea}>
        <ToggleButton.Row style= {style.safearea.togglerow} onValueChange={sortValue => changeSort(sortValue)} value={value}>
            <ToggleButton icon="home-group-plus" value="yield" />
            <ToggleButton icon="home-city" value="city" />
            <ToggleButton icon="vector-square" value="size" />
            <ToggleButton icon="card-account-details-star-outline" value="score" />
        </ToggleButton.Row>

        <FlatList
          data = {data}
          renderItem = {renderItem}
          keyExtractor={renderItem => renderItem.index}
        />
      </SafeAreaView >
  );
}

const style = StyleSheet.create({
  safearea: {
    flex: 1,
    togglerow: {
      justifyContent: 'center',
      marginVertical: 10,
    } as ViewStyle,
  },
});

export default MainScreen;