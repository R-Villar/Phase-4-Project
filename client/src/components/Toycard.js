import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardHeader from "@mui/material/CardHeader";
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Grid from "@mui/material/Grid";
import ToyPage from './Toypage';
import Alert from '@mui/material/Alert';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';



const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};


function ToyCard({toy, setSelectedToy, setCartItems, newToyInCart}) {
	const value = 3.5;
	const {id} = toy;
	//  console.log(toy)
	
	const [show, setShow] = useState(false)


	// removes items from cart
	function handleAddToCart() {
		newToyInCart(toy)
		//console.log(toy)
	}
	

	function selectedToy() {
	setSelectedToy(toy)
	}


	return (
		
		<Grid container justifyContent='center' style={{minHeight: "10vh"}}>
			<Grid item xs={12} sm={4} md={4}>
				<Card elevation={3} sx={{maxWidth: 400}}>
					<CardHeader title={toy.name} />
					<CardContent>
						<CardMedia
							component='img'
							height='300'
							image={toy.image}
							alt='toy image'
						/>

						<Typography align='center' color='textPrimary'>
							<Link to={`/toys/${toy.id}`}onClick={selectedToy}>{toy.name}</Link>
						</Typography>
						<ShoppingCartOutlinedIcon 
							onClick={handleAddToCart}
						></ShoppingCartOutlinedIcon>
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
				</Card>
			</Grid>
		</Grid>

	);
}

export default ToyCard;