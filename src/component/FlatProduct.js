import React,{useEffect, useState} from 'react';
import { StyleSheet, View, Image, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import { useTheme } from '@ui-kitten/components';
import Colors from '../constant/Colors';
import Currency from '../component/Currency';
import Htext from '../component/Htext';
import AntDesign from "react-native-vector-icons/AntDesign";

 const FlatProduct = (props) => { 
  const [orientation, setOrientation] = useState("PORTRAIT");
  const theme = useTheme();

  useEffect(() => {
    Dimensions.addEventListener('change', ({window:{width,height}})=>{
      if (width<height) {
        setOrientation("PORTRAIT")
      } else {
        setOrientation("LANDSCAPE")
    
      }
    })

  }, []);

  const renderItem = ({item}) => {
    return (
      <View>
        <TouchableOpacity onPress={() => props.onPress(item)}> 
          <View style={styles.top}>
            <Image source={{ uri: item.media.items[0].image.url}} resizeMode='stretch' style={{height: "100%", width:'100%'}}/>
          </View>
          <View style={{width: 160, margin:10}}>
            <Htext style={{textAlign:"center", paddingLeft:10, paddingRight:10, color: theme['text-basic-color'], fontFamily:'PTSans-Regular', fontSize:15, fontWeight:'800' }}>{item.name}</Htext>
          </View>
        </TouchableOpacity>
        <View style={styles.cover}>
          <Currency style={{color: theme['text-basic-color'],textAlign:"center", margin:10, fontSize:15}} currencyCode={item.price.currency} amount={item.price.price}/>
          <TouchableOpacity onPress={props.onPress1}>
            <AntDesign style={{ marginLeft:10,marginTop:12}} name='hearto'  color={theme['text-basic-color']} size={15} />
          </TouchableOpacity>  
        </View>
      </View>
    )
  }
    
  return (
    <View>
    {props?.showlayout ? (
    <FlatList
      key={'_'}
      horizontal={props.showlayout}
      data={props.productdata} 
      keyExtractor={(item, index) => String(index)}
      extraData={Colors}
      renderItem={renderItem}
    />
    ):(
    orientation==='LANDSCAPE'?( 
    <FlatList 
      key={'#'} 
      numColumns={4}
      data={props.productdata} 
      keyExtractor={(item, index) => String(index)}
      extraData={Colors, orientation}
      renderItem={renderItem}
    />  
    ): (
      <FlatList  
      numColumns={2}
      data={props.productdata} 
      keyExtractor={(item, index) => String(index)}
      extraData={Colors, orientation}
      renderItem={renderItem}
    />
    )
    )}
    </View>
  );
}

const styles = StyleSheet.create({
  top: {
   position: 'relative',
   width: Dimensions.get('screen').width / 2 - 20,
   height: 250,
   margin: 10,
   borderWidth:1,
   borderColor:Colors.mainText
  },
  titleStyle:{
    fontFamily:'Roboto',
    textAlign:'center',
    color:'gray',
    fontSize:25,
  },
  cover: {
    flexDirection:"row",
    justifyContent:"center",
  },
});

export default FlatProduct;