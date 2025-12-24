import ProductItem from "@/components/ProductItem";
import { products } from "@/data/products";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";




const Index = () => {

  let productlist = products.map ((product) => (
    <ProductItem key={product.name} name={product.name} image={product.image} price={product.price}/>


  ));

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#d6ccc2"
      }}>  
       <ScrollView contentContainerStyle={{ alignItems: 'center', paddingBottom: 30}}>
       
       <Text style={{
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        textTransform: 'uppercase',
        marginTop: 20,
       }}>cookies & beyond</Text>

       <Text style={{
        fontSize: 24,
        fontWeight: 'normal',
        color: '#343a40',
        textAlign: 'center',
        textTransform: 'none'
       }}>sweeeeeeeeeeeeeeeeeet</Text>

       <Image
       source = {require('../assets/images/cookies-store.jpeg')}
       style = {{width: 320, height:200, borderRadius: 55, marginTop: 20}}
     
       />

       {/* Product card = classic cookies */}
       <View style={{
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 15,
        marginTop: 20,
        alignItems: 'center',
        width: 280,
       }}>
        <Text style={{
          margin: 5,
          fontSize: 18,
          fontWeight: 'bold',
          color: '#333',
        }}>Classic Cookies</Text>
       </View>

       {/* prodect Grid */}
       <View style = {{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        margin: 40,
        padding: 10,

       }}>
        {productlist}
       </View>
       

       

       </ScrollView>
       </View>

      
  );
}
export default Index;