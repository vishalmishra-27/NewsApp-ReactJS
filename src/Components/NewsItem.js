import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, newsurl } = props;

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

export default NewsItem