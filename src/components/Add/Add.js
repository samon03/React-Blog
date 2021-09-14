import React from 'react';

import './Add.css';

const add = () => {
    return (
        <div>
           <div className="container py-4">
               <h3 className="text-center mb-4">Write a Blog ..</h3>
               <div className="row">
                    <div className="col-md-6 mx-auto">
                        <div className="card p-4">
                            <div className="mb-3">
                                <label className="form-label">Title</label>
                                <input type="text" className="form-control" placeholder="Write a title ..." required />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Description</label>
                                <textarea className="form-control" placeholder="Write the descripiion ..." required />
                            </div>

                            <div className="mb-4">
                                <label className="form-label">Description</label>
                                <input className="form-control" type="file" id="formFile"/>
                            </div>

                            <div>
                                <button type="button" class="btn btn-info float-end text-white">Submit</button>
                            </div>

                        </div>
                        
                    </div>
               </div>
           </div>
        </div>
    );
}

export default add;
