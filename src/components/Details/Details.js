import React from 'react';
import blog_pic from './../../assets/banner1.png';

const Details = (props) => {
    return (
        <div className="card p-3">
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.content}</p>
            </div>
            <img src={blog_pic} className="card-img-top" alt="..."/>
        </div>
    );
}

export default Details;
