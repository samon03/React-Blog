import React from 'react';
import blog_pic from './../../assets/banner1.png';

const Details = () => {
    return (
        <div className="card p-3">
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <img src={blog_pic} className="card-img-top" alt="..."/>
        </div>
    );
}

export default Details;
