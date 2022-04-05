import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='container'>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header className='font'>Context API </Accordion.Header>
                    <Accordion.Body>
                        <h5>
                            Context provides a way to pass data through the component tree without having to pass props down manually at every level.
                        </h5>

                        <p>
                            In a typical React application, data is passed top-down <code>(parent to child)</code> via props, <br /> but such usage can be cumbersome for certain types of props <code>(e.g. locale preference, UI theme)</code> that are required by many components <br /> within an application. Context provides a way to share values like these between components <br /> without having to explicitly pass a prop through every level of the tree.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header className='font'>What are Semantic Elements? </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            A semantic element clearly describes its meaning to both the browser and the developer. Examples of non-semantic elements:
                            <code> div and span  </code>
                            - Tells nothing about its content. Examples of semantic elements:
                            <code> `"form , table , and article `" </code>
                            Clearly defines its content
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <div className="row mt-5">
                <div className="col-md-5">
                    <img src={`https://benohead.com/wp-content/uploads/2012/12/web-site-structure.png`} className='object-cover img-fluid' alt="" />
                    A semantic element clearly describes its meaning to both the browser and the developer. <br />

                    <p>Examples of non-semantic elements:  and [span] - Tells nothing about its content.</p> <br />

                </div>
                <div className="col-md-7 mt-lg-4">
                    <h3> What are Semantics</h3>
                    <span className='text-muted'>Author : <code>SaJeeb Ahmeed</code></span> <br />
                    <p>
                        In programming, Semantics refers to the meaning of a piece of code — for example "what effect does running that line of JavaScript have?", or "what purpose or role does that HTML element have" (rather than "what does it look like?".)
                    </p>

                    <code><h3>Semantics in JavaScript</h3></code>
                    <p>
                        In JavaScript, consider a function that takes a string parameter, and returns an <code>li</code> element with that string as its textContent. Would you need to look at the code to understand what the function did if it was called build('Peach'), or createLiWithContent('Peach')?
                        Chapters <br />
                        Introduction <br />
                        News items <br />
                        Contact information <br />
                        A web page could normally be split into sections for introduction, content, and contact information.
                    </p>



                </div>
            </div>
            <div className="row my-5">

                <div className="col-md-7 mt-lg-5 pt-lg-5">



                    <h3>The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application.</h3>
                    <span className='text-muted'>Author : <code>SaJeeb Ahmeed</code></span>
                    <code className='text-muted'>
                        <h5>
                            Context provides a way to pass data through the component tree without having to pass props down manually at every level.
                        </h5>
                    </code>

                    <p>
                        In a typical React application, data is passed top-down <code>(parent to child)</code> via props, <br /> but such usage can be cumbersome for certain types of props <code>(e.g. locale preference, UI theme)</code> that are required by many components <br /> within an application. Context provides a way to share values like these between components <br /> without having to explicitly pass a prop through every level of the tree.
                    </p>
                    <p>
                        React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
                    </p>

                </div>
                <div className="col-md-5">
                    <img src={`https://www.carlrippon.com/static/44fbfa9c6a54d61eee9ade55051578c6/f71e8/context-api-eg.png`} className='img-fluid' alt="" />
                </div>
            </div>

        </div>
    );
};

export default Blogs;