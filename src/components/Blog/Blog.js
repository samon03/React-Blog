import React from 'react';

import Details from '../Details/Details';
import Card from '../Card/Card';

import './Blog.css';

const Blog = () => {
    return (
        <div>
            <div className="conatainer p-3">
                <div className="row g-4">
                    <div className="col-md-7 mb-4 mx-auto">
                        <Details/>
                    </div>
                    <div className="col-md-5 mx-auto">
                        <h3 className="mb-3">Feed</h3>
                        <div>
                            <Card/>
                            <Card/>
                            <Card/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;
