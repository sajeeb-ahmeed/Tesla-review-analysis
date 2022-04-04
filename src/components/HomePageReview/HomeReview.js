import React from 'react';
import { Card } from 'react-bootstrap';
import { BsStarHalf, BsStarFill } from 'react-icons/bs';

const HomeReview = ({ singleReview }) => {
    const { name, reviewperson, ratings, subtittle, imageURL } = singleReview;
    return (
        <div className=' container'>
            <div className=" text-center">

                <Card style={{ width: '20rem' }}>
                    <Card.Body>
                        <Card.Img className='object-cover' variant="top" src={imageURL} height={'260px'} />
                        <Card.Title className='my-3'>{name}</Card.Title>
                        <Card.Subtitle className="mb-3 text-muted">{subtittle}</Card.Subtitle>
                        <Card.Text>
                            {reviewperson.slice(0, 150) + '...'}
                        </Card.Text>
                        <Card.Link to='/'>{ratings !== 5 ?
                            <p className=''>
                                <BsStarFill className='me-2 textstart'></BsStarFill>

                                <BsStarFill className='me-2 textstart'></BsStarFill>
                                <BsStarFill className='me-2 textstart'></BsStarFill>
                                <BsStarFill className='me-2 textstart'></BsStarFill>
                                <BsStarHalf className='textstart'></BsStarHalf>
                            </p>
                            :
                            <p>
                                <BsStarFill className='me-2 textstart'></BsStarFill>

                                <BsStarFill className='me-2 textstart'></BsStarFill>
                                <BsStarFill className='me-2 textstart'></BsStarFill>
                                <BsStarFill className='me-2 textstart'></BsStarFill>
                                <BsStarFill className=' textstart'></BsStarFill>
                            </p>
                        } </Card.Link>

                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default HomeReview;