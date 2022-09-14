import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container'
import Button from '@mui/material/Button';
import Popup from "./Popup";


function ToyPage({addReviews, currentUser}) {

    // console.log(currentUser)

let { id } = useParams()
const [toy, setToy] = useState([])

useEffect( () => {
    fetch(`/toys/${id}`)
      .then( res => res.json() )
      .then( toy => {setToy(toy)})
    }, [ id ])


const [review, setReview] = useState([])

useEffect( () => {
    fetch(`/reviews/${id}`)
        .then( res => res.json() )
         .then( review => {setReview(review)})
    }, [ id ])

//handles popup for review
const [open, setOpen] = React.useState(false);

const handleClickOpen = () => {
    setOpen(true);
};
const handleClose = () => {
    setOpen(false);
};

return (
    <div>

     <Grid container spacing={2}>
        <Card sx={{ maxWidth: 400 }}>
        <CardActionArea>
            <CardMedia
            component="img"
            height="400"
            image={toy.image}
            alt="toy image"
            />
            <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                    {toy.name}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    {toy.description}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    ${toy.price}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    {toy.brand}
                </Typography>
                <Stack spacing={1}>
                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                <div>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Write a Review
                </Button>
                </div>
             
                <Popup
                open = {open}
                handleClose = {handleClose}
                addReviews = {addReviews}
                currentUser = {currentUser}
                toy= {toy}
                />  
                </Stack>
            </CardContent>
        </CardActionArea>
        </Card>
        </Grid>
        <div>
        <React.Fragment>
        <CssBaseline />
        <Container fixed>
            <h1>Reviews</h1>
            <h2>{review.title} </h2>
           {review.user_review}
            <h3>{review.rating}</h3>
            <h4>{review.location}</h4>
            <h4>{review.created_at}</h4>
        </Container>
        </React.Fragment>
        </div>
    </div>
    )
 }

export default ToyPage;