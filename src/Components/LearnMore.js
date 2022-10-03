import React from 'react';
import {Link} from 'react-router-dom';
import Art from './Art';

class LearnMore extends React.Component {
    render() {
        return (
            <section className="p-b" id="learnmore">
                <div className="container">
                    <h1 className="title-h1 pt-5 text-center">Get to know me</h1>
                    <div className="row">
                        <div className="col-sm-4 mt-5">
                            <div className="col-sm-12 border shadow learn-more-block p-0">
                                <div className="text-center h-200">
                                    <Link to="/blog" className="learn-more-img h-200"><img src={require("../assets/medium.jpg")} className="w-100" alt="Learn more about me by reading my blog"/></Link>
                                </div>
                                <p className="description-p p-3 mb-0 bg-purple"><span className="label-h1">Blog</span><br />I occasionally write about technology on my <Link to='/blog'>blog</Link>. Posts are pulled from my Medium profile.</p>
                            </div>
                        </div>
{/* 
                        <div className="modal fade" id="artModal" tabIndex="-1" role="dialog" aria-labelledby="ArtworkModal" aria-hidden="true">
                            <div className="modal-dialog modal-lg bg-purple" role="document">
                                <div className="modal-content">
                                    <div className="modal-header border-0">
                                        <h3 className='text-center w-100'>Art</h3>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                            </button>
                                        
                                    </div>
                                    <div className="modal-body">
                                        <Art />
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        <div className="col-sm-4 mt-5">
                            <div className="col-sm-12  shadow border learn-more-block p-0">
                                <div className="text-center h-200">
                                    <Link to="/art" target="_blank" className="learn-more-img h-200"><img src={require("../assets/festival1.jpg")} className="w-100" alt="Learn more about me by reading my blog"/></Link>
                                </div>
                                <p className="description-p p-3 mb-0 bg-purple"><span className="label-h1">Art</span><br />As a hobby I enjoy practicing painting and <Link to="/art" target="_blank">art</Link> which helps me with observation.</p>
                            </div>
                        </div>

                        <div className="col-sm-4 mt-5">
                            <div className="col-sm-12  shadow border learn-more-block p-0">
                                <div className="text-center h-200">
                                    <a href='https://github.com/kayleoss' target="_blank" className="learn-more-img h-200"><img src={require("../assets/code.png")} className="w-100" alt="Learn more about me by reading my blog"/></a>
                                </div>
                                <p className="description-p p-3 mb-0 bg-purple"><span className="label-h1">Github</span><br />Some of the code for past projects I've worked on can be viewed on my <a href='https://github.com/kayleoss' target="_blank">github</a>.</p>
                            </div>
                        </div>
                    </div>
                        
                    
                </div>
            </section>
        )
    }
}

export default LearnMore;
