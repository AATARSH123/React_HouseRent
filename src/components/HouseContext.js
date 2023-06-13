import React ,{useState,useEffect,createContext}from 'react';
import {housesData} from '../data'
export const HouseContext=createContext();
const HouseContextProvider = ({children}) => {
  const[houses,setHouses]=useState(housesData);
  const[country,setCountry]=useState('Location(any)')
  const[countries,setCountries]=useState([]);
  const[property,setProperty]=useState('Property type(any)')
  const[properties,setProperties]=useState([])
  const[price,setPrice]=useState('Price range(any)')
  const[loading,setLoading]=useState(false)
  
useEffect(()=>{
  const allCountries=houses.map((house)=>{
    return house.country;
  })
  console.log(allCountries);
  const uniqueCountries=['Location(any)',...new Set(allCountries)]
  console.log(uniqueCountries)
  setCountries(uniqueCountries)


},[]);

useEffect(()=>{
  const allProperties=houses.map((house)=>{
    return house.type;
  })
 // console.log(allCountries);
  const uniqueProperties=['Location(any)',...new Set(allProperties)]
  //console.log(uniqueCountries)
  setProperties(uniqueProperties)


},[]);

const handleClick=()=>{
  // console.log(country,property,price)
   const isDefault=(str)=>{
    return str.split(' ').includes('(any)')
   }
   //console.log(isDefault(country))
  const minPrice=parseInt(price.split('-')[0]);
  const maxPrice=parseInt(price.split('-')[1]);
  //console.log(maxPrice)
  const newHouse=housesData.filter((house)=>{
    //console.log(house.price)
    const housePrice=parseInt(house.price);
    if(house.country===country && house.type===property && housePrice>=minPrice && housePrice<=maxPrice){
      return house;
    }
    if(isDefault(country) && isDefault(property) && isDefault(price)){
      return house;
    }
  
    if(isDefault(country) && !isDefault(property) && isDefault(price)){
      return house.type===property;}
      if(isDefault(country) && isDefault(property) && !isDefault(price)){

       if(housePrice>=minPrice && housePrice<=maxPrice){
        return house
       }
      }
      if(!isDefault(country) && !isDefault(property) && isDefault(price)){
        return house.country===country && house.type===property;}
  
      if(!isDefault(country) && isDefault(property) && !isDefault(price)){

          if(housePrice>=minPrice && housePrice<=maxPrice){
           return house.country===country
          }
         }

    if(!isDefault(country) && isDefault(property) && !isDefault(price)){

          if(housePrice>=minPrice && housePrice<=maxPrice){
           return house.country===country
          }
         }

    

    
  });
  console.log(newHouse)


}
  return (
     <HouseContext.Provider value={{
      country,setCountry,countries,property,setProperty,properties,price,setPrice,houses,loading,handleClick
     }}>
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
