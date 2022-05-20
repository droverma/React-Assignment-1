
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../card/Card';
const Dashboard = () => {
    const [newsData, setNewsData] = useState([])
    const [readLaterNews, setReadLaterNews] = useState([]);
    useEffect(() => {
        axios.get("https://newsapi.org/v2/top-headlines?country=in&apikey=722b8b3233614f0eb949fb2f810baa69&page=1")
            .then((res) => {
                setNewsData(res.data.articles);
            })
            .catch(err => console.log(err))
    }, []);
    const readLater = (newCard) => {
        axios
            .post('http://localhost:3001/readlater', newCard, {
                headers: { 'Content-Type': 'application/json' },
            })
            .then((response) => {
                if (response.status === 201) {
                    setReadLaterNews([...readLaterNews, response.data]);
                }
            })
            .catch((error) =>
                console.log(error)
            );
    };
    return <React.Fragment>
        <section>
            <div class="container my-2" style={{ backgroundColor: 'whitesmoke' }}>
                <div class="col-md-12 text-center my-3">
                    <h2>Top-Headlines</h2>
                </div>
                <hr />
                <div class="row">
                    {newsData.map
                        ((news, index) => (
                            <Card
                                urlToImage={news.urlToImage}
                                title={news.title}
                                author={news.author}
                                description={news.description}
                                index={index}
                                name={news.name}
                                readLater={readLater}
                            />
                        ))
                    }

                </div>
            </div>
        </section>
    </React.Fragment>
}
export default Dashboard;