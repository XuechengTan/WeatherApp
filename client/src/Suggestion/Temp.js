export default function tempSuggestion(tem) {

  

if ((tem -273.15)>30){
        return  "  Clothing advise: T-shirt + short maybe enough";

        }else if((tem -273.15)>15){
            return  "  Clothing advise: 1 layer shirt and pants";

        }else if((tem -273.15)>5){
            return "  Clothing advise: Casual jacket or leather clothing ";

        }else{
            return  "  Clothing advise: Down jacket or other thick clothing";

        }
    
}