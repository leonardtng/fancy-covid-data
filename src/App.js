import React from 'react';
import './App.css';
import CNALogo from './assets/images/CNALogo.png';
import Ticker from 'react-ticker';
import NewsFeed from './components/NewsFeed';
import CovidData from './components/CovidData';

const App = () => {
  return (
    <div className="App">
      <section className='newsfeed'>
        <img className='cnalogo' src={CNALogo} alt='CNA' />
        <Ticker height={40} offset="run-in" speed={10}>
          {() => <NewsFeed />}
        </Ticker>
      </section>
      <header>
        <h1>Covid-19 Info Board</h1>
        <h3>Hover over the cards to see!</h3>
      </header>
      <section>
        <CovidData />
      </section>
    </div>
  );
}

export default App;
