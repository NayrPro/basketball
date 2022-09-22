import React, {useState, useEffect} from 'react'

export default function Articles() {
    /* Stocks the title, the image and the content of each
        article inside JSX elements */
    const [articles, setArticles] = useState([])
    
    /* Retreive data from an RSS feed and put it on "articles"*/
    useEffect(() => {
        const fetchData = () => {
            
            const newsData = [];
            
            fetch(
                `https://www.espn.com/espn/rss/nba/news`,
            )
            .then(response => response.text())
            .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
            .then(data => {

                const items = data.querySelectorAll("item");
                
                items.forEach((el,i) => {
            
                    const image = el.querySelector("enclosure").getAttribute('url');
                    const link = el.querySelector("link");
                    const title = el.querySelector("title").textContent;
                    const pubDate = el.querySelector("pubDate").textContent;
                    const description = el.querySelector("description").textContent;

                    newsData.push({
                    key: i,
                    image: image,
                    link: link,
                    title: title,
                    pubDate: pubDate,
                    description: description
                    })
                })
                
                setArticles(newsData)
            
            })
        }
        fetchData()
    }, [])

    return (
        <React.Fragment>
            {   /* The component will display either a loading message or the articles depending on the content of "articles" */
                articles.length === 0 ? 

                    <div className="lds-roller">
                        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                        <span>loading</span>
                    </div>

                    :

                    articles.map(article => (
                        <React.Fragment key={article.key}>
                            <div className="article">
                                <div className="article-image"
                                    style={{backgroundImage: `url(${article.image})`}}>
                                </div>
                                <div className="article-description">
                                    <div className="article-heading">
                                        <a href={article.link}>{article.title}</a>
                                        <span>{article.pubDate}</span>
                                    </div>
                                    <hr/>
                                    <div className="article-content">
                                        <p>{article.description} [...]</p>
                                        <a href={article.link}
                                           style={{fontStyle: 'italic',
                                                   fontWeight: 'bold', 
                                                   color: 'white'}}>
                                                    Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    ))}
        </React.Fragment>
    )
}
