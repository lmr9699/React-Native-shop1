import { ImageSourcePropType } from "react-native";

interface Product{
    name: string,
    price: number,
    image: ImageSourcePropType
}

      const products: Product[] = [
    {
      name: "Chocolate Chip Cookie",
      price: 2.900,
      image: require("../assets/images/chocolate-chip.jpeg"),
    },
    {
      name: "Monster Cookie",
      price:  3.900 ,
      image: require("../assets/images/cookie-image.jpeg"),
    },
    {
        name: "Protein Cookie",
        price: 4.500 ,
        image: require("../assets/images/high-protein-cookies.jpeg")
    },
    {
        name: "Sugar Cookie",
        price:  1.500 ,
        image: require("../assets/images/best-sugar-cookies-1.jpg")
    }
  ];


  export { Product, products };
