import React, {useState, useEffect, Component} from 'react';
import { useTheme } from '@ui-kitten/components';
import { ScrollView, View, StyleSheet, ImageBackground, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import ImageView from 'react-native-image-view';
import * as services from '../services/api';
import Loader from '../component/Loader';
import Colors from '../constant/Colors';
import Cbutton from '../component/Cbutton';
import Items from '../component/Items';
import Htext from '../component/Htext';
import Ntext from '../component/Ntext';
import Currency from '../component/Currency';
import CartButton from '../component/CartButton';
import Hairline from '../component/Hairline';
import AntDesign from "react-native-vector-icons/AntDesign";
import ActionButton from '../component/ActionButton';
import ImageSlider from 'react-native-image-slider';

const ProductDetails = (props) => {
  const [visible, setVisible] = React.useState(false);
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState();
  const [product, setProduct] = useState();
  const [zoomimage, setZoomImage] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const theme = useTheme();

  const Parameter = (id) => {
    return  {
      "query":{
        "filter":`{\"collections.id\": { \"$hasSome\": ["${id}"]} }`,
        "paging": { 
          "limit": 10, 
          "offset": 0
        }
      }
    }
  }

  useEffect (() => {
    services.onProductsDetailsApi(props.route.params.Producthandel).then(result => {
    setResult(result.product) 
    services.onProductsApi(Parameter(result.product.collectionIds[0])).then(data => {
      setProduct(data.products)
      console.log('data',data);
      setLoading(false)    
      })  
    })  
  },[props.route.params.Producthandel])

  const toggleFunction = () => {
    setIsVisible(!isVisible);
  }; 

  const onImageZoom = (val) => {
    setZoomImage(val)
    setVisible(true) 
  }

  if(loading===true && !product){
    return(
      <Loader/>
    )
  }
    return (
      <ScrollView style={{flex:1,backgroundColor: theme['background-basic-color-2']}}>
        <View style={{ alignSelf:'flex-start', margin:15 }}>
          <Htext color={theme['text-custome-color']} fontsize={20}>SKU: {result.sku}</Htext>
        </View>

        <View style={styles.imgslider}>
          <ImageSlider
              loopBothSides={false}
              images={result.media.items}
              customSlide={({ index, item, style, width }) => {
              return(
                <TouchableOpacity onPress={() => onImageZoom(item.image.url)} key={index} style={styles.top}>  
                  <ImageBackground source={{uri: item.image.url}} resizeMode='stretch' style={{height: "100%", width:'100%'}}/>    
                </TouchableOpacity>
              )}}
          />
        </View>  
        
        <ImageView
          glideAlways
          images={[{ source: { uri: zoomimage }}]}
          animationType='none'
          isVisible={visible}
          onClose={() => setVisible(false)}
        />

        <Htext style={{ alignSelf:'flex-start', color:theme['text-basic-color'], fontSize:35, fontFamily:'DustWest', marginLeft:15, marginTop:25, marginBottom:5 }}>{result.name}</Htext>  

        <View style={{flexDirection:'row'}}>
          <Currency style={{ flex:1,alignSelf:'flex-start', color:theme['text-custome-color'], fontSize:20, marginLeft:15 }} currencyCode={result.price.currency} amount={result.price.price}/>
          <TouchableOpacity style={{ alignSelf:'flex-end', marginRight:15 }}>
            <AntDesign name='hearto' color={theme['text-custome-color']} size={25} />
          </TouchableOpacity>
        </View> 

        <View style={{margin:20}}>
          <CartButton bwidth={"100%"}/>
        </View>

        <View style={{ margin:15 }}>
          <View style={{flexDirection:'row'}}>
            <Htext color={theme['text-custome-color']} fontsize={20}>Product Details :</Htext>
            <TouchableOpacity onPress={toggleFunction} style={{flex:1, marginTop:8, alignItems:"flex-end"}}>
              <AntDesign name={isVisible===false  ? 'down' : 'up'} color={theme['text-custome-color']} size={15}/>
            </TouchableOpacity>
          </View>
        </View>

        {isVisible ? 
          <View style={{ marginLeft:15, marginRight:15}}>
           <Ntext color={Colors.gray} fontsize={18} fontfamily='PTSans-Regular'>{result.description}</Ntext>
          </View>
        : null}

        <View style={{flexDirection: 'row', alignItems: 'center',margin:15}}>
          <Hairline/>
          <View style={{marginLeft:10, marginRight:10}}>
            <Htext color={theme['text-basic-color']} fontfamily='PTSans-Regular' fontsize={30}>Share</Htext>
          </View>
          <Hairline/>
        </View>

        <View style={styles.sharing}>
          <View style={styles.shar}><ActionButton icon='whatsapp'/></View>
          <View style={styles.shar}><ActionButton icon='facebook'/></View>
          <View style={styles.shar}><ActionButton icon='twitter'/></View>
          <View style={styles.shar}><ActionButton icon='instagram'/></View>
        </View>

        <Htext style={{ color:theme['text-basic-color'], fontSize:31, fontFamily:'CHESTER-Basic', marginBottom:10, text:'center', textAlign:'center' }}>MORE IN THIS COLLECTION</Htext>


          <FlatList
            horizontal={true}
            data={product} 
            keyExtractor={(item, index) => String(index)}
            renderItem={({item, index}) => 
            { 
              return(
                <Items onPress={() => props.navigation.navigate("ProductDetails",{ Producthandel: item.id })} item={item}/>
              )
            }}
          />

          <View style={{flex:1,justifyContent:'flex-end', alignItems:'flex-end', margin:20}}>
           <Cbutton onPress={() => props.navigation.navigate("ProductList",{ Producthandel: {id: result.collectionIds[0]} })} textcolor={Colors.mainText} bcolor="transparent" bwidth={120} bheight={42} bordercolor={Colors.mainText}>SEE ALL</Cbutton>
          </View>

        <Htext style={{ color:theme['text-basic-color'], fontSize:31, fontFamily:'CHESTER-Basic', marginBottom:10, text:'center', textAlign:'center' }}>RECENTLY VIEWED</Htext>
      
      </ScrollView>
    );
  }


const styles = StyleSheet.create({
 contenar: {
  flex:1, 
  justifyContent:'center',
   alignItems:'center',
 },
 imgslider: {
  marginLeft:15,
  marginRight:15
 },
 top: {
  width: Dimensions.get('screen').width /1 - 30,
  height: 390,
 },
 sharing: {
  justifyContent:'center',
  alignItems:'center',
  flexDirection:"row",
   marginBottom:15
 },
 shar: {
  marginLeft:10,
 }
});

export default ProductDetails;