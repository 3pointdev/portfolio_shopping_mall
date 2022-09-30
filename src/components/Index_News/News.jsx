import axios from 'axios';
import { useEffect, useState } from 'react';
import './news.css';

export default function News() {
  // 뉴스들 데이터를 담아놓는 곳
  const [articles, setArticles] = useState([{}]);
  const [category, setCategory] = useState('');
  const newsKEY = `https://newsapi.org/v2/top-headlines?category=${category}&country=kr&apiKey=da9203d6cee64e43a84b194fb284c5e4`;
  let newsArticle = [];

  //useEffect: 처음 렌더될 때 뉴스들의 데이터를 axios로 받아옴 
  const fetchData = async() => {
    const response = await axios.get(newsKEY);
    setArticles(response.data.articles);
  };

  useEffect(()=>{
    fetchData();
  },[category])

  // console.log(articles);

  for(let i = 0; i < articles.length; i++){
    newsArticle.push(
      <li key={'news'+i} className='news_list' >
        <a href={articles[i].url} className='news_link'>
          {articles[i].urlToImage && <img src={articles[i].urlToImage} alt={'news'+articles[i].title}/>}
          <div>{articles[i].title}</div>
        </a>
      </li>
    )
  }

  const changeCategoryHandler = (e) => {
    setCategory(e.target.id);
  }

  return (
    <div className='news_container'>
      <h2>News</h2>
        <div className='news_category_list'>
          <button id='health' className={category === 'health' ? 'news_category_btn active' : 'news_category_btn'} onClick={changeCategoryHandler}>Health</button>
          <button id='sports' className={category === 'sports' ? 'news_category_btn active' : 'news_category_btn'} onClick={changeCategoryHandler}>Sports</button>
          <button id='technology' className={category === 'technology' ? 'news_category_btn active' : 'news_category_btn'} onClick={changeCategoryHandler}>Tech</button>
          <button id='business' className={category === 'business' ? 'news_category_btn active' : 'news_category_btn'} onClick={changeCategoryHandler}>Business</button>
          <button className={category === '' ? 'news_category_btn active' : 'news_category_btn'} onClick={changeCategoryHandler}>All</button>
        </div>
      <div className='news_list_container'>
        <ul>
          {newsArticle}
        </ul>
      </div>
    </div>
  );
}