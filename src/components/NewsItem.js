import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, publishedAt, author, source } = props
    return (
        <div>
            <div className="card">
                <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
                    <span className="badge rounded-pill bg-danger">
                        {source}
                    </span>
                </div>
                <a href={newsUrl} target='_blank' rel="noreferrer">
                    <img src={!imageUrl ? 'https://images.moneycontrol.com/static-mcnews/2023/08/sensexdown_niftydown-1-770x433.jpg' : imageUrl} className="card-img-top" alt="..." />
                </a>
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-body-secondary">By {!author ? "unkown" : author} on {new Date(publishedAt).toGMTString()}</small></p>
                    <a href={newsUrl} target='_blank' rel="noreferrer" className="btn-sm btn btn-dark">Read more...</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem
