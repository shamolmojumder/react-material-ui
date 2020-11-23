import React, { useEffect, useState } from 'react';
import './App.css';
import { Button } from '@material-ui/core';
import News from './components/News/News';
function App() {
  const [articles,setArticles]= useState([])
  useEffect(()=>{
    const url='http://newsapi.org/v2/everything?q=bitcoin&from=2020-10-23&sortBy=publishedAt&apiKey=5633f1fdb14c4b39b2ee2c2f24394458';
    fetch(url)
    .then(res=>res.json())
    .then(data=>setArticles(data.articles))
  },[])
 
  return (
    <div >
      <h1> Heading :{articles.length} </h1>
      {
        articles.map(article=> <News article={article}></News> )
      }
    <Button color="primary">Hello World</Button>

    </div>
  );
}

export default App;
