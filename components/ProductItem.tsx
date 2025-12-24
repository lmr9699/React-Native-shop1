import { Product } from '@/data/products'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'



const ProductItem = ({name, price, image}: Product) => {
    return (
        <View >
        <Image source={image} style = {styles.image} />
        <Text style = {styles.item}>{name}</Text>
        <Text style = {styles.item}>{price}KD</Text>
        
      </View>
)}

  

export default ProductItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    item: {
        width: 140,
        height: 20,
        borderRadius: 20,
        marginTop: 5,
        
    },
    image: {
        width: 140,
        height: 120, 
        borderRadius: 10

    }
})
