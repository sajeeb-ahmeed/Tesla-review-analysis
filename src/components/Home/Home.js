import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ReviewContext } from '../../App';
import CustomLink from '../CoustomLink/CustomLink';
import HomeReview from '../HomePageReview/HomeReview';

const Home = () => {
    const [review, setReview] = useContext(ReviewContext);
    const newReview = [...review];
    console.log(newReview.slice(0, 3));
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [setReview])
    return (
        <div>
            <div className="row sills pt-lg-5">
                <div className="col-md-7 ">
                    <img src={`https://www.tesla.com/ns_videos/commerce/content/dam/tesla/tesla-shop-marketing-imagery/image-grid/model_y.jpg`} className='img-fluid ' alt="" />
                </div>
                <div className="col-md-4 py-3 ">
                    <h1>Model Y Illuminated Car Sills</h1>
                    <h1 className='text-muted'>Installation Manual</h1>
                    <p>Add a premium touch to your Tesla by accentuating your vehicle’s model name with Model Y Illuminated Door Sills. This elegant addition requires no additional wiring to your vehicle’s electrical system.</p>

                    <p>
                        <CustomLink className='btn btn-outline-dark px-lg-5 px-3' to='/blogs'> Live Demo</CustomLink>
                    </p>
                </div>
                <h1 className='text-center my-5 specing'>Our Happy Clients Says </h1>
                <div className="review-container">

                    {
                        newReview.slice(0, 3).map(singleReview => <HomeReview key={singleReview.id} singleReview={singleReview}></HomeReview>)
                    }
                </div>

                <p className='my-5 text-center'><Link className='btn px-lg-5 px-3 btn-outline-dark' to='/reviews'>See All Reviews</Link></p>
            </div>

        </div>
    );
};

export default Home;