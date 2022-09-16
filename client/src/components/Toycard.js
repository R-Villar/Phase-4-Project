import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardHeader from "@mui/material/CardHeader";
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


// const labels = {
//   0.5: 'Useless',
//   1: 'Useless+',
//   1.5: 'Poor',
//   2: 'Poor+',
//   2.5: 'Ok',
//   3: 'Ok+',
//   3.5: 'Good',
//   4: 'Good+',
//   4.5: 'Excellent',
//   5: 'Excellent+',
// };


function ToyCard({toy, setSelectedToy, newToyInCart,currentUser}) {
	const value = 3.5;

	// adds items from cart
	function handleAddToCart() {
		newToyInCart(toy)
	}

	function selectedToy() {
	setSelectedToy(toy)
	}

	return (
		<Box
			sx={{
				display: "grid",
				flexDirection: "row",
				flexWrap: "wrap",
				"& > :not(style)": {
					p: 1,
					m: 2,
					width: 300,
					height: 700,
				},
			}}
		>
			<Paper elevation={3} sx={{maxWidth: 400}}>
				<CardHeader title={toy.name} />
				<CardContent>
					<CardMedia
						component='img'
						height='300'
						image={toy.image}
						alt='toy image'
					/>
					${toy.price}
					<Typography align='center' color='textPrimary'>
						<Link to={`/toys/${toy.id}`} onClick={selectedToy}>
							{toy.name}
						</Link>
					</Typography>
					{currentUser?<ShoppingCartOutlinedIcon 
						onClick={handleAddToCart}
					></ShoppingCartOutlinedIcon>:null}
					
					<Rating
						name='text-feedback'
						value={value}
						readOnly
						precision={0.5}
						emptyIcon={
							<StarIcon
								style={{opacity: 0.55}}
								fontSize='inherit'
							/>
						}
					/>
				</CardContent>
			</Paper>
		</Box>
	);
}

export default ToyCard;