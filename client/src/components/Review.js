import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Review(){
    let { id } = useParams()
    const [review, setReview] = useState([])

    useEffect( () => {
        fetch(`/reviews/${id}`)
          .then( res => res.json() )
          .then( review => {setReview(review)})
        }, [ id ])
    
    return(
        <div>
            {review.title}
            {review.user_review}
            {review.rating}
            {review.location}
            {review.created_at}
          
        </div>
    )

}

export default Review