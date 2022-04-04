import React, { useContext } from 'react';
import useReviews from '../../hook/useReviews';
import SingleReview from '../singleReview/SingleReview';


const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    console.log(reviews);
    return (
        <div className='review-container gap-5 mt-4'>
            {
                reviews.map(review => <SingleReview key={review.id} review={review}></SingleReview>)
            }

        </div>
    );
};

export default Reviews;