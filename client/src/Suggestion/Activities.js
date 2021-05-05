export default function activitySuggestion(weather) {

    if (weather.includes("clear") ){
            return "  Good for out door activities!";

            }else if(weather.includes("Smoke")||weather.includes("sand")||weather.includes("dust")||weather.includes("ash")){
                return "  Wear mask please!";
    
            }else if(weather.includes("rain")||weather.includes("Rain")||weather.includes("shower")||weather.includes("Shower")||weather.includes("drizzle")||weather.includes("thunderstorm")){
                return  " Shower or rain. Take umbrella in case.";
            }else if(weather.includes("cloud")||weather.includes("Rain")||weather.includes("shower")||weather.includes("Shower")||weather.includes("drizzle")||weather.includes("thunderstorm")){
                    return  " Prepare for the raining day";
            }else {
                return "";
            }
    }