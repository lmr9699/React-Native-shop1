import React, { useState } from "react";
import { Image, Pressable, Text, View, } from "react-native";

const Header = () => {

    const [visitors, setVisitors] = useState(0);


    const handleVisitorsClick = () => {
        setVisitors(visitors + 1)
    };

    return (
        <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
          alignItems: "center",
          
        }}>  
         
         
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


         <Pressable onPress={handleVisitorsClick} style={{
            backgroundColor: '#8B4513',
            paddingVertical: 12,
            paddingHorizontal: 24,
            borderRadius: 25,
            marginTop: 15,
         }}>
            <Text style={{
               color: 'white',
               fontSize: 16,
               fontWeight: 'bold',
            }}>

                people have visited  ({visitors})
                </Text>
                </Pressable>

         </View> 
    )
}

export default Header