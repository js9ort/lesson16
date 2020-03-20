import React from 'react';

function OneNews(props){
    return (
        <React.Fragment>
          <h3>{props.article.title}</h3>
          <h6>{props.article.publishedAt}</h6>
          <img class="img-thumbnail" src={props.article.urlToImage} />
          <p>{props.article.description}</p>
          <button onClick={ (e) => window.history.back() }  class="btn btn-secondary">Go Back</button>
          <a class="btn btn-info mx-4" target="_blank" href={props.article.url}>Read Full Article</a>
        </React.Fragment>
    ); 
}

export default OneNews;