import React from 'react';
import '../styles/CovidData.css';
import useGetApi from '../@utils/useGetApi';
import Card from './Card';

const initialCovidData = {
  confirmed: {
    value: 0,
  },
  recovered: {
    value: 0,
  },
  deaths: {
    value: 0,
  },
}

const CovidData = () => {
  const covidDataLoadState = useGetApi('https://covid19.mathdro.id/api/countries/singapore', initialCovidData, true);

  return (
    <div className='wrapper'>
      <Card title='Confirmed Cases' data ={covidDataLoadState.data.confirmed.value}/>
      <Card title='Recovered' data ={covidDataLoadState.data.recovered.value}/>
      <Card title='Deaths' data ={covidDataLoadState.data.deaths.value}/>
    </div>
  )
}

export default CovidData
