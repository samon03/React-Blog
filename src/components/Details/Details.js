import React from 'react';
import blog_pic from './../../assets/banner1.png';

const Details = () => {
    return (
        <div class="card p-3">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <img src={blog_pic} class="card-img-top" alt="..."/>
        </div>
    );
}

export default Details;
