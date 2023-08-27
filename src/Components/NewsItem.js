import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, newsurl } = this.props;

        let gotoarticle = () => {
            window.open(newsurl, "_blank");
        }

        return (
            <div id='article' onClick={gotoarticle}>
                <div className="card">
                    <img src={imageUrl} alt="" />
                    <div className="container">
                        <h4 id='title'><b>{title}</b></h4>
                        <p id='desc'>{description}...</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem