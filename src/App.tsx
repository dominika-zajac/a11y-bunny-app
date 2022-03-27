import React, { useState, useEffect } from 'react';
import { LoadingSpinner } from './commons/LoadingSpinner';
import { BunnyImageComponent } from './dataSection/BunnyImageComponent';
import { DataContainer } from './dataSection/DataContainer';
import { Header } from './header/Header';
import { AirData } from './models';
import { fetchAirData } from './service';
import './style.css';

function App() {
  const queryParams = new URLSearchParams(window.location.search);
  const currentCity = queryParams.get('city') || 'Cracow';
  const [isLoading, setLoading] = useState(true);
  const [airData, setAirData] = useState<AirData>({ quality: null, aqi: null });

  useEffect(() => {
    getCurrentAirData();
  }, []);

  const getCurrentAirData = async () => {
    await fetchAirData(currentCity).then((data) => {
      setLoading(false);
      setAirData(data);
    });
  };

  const reload = () => {
    setLoading(true);
    setTimeout(() => getCurrentAirData(), 100);
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <Header currentCity={currentCity} />
      <main className="mainContainer">
        <a id="mainContent"></a>
        <BunnyImageComponent />
        <DataContainer
          currentCity={currentCity}
          reload={reload}
          airData={airData}
        />
      </main>
    </div>
  );
}

export default App;
