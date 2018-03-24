import React from 'react';
import './opening.css';


export const Opening = ({filmData, toggleOpening}) => {
  if( filmData.length > 0 ) {
    var randomNum = Math.floor(Math.random() * (filmData.length - 1));
      console.log(randomNum)
      console.log(filmData[0])
  }
 
  return (
    <div >
      {randomNum && 
        <div className='opening-container'>
          <button className="opening-button" onClick={toggleOpening}>Enter the SwampiBox</button>
          <div className='opening-crawl'>   
            <p>{filmData[randomNum].openingCrawl}</p>
            <p>{filmData[randomNum].title}</p>
            <p>{filmData[randomNum].release}</p>
          </div>
        </div>
      } 
    </div>
  )
}