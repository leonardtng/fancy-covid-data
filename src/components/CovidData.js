import React, { useState, useEffect } from 'react';
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
  const [country, setCountry] = useState('singapore')
  const [covidDataLoadState, setShouldFetch] = useGetApi(`https://covid19.mathdro.id/api/countries/${country}`, initialCovidData, true);

  useEffect(() => {
    setShouldFetch(true);
  }, [country, setShouldFetch])

  return (
    <div>
      <div className="dropdown">
        <div className="dropbtn">Country Select</div>
        <div className="dropdown-content">
        <div onClick={() => setCountry('singapore')}>Singapore</div>
        <div onClick={() => setCountry('USA')}>USA</div>
          <div onClick={() => setCountry('thailand')}>Thailand</div>
        </div>
      </div>
      <div className='wrapper'>
        <Card title='Confirmed Cases' data={covidDataLoadState.data.confirmed.value} />
        <Card title='Recovered' data={covidDataLoadState.data.recovered.value} />
        <Card title='Deaths' data={covidDataLoadState.data.deaths.value} />
      </div>
    </div>
  )
}

export default CovidData
