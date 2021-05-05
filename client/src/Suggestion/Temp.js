import React from 'react';
import Search from '../search';


export default function tempSuggestion(tem) {

  

if ((tem -273.15)>30){
        return  "  Clothing: T-shirt + short";

        }else if((tem -273.15)>15){
            return  "  Clothing: 1 layer";

        }else if((tem -273.15)>5){
            return "  Clothing: 2 layers";

        }else{
            return  "  Clothing: Down jacket";

        }
    
}