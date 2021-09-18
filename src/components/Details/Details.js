import React, { Component } from 'react';
import blog_pic from './../../assets/banner1.png';

class Details extends Component{

   render() {
      return (
        <div className="card p-3">
        <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <p className="card-text">{this.props.content}</p>
        </div>
        <img src={blog_pic} className="card-img-top" alt="..."/>
        </div>
      )
   }
}

export default Details;
