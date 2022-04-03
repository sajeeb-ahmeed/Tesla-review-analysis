import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CoustomLink/CustomLink';

const Home = () => {
    return (
        <div>
            <div className="row sills">
                <div className="col-md-7 justify-content-center">
                    <img src={`https://www.tesla.com/ns_videos/commerce/content/dam/tesla/tesla-shop-marketing-imagery/image-grid/model_y.jpg`} className='img-fluid ' alt="" />
                </div>
                <div className="col-md-4 py-3 ">
                    <h1>Model Y Illuminated Car Sills</h1>
                    <h1 className='text-muted'>Installation Manual</h1>
                    <p>Add a premium touch to your Tesla by accentuating your vehicle’s model name with Model Y Illuminated Door Sills. This elegant addition requires no additional wiring to your vehicle’s electrical system.</p>

                    <p>
                        <CustomLink className='btn btn-outline-dark botn' to='/'> Live Demo</CustomLink>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;