import React, {useState, Component} from 'react';
import { useTheme } from '@ui-kitten/components';
import { Text, View, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import Maincontent from '../component/Maincontent';
import Colors from '../constant/Colors';
import Htext from '../component/Htext';
import Ntext from '../component/Ntext';
import Cbutton from '../component/Cbutton';
import Product_Content from '../component/Product_Content';
import Image_Content from '../component/Image_Content';
import Show_Image from '../component/Show_Image';
import Background_Image from '../component/Background_Image';
import * as StaticData from '../constant/StaticData';

const Home = (props) => {

  const theme = useTheme();
   
    return (
      <ScrollView style={{flex:1,backgroundColor: theme['background-basic-color-2']}}>
        <Maincontent/>

        <View style={{ alignSelf:'center', marginTop:25, marginBottom:25 }}>
          <Htext color={Colors.mainText} fontsize={35} fontfamily='CHESTER-Basic'>FEATURED PRODUCTS</Htext>
        </View>

        <View style={{marginTop:-15}}>
          <Product_Content/>
        </View>

        <View style={{ margin:20 }}>
          <Htext color={Colors.mainText} fontsize={35} fontfamily='DustWest'>WE CREATE PRODUCTS TO HELP YOU REACH THE FITNESS GOALS YOU NEVER KNEW YOU HAD</Htext>
        </View>

        <View style={{ marginLeft:20, marginRight:20, marginBottom:20}}>
          <Ntext color={theme['text-custome-color']} fontsize={18} fontfamily='PTSans-Regular'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</Ntext>
        </View>

        <View style={{alignSelf:'flex-start', marginLeft:20, marginBottom:15}}>
         <Cbutton textcolor={Colors.mainText} bcolor="transparent" bwith={180} bheight={42} bordercolor={Colors.mainText}>LEARN MORE</Cbutton>
        </View>

        <View style={{marginTop:45, marginBottom: 35}}>
         <Image_Content/>
        </View>

        <View style={{ marginTop:0, marginBottom:15, marginLeft:5, marginRight:5 }}>
          <Htext color={Colors.mainText} fontsize={35} fontfamily='CHESTER-Basic' lineheight={30} textalign='center'>WHAT’S YOUR PURPOSE?</Htext>
        </View>

        <View>
         <Show_Image url='https://static.wixstatic.com/media/913019_c320c0ab23b1448788d28ccdc2caf717~mv2_d_4502_3000_s_4_2.jpg/v1/fill/w_640,h_638,al_c,q_85,usm_0.66_1.00_0.01/913019_c320c0ab23b1448788d28ccdc2caf717~mv2_d_4502_3000_s_4_2.webp'/>
        </View>

        <View style={{marginTop:15, marginBottom: 15}}>
         <Show_Image url='https://static.wixstatic.com/media/913019_8f603dfde7054663a40189f5bb7bcafa~mv2_d_3000_3000_s_4_2.jpg/v1/fill/w_640,h_580,al_c,q_85,usm_0.66_1.00_0.01/913019_8f603dfde7054663a40189f5bb7bcafa~mv2_d_3000_3000_s_4_2.webp'>
          {
          <View>
            <View style={{ marginTop: 25, marginBottom:15, marginLeft:5, marginRight:5 }}>
              <Htext color={Colors.normaltext} fontsize={35} fontfamily='DustWest' textalign='center'>MUSCLE & STRENGTH</Htext>
            </View>
            <Cbutton textcolor={Colors.mainText} bcolor="transparent" bwith={180} bheight={42} bordercolor={Colors.mainText}>SELECT</Cbutton>
          
            <View style={{ marginTop: 85, marginBottom:15, marginLeft:5, marginRight:5 }}>
              <Htext color={Colors.normaltext} fontsize={35} fontfamily='DustWest' textalign='center'>PERFORMANCE & FOCUS</Htext>
            </View>
            <Cbutton textcolor={Colors.mainText} bcolor="transparent" bwith={180} bheight={42} bordercolor={Colors.mainText}>SELECT</Cbutton>
          
          </View>
          }
        </Show_Image>  
        </View>

        <View style={{ marginTop:5, marginBottom:15, marginLeft:5, marginRight:5 }}>
          <Htext color={Colors.mainText} fontsize={35} fontfamily='CHESTER-Basic' lineheight={30} textalign='center'>CAPACITYX FITNESS BLOG</Htext>
        </View>

        <View>
          <Background_Image height={1300} url='https://static.wixstatic.com/media/913019_f56865726c2e4dedb42e6c4e1f15474e~mv2.jpg/v1/fill/w_256,h_1080,al_tr,q_80/913019_f56865726c2e4dedb42e6c4e1f15474e~mv2.webp'>
            {
            <>  
            <FlatList
            data={StaticData.Fitness} 
            style={{flex:1}} 
            keyExtractor={(item, index) => String(index)}
            renderItem={({item, index}) => 
            { 
            return (
              <View style={{margin:20}}>
                <Show_Image url={item.url}>
                  {
                  <View>
                  <View style={{ marginTop: 25, marginLeft:20, marginRight:20, marginBottom: 25}}>
                    <Htext color={Colors.normaltext} fontsize={15} fontfamily='PTSans-Regular'>{item.userName}</Htext>
                    <Htext color={Colors.normaltext} fontsize={15} fontfamily='PTSans-Regular'>{item.fue_day}</Htext>

                    <View style={{ marginTop:195}}>
                    <Htext color={Colors.mainText} fontsize={35} fontfamily='DustWest'>{item.title}</Htext>
                    </View>
                  </View>
                  </View>
                  }
                </Show_Image>
              </View>
            )}}
            /> 
            <View style={{marginBottom:20}}>
              <Cbutton textcolor={Colors.mainText} bcolor="transparent" bwith={170} bheight={42} bordercolor={Colors.mainText}>READ MORE</Cbutton>
            </View> 
            </>
            }
          </Background_Image>

          {/* <View style={{alignSelf:'flex-end'}}>
            <TouchableOpacity style={styles.sidebutton}>
            </TouchableOpacity>
          </View> */}
        </View>
        

      </ScrollView>
    );
  }


const styles = StyleSheet.create({
 contenar: {
  flex:1, 
  justifyContent:'center',
  alignItems:'center',
 },
 sidebutton: {
  marginRight:10,
  width: 50,
  height: 50,
  backgroundColor:'transparent',
  borderColor: Colors.mainText,
  borderRadius:25,
  marginTop:-80,
  borderWidth:1
 }
});

export default Home;