import React from 'react';
import './opening.css';

export const Opening = ({filmData}) => {
  if( filmData.length > 0) {
    console.log(filmData)
    var randomNum = Math.floor(Math.random() * (filmData.length));
  }
  return (
    <div className='opening-container'>
      {randomNum && 
        <div className='opening-crawl'>   
          <p>{filmData[randomNum].openingCrawl}</p>
          <p>{filmData[randomNum].title}</p>
          <p>{filmData[randomNum].release}</p>
        </div>
      } 
    </div>
  )
}