import React from 'react';
import blog_pic from './../../assets/banner2.png';

const Card = () => {
    return (

        <div className="card box mb-3">
            <div className="row gy-4">
                <div className="col-md-4 p-3 appear">
                    <img src={blog_pic} className="img-fluid rounded-start" alt=""/>
                </div>
                <div className="col-md-8 dis">
                    <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting.</p>
                    </div>
                </div>
            </div>
        </div>

        
    );
}

export default Card;
