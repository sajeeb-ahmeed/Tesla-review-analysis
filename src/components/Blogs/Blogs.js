import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='container'>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header className='font'>Context API #1</Accordion.Header>
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
                    <Accordion.Header className='font'>What are Semantic Elements? #2</Accordion.Header>
                    <Accordion.Body>
                        <p>
                            A semantic element clearly describes its meaning to both the browser and the developer. <br />

                            Examples of non-semantic elements:  and [span] - Tells nothing about its content. <br />

                            Examples of semantic elements: <code>
                                {/* <form>, <table>, and < article >  */}
                            </code> - Clearly defines its content. <br />
                            <div >

                                <img src={`https://i.ibb.co/HP6bwFm/Screenshot-15.png`} className='object-cover' alt="" />
                            </div>
                            According to W3C's HTML documentation: "A section is a thematic grouping of content, typically with a heading." <br />



                            Chapters <br />
                            Introduction <br />
                            News items <br />
                            Contact information <br />
                            A web page could normally be split into sections for introduction, content, and contact information.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;