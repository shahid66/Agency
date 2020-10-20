import React from 'react';

const Contact = () => {
    return (
        <section className="contact mt-5 pt-5">
        
            <div className="row w-75 offset-md-1">
                <div className='col-md-4'>
                    <h2>Let us Handel Your Project, Professonally</h2>
                    <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</p>
                </div>
                <div className="col-md-8 ">
                    <form action="">
                        <div className="form-group">
                            <input type="text" className="form-control"  placeholder="Email Address *"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Subject *"/>
                        </div>
                        <div className="form-group">
                            <textarea name="" className="form-control t" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                        </div>
                        <div className="form-group ">
                            <button type="button" className="btn btn-dark text-white"> Send </button>
                        </div>
                    </form>
                </div>
            </div>

<p className='text-center py-5'><small>CopyRight Orange lab 2020</small></p>        
    </section>
    );
};

export default Contact;