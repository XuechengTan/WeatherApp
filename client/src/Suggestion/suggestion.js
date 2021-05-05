import React from 'react';
import Style from './suggestion.module.css'
import tempSuggestion from '../Suggestion/Temp'
import activities from '../Suggestion/Activities'

class Suggestion extends React.Component {
    state = {
        data: this.props.data
    }
    
    refresh = (weather) => {
        this.setState({
            data:weather
        })
    }

    render() {
        if(this.state.data == null) {
            return(<div className="Weather"></div>)
        } else {
            return (
                <div className="Weather">
                    
                    <br/>
                    <br/>
                    <br/>
                    <div className={Style.weather}>
                        <div className={Style.weatherText}>
                            <h1>Suggestion for today</h1>
                            <hr></hr>
                            <br/>
                            <br/>
                          
                        </div>
                    </div>
                    <div>
                     <span className={Style.weatherDescription}>·{activities(this.state.data.weather[0].description)}</span>
                     </div>
                     <br></br>                   
                     <br></br>

                  <div className={Style.weatherContent}><span>·{tempSuggestion(this.state.data.main.feels_like)}</span></div><br />
                  <br/>
                    

                </div>
            );
        } 
    }
}

export default Suggestion;