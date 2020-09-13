import React, { useState, useEffect, Fragment } from 'react';
import '../styles/NewsFeed.css';
import Parser from 'rss-parser';

const NewsFeedData = () => {

  const [feed, setFeed] = useState([''])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
    let parser = new Parser();
    const parseURL = () => {
      setIsLoading(true);
      parser.parseURL(CORS_PROXY + 'https://www.channelnewsasia.com/rssfeeds/8395744', function (err, feed) {
        if (err) throw err;
        const newFeed = ['']
        feed.items.forEach(function (entry) {
            newFeed.push(entry.title)
        })
        setFeed(newFeed);
        console.log(newFeed[1])
        setIsLoading(false)
      })
    }
    parseURL()
  }, []);


  return isLoading ? (
    <span className='filler'>Loading...</span>
  ) : (
    <Fragment>
      {feed.map((item, index) => {
        return <span key={index} className='feeditem'>{item}</span>
      })}
    </Fragment>
    );
};

export default NewsFeedData;