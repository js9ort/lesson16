import React from 'react';

function NewsListItem(props){
    return (
      <li>
        <a href='#' onClick={ (e) => {
  
            e.preventDefault();
            props.setCurrentNews(props.article);
            
            window.history.pushState(null, '', props.article.title);
          
        } }>{props.article.title}</a>
      </li>    
    );  
}

export default NewsListItem;