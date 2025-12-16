import { Image, Text, View, } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >  
       
       <Image
      source = {require('../assets/images/best-sugar-cookies-1.jpg')}
      style = {{width: 320, height:200, borderRadius: 55,}}
     
    />
      <Text style={{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#00',
        textAlign: 2,
        textTransform: 'uppercase'
      }}>cookies & beyond</Text>

<Text style={{
        fontSize: 24,
        fontWeight: 'silk',
        color: '#',
        textAlign: 2,
        textTransform: ''
      }}>sweeeeeeeeeeeeeeeeeet</Text>



      
      
    </View>
  );
}