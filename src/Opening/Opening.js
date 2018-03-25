import React from 'react';
import './opening.css';


export const Opening = ({filmData, toggleOpening, randomNumber}) => {

  return (
    <div className='overview'>
      {filmData.length > 0 && 
        <div className='opening-container'>
          <button className="opening-button" onClick={toggleOpening}>Enter the SwapiBox</button>
          <div className='crawl'>   
            <p>{filmData[randomNumber].openingCrawl}</p>
            <p className='title'>{filmData[randomNumber].title}</p>
            <p className='year'>{filmData[randomNumber].release}</p>
          </div>
        </div>
      } 
    </div>
  )
}