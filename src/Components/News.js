import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'

const News = (props) => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(null)
    document.title = "NewsMonkey - Get Your daily NEWS dose";

    const updateNews = async () => {
        props.getProgress(25);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9a75f4d8313e43a69ece4fdddbc8c429&pageSize=21`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        props.getProgress(100);
    }

    useEffect(() => {
        updateNews();
        // eslint-disable-next-line
    }, [])

    const handlepreviousclick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9a75f4d8313e43a69ece4fdddbc8c429&page=${page - 1}&pageSize=21`;
        setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles);
        setPage(page - 1);
        setLoading(false);
    }

    const handlenextclick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9a75f4d8313e43a69ece4fdddbc8c429&page=${page + 1}&pageSize=21`;
        setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles);
        setPage(page + 1);
        setLoading(false);
    }
    return (
        <div className='newscontent'>
            <h2>TOP HEADLINES {props.headlineTitle}</h2>
            {loading && <Spinner />}
            <div className="newscards">
                {!loading && articles.map((element) => {
                    return <div className='newscarditem'><NewsItem title={element.title} description={element.description ? element.description.slice(0, 150) : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://static.vecteezy.com/system/resources/previews/012/799/858/original/breaking-news-logo-free-vector.jpg"} newsurl={element.url} /></div>
                })}
            </div>
            <div className="buttons">
                <div className="previousbutton"><button disabled={page <= 1} onClick={handlepreviousclick}> &larr; Previous </button></div>
                <div className="nextbutton"><button disabled={page + 1 > Math.ceil(totalResults / 21)} onClick={handlenextclick}> Next &rarr; </button></div>
            </div>

        </div>
    )
}

export default News