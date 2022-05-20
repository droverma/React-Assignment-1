
import React from 'react';
import defaultImg from '../../assets/image/download.jpeg';
const Card = (props) => {
    const readLater = (e, data) => {
        const newCard = {
            description: data.description,
            url: data.url
        }
        props.readLater(newCard);
    };
    return <div class="col-lg-4 d-flex align-items-stretch" key={props.index}>
        <div className="card mb-3" >
            {props.urlToImage ? <img className="card-img-top" src={props.urlToImage} style={{ width: '100%', height: '200px' }} alt="news" /> : <img className="card-img-top" src={defaultImg} alt="news" />
            }
            <div className="card-body">
                <h4 className="card-title">{(props.title.substring(0, 50))}
                </h4>
                <p className="card-text">{props.author}</p>
                <button type="submit" className="btn btn-primary" onClick={(e) => readLater(e, props)}>
                    Read Later
                </button>
            </div>
        </div>
    </div>
}
export default Card;