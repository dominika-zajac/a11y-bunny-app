import { AirData } from './models';

const errorData = {
  quality: null,
  aqi: null,
};

export const fetchAirData = async (currentCity: string): Promise<AirData> => {
  if (!currentCity) {
    return errorData;
  }
  return fetch(
    `https://api.waqi.info/feed/${currentCity.toLowerCase()}/?token=62bdd9760e412e62ec5dd05d1d471b7a07c0e363`
  )
    .then((response) => response.json())
    .then((responseJson) => {
      let aqi = responseJson.data.aqi;
      if (aqi === '-') {
        aqi = null;
      }
      return {
        aqi,
        quality: mapAQIToQuality(aqi),
      };
    })
    .catch((error) => {
      console.error(error);
      return errorData;
    });
};

export const mapAQIToQuality = (aqi: number | null): string => {
  if (!aqi) return '-';
  if (aqi < 51) return 'good';
  if (aqi < 101) return 'moderate';
  if (aqi < 151) return 'unhealthy for sensitive groups';
  if (aqi < 201) return 'unhealthy';
  if (aqi < 301) return 'very unhealthy';
  return 'hazardous';
};
