import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';

const AqiDataComponent = ({ airData, currentCity }) => {
  if (!airData.aqi) {
    return (
      <div className="errorMsg">
        Can't fetch data for <span className="currentCity">{currentCity}</span>
      </div>
    );
  }

  return (
    <div>
      <div>
        Air quality in <span className="currentCity">{currentCity}</span>
        <br /> is <span className="quality">{airData.quality}</span>
      </div>
      <br />
      <div>
        Today's aqi is: <span className="aqi">{airData.aqi}</span>
      </div>
    </div>
  );
};

export const DataContainer = ({ reload, currentCity, airData }) => {
  return (
    <div id="dataContainer" className="dataContainer">
      <button onClick={reload} className="reloadButton">
        <FontAwesomeIcon icon={faRefresh} size="2x" />
      </button>
      <AqiDataComponent airData={airData} currentCity={currentCity} />
      <a href="https://waqi.info/" className="learnMore">
        Learn more about aqi
        <p className="sr-only">opens in a new tab</p>
      </a>
    </div>
  );
};
