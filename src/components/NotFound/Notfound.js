import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <div>
            <section className=' container-fluid p-lg-5 '>
                <div className='row justify-content-center  align-items-center'>
                    <div className='col-md-5  '>
                        <p className='mb-2 '>
                            Error 404
                        </p>
                        <h1 className='mb-4 '>
                            Oops! The page you're looking for isn't here.
                        </h1>
                        <p className='mb-5 '>
                            You might have the wrong address, or the page may have moved.
                        </p>
                        <div className='d-flex gap-4'>
                            <p>
                                <Link
                                    to='/'
                                    className='btn - btn-outline-dark'
                                >
                                    Back to homepage
                                </Link>
                            </p>
                            <p>
                                <Link
                                    to='/contact'
                                    className='btn - btn-outline-dark'
                                >
                                    Contact us
                                </Link>
                            </p>
                        </div>
                    </div>

                    <div className='col-md-7'>
                        <img className='img-fluid'
                            src='https://thumbs.dreamstime.com/b/%C3%B0%C2%BF%C3%B0%C2%B5%C3%B1%E2%80%A1%C3%B0%C2%B0%C3%B1%E2%80%9A%C3%B1%C5%93-134036857.jpg'
                            alt=''
                        />
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Notfound;