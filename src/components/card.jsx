import React from "react";


const Card = (props) => {
    
  return (
    <div className="card">
      <img src={props.imageUrl} alt="image" />
      <div className="location--info">
        <div>
          <div className="country">
            <p>
              <i className="fa-solid fa-location-dot"></i>{props.location}
            </p>
          </div>
          <a href={props.googleMapsUrl} className="location" target="_blank">
            View on Google Maps
          </a>
        </div>

        <h1>{props.title}</h1>
        <p className="date">{props.startDate} - {props.endDate}</p>
        <p className="location-desc">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
