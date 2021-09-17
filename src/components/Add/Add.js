import React, { Component } from 'react';
import axios from '../../axios';
import './Add.css';

class Add extends Component {

    key = Math.floor((Math.random() * 10000) + 1);

    state = {
        title: '',
        content: '',
        image: '',
        id: this.key
    }

    submitPostHandler = () => {
        const data  = {
            title: this.state.title,
            content: this.state.content,
            image: this.state.image,
            id: this.state.id
        }

        axios.post('/posts.json', data)
        .then(response => {
            console.log(response);
        }).catch(err => {
            console.log(err);
        })
    }

   render () {
    return (
        <div>
           <div className="container py-3">
               <h3 className="text-center mb-4">Write a Blog ..</h3>
               <div className="row">
                    <div className="col-md-6 mx-auto">
                        <div className="card p-5">
                            <div className="mb-3">
                                <label className="form-label">Title</label>
                                <input type="text" className="form-control" placeholder="Write a title ..." required 
                                  value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Description</label>
                                <textarea className="form-control" placeholder="Write the descripiion ..." required 
                                value={this.state.content} onChange={(event) => this.setState({content: event.target.value})}/>
                            </div>

                            <div className="mb-4">
                                <label className="form-label">Those a Picture</label>
                                <input className="form-control" type="file" id="formFile"
                                 value={this.state.image} onChange={(event) => this.setState({image: event.target.value})} />
                            </div>

                            <div>
                                <button type="button" className="btn btn-info float-end text-white" onClick={this.submitPostHandler}>Submit</button>
                            </div>

                        </div>
                        
                    </div>
               </div>
           </div>
        </div>
    );
   }
}

export default Add;
