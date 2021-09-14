import React from 'react';
import blog_pic from './../../assets/banner2.png';

const Card = () => {
    return (

        <div class="card box mb-3">
            <div class="row gy-4">
                <div class="col-md-4 p-3 appear">
                    <img src={blog_pic} class="img-fluid rounded-start" alt=""/>
                </div>
                <div class="col-md-8 dis">
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting.</p>
                    </div>
                </div>
            </div>
        </div>

        
    );
}

export default Card;
