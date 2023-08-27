import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'

export class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: null
        }
        document.title = "NewsMonkey - Get Your daily NEWS dose";
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9a75f4d8313e43a69ece4fdddbc8c429&pageSize=100`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        });
    }

    handlepreviousclick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9a75f4d8313e43a69ece4fdddbc8c429&page=${this.state.page - 1}&pageSize=21`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            page: this.state.page - 1,
            loading: false
        });
    }

    handlenextclick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9a75f4d8313e43a69ece4fdddbc8c429&page=${this.state.page + 1}&pageSize=21`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            page: this.state.page + 1,
            loading: false
        });
    }

    render() {

        return (
            <div className='newscontent'>
                <h2>TOP HEADLINES {this.props.headlineTitle}</h2>
                {this.state.loading && <Spinner />}
                <div className="newscards">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className='newscarditem'><NewsItem title={element.title} description={element.description ? element.description.slice(0, 150) : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://static.vecteezy.com/system/resources/previews/012/799/858/original/breaking-news-logo-free-vector.jpg"} newsurl={element.url} /></div>
                    })}
                </div>
                <div className="buttons">
                    <div className="previousbutton"><button disabled={this.state.page <= 1} onClick={this.handlepreviousclick}> &larr; Previous </button></div>
                    <div className="nextbutton"><button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 21)} onClick={this.handlenextclick}> Next &rarr; </button></div>
                </div>

            </div>
        )
    }
}

export default News