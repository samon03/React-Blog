import React, { Component } from 'react';

import Details from '../Details/Details';
import Card from '../Card/Card';
import axios from '../../axios';
import './Blog.css';

class Blog extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('/posts.json')
        .then(response => {
            
            const posts = [];
            const arr = Object.values(response.data);

            arr.forEach((val) => {
                posts.push(val);
            })

            console.log(posts);
            this.setState({posts: posts});
        })
        .catch(err => {
            console.log(err);
        })
    }

    render () {
        const posts = this.state.posts.map(post => {
            return <Card key="1" 
            title={post.title} 
            content={post.content}
            image={post.image}
            />
        });

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
                                {posts}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Blog;
