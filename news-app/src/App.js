import React from 'react';
import OneNews from './OneNews';
import NewsListItem from './NewsListItem';

function App() {

  const [news, setNews] = React.useState([]);
  const [currentNews, setCurrentNews] = React.useState(null);

  React.useEffect( () => {

    window.addEventListener('popstate', function(){
        setCurrentNews(null);
    });

  }, []);

  React.useEffect(() => {
      (async () =>{
        
        let url = 'http://newsapi.org/v2/top-headlines?country=ua&apiKey=01968c68e88b4f7381116ceb3c9c0025';

        let data = await fetch(url);
            data = await data.json();
            setNews(data.articles);        
      })();
  }, []);


  if(currentNews){

    return (
      <OneNews setCurrentNews={setCurrentNews} article={currentNews} />      
    );

  }else{
    return (
        <React.Fragment>
          <h3>Latest News</h3>
          <ul>
              { news.map(item => <NewsListItem setCurrentNews={setCurrentNews} key={item.url} article={item} /> ) }        
          </ul>
        </React.Fragment>  
    );
  }
}

export default App;
