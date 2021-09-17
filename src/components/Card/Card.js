import React from 'react';
// import blog_pic from './../../assets/banner2.png';

const Card = (props) => {
    return (

        <div className="card box mb-3">
            <div className="row gy-4">
                <div className="col-md-4 p-3 appear">
                    <img src={props.image} className="img-fluid rounded-start" alt=""/>
                </div>
                <div className="col-md-8 dis">
                    <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.content}</p>
                    </div>
                </div>
            </div>
        </div>

        
    );
}

export default Card;
