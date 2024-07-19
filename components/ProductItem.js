import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ProductItem = ({item}) => {
  return (
    <Pressable style={{marginHorizontal:20,marginVertical:25}}>
      <Image style={{width:150,height:150,resizeMode:'contain'}} source={{uri:item?.image}} />
      <Text numberOfLines={1} style={{width:150,marginTop:10,fontWeight:"500"}}>{item?.title} </Text>
      <View style={{marginTop:5,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
        <Text style={{fontSize:16,fontWeight:'bold'}}>$ {item?.price} </Text>
        <View  style={{backgroundColor:"green",padding:3,borderRadius:5}}>
        <Text style={{color:'white',fontSize:16,fontWeight:'500'}}>{item?.rating?.rate}  rating</Text>

        </View>
      </View>
      <TouchableOpacity style={{backgroundColor:'#ffc72c',padding:6,borderRadius:20,justifyContent:'center' ,alignItems:'center', marginHorizontal:10,marginTop:10}}>
        <Text style={{fontWeight:'500'}}>Add to Cart</Text>
      </TouchableOpacity>
    </Pressable>
  )
}

export default ProductItem

const styles = StyleSheet.create({})