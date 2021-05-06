import React from 'react';
import Style from './news.module.css'
//Once put in the city name to be searched, the entire url link of news page is settled down
//We can embeded the external webpage into our waether app then

class News extends React.Component {
   
    state = {
        // news' helper URL
        newsPre: "https://www.bing.com/news/search?q=",
        newsPost: "&qs=n&form=QBNT&sp=-1&pq=auckland&sc=8-8&sk=&cvid=3D9B3782B9F04469A44BE25ADA3BAB9A",
        newsSrc: null 
    }
    refresh = (newNews) => {
        this.setState({
            // get url
            //Once put in the city name to be searched, the entire url link of news page is settled down
            // we can embeded the external webpage into our weather app then
        newsSrc: this.state.newsPre+ newNews + this.state.newsPost
        }) 
    }
  
     
    render() {

        return (
            <div>
                <iframe title={"abc"} className={Style.newsStyle} src={this.state.newsSrc} >
                </iframe>
            </div>
        );
    }
}

export default News;

