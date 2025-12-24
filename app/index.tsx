import Header from "@/components/Header";
import ProductItem from "@/components/ProductItem";
import { products } from "@/data/products";
import React from "react";
import { ScrollView, Text, View } from "react-native";




const Index = () => {

  let productlist = products.map ((product) => (
    <ProductItem key={product.name} name={product.name} image={product.image} price={product.price}/>

    
  ));

  return (
    <View style= {{backgroundColor: "#d6ccc2"}} >

<ScrollView contentContainerStyle={{ alignItems: 'center', paddingBottom: 30}}>
   
<Header/>

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