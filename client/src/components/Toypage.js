import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from "@mui/material/CardHeader";
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import * as React from 'react';
import IconButton from "@mui/material/IconButton";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Popup from "./Popup";
import Box from "@mui/material/Box";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
// import Review from "./Review";
import EditReview from "./EditReview";



function ToyPage({currentUser, selectedToy, addReviews, handleDeleteClick, deleteReview}) {

	let {id} = useParams();

	const [toy, setToy] = useState({reviews: []});
	const [errors, setErrors] = useState([]);
	const [ formData, setFormData ] = useState({ })

	useEffect(() => {
		fetch(`/toys/${id}`)
			.then((res) => res.json())
			.then((toy) => {
				setToy(toy);
			});

	}, [id, deleteReview,  addReviews]);


	const {reviews} = toy;
	// console.log(selectedToy);
	// console.log(toy);

	 //handle delete

	const displayReviews = reviews.map((review) => {

        function reviewUpdate() {
			console.log(review);
            // return (
            //     <EditReview review={review}/>
            // )
		}
		function handleDelete(){
			    fetch(`/reviews/${review.id}`, {
			      method: "DELETE",
			   })
			   
     		//   .then((r) => console.log(r))
         	//   .then((id) => handleDeleteClick(id));
			 .then(res => {
				if(res.ok){
				  deleteReview(id) // passed down from App
				} else {
				  res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
				}
			  })
			}
			  
		  
		return (
			<Grid
				key={review.id}
				container
				rowSpacing={1}
				columnSpacing={{xs: 1, sm: 2, md: 3}}
			>
				<EditReview
					addReviews={addReviews}
					currentUser={currentUser}
					review={review}
					handleDelete={handleDelete}
				/>

			</Grid>
		);
	});

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
				<Card sx={{maxWidth: 400}}>
					<CardActionArea>
						<CardMedia
							component='img'
							height='400'
							image={toy.image}
							alt='toy image'
						/>
						<CardContent>
							<Typography
								gutterBottom
								variant='h4'
								component='div'
							>
								{toy.name}
							</Typography>
							<Typography
								gutterBottom
								variant='h6'
								component='div'
							>
								{toy.description}
							</Typography>
							<Typography
								gutterBottom
								variant='h6'
								component='div'
							>
								${toy.price}
							</Typography>
							<Typography
								gutterBottom
								variant='h6'
								component='div'
							>
								{toy.brand}
							</Typography>
							<Stack spacing={1}>
								<Rating
									name='half-rating'
									defaultValue={2.5}
									precision={0.5}
								/>
								<div>
									<Button
										variant='outlined'
										onClick={handleClickOpen}
									>
										Write a Review
									</Button>
								</div>

								<Popup
									open={open}
									handleClose={handleClose}
									addReviews={addReviews}
									currentUser={currentUser}
								/>
							</Stack>
						</CardContent>
					</CardActionArea>
				</Card>
			</Grid>
			<Box sx={{width: "100%"}}>
				<div>{displayReviews}</div>
			</Box>
		</div>
	);
}

export default ToyPage;