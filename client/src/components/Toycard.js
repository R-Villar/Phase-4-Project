import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardHeader from "@mui/material/CardHeader";
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import Grid from "@mui/material/Grid";



function ToyCard({toy}){
const {id} = toy
    return (
		<Grid
			container
			spacing={3}
			justifyContent='center'
			style={{minHeight: "10vh"}}
			// direction='column'
			// rowSpacing={3}
			// columnSpacing={{xs: 1, sm: 2, md: 3}}
		>
			<Grid item xs={12} sm={4} md={4}>
				<Card elevation={3} sx={{maxWidth: 400}}>
					<CardHeader title={toy.name} />
					<CardContent>
						<CardMedia
							component='img'
							height='300'
							image={toy.image}
							alt='Paella dish'
						/>
						<Typography
							align='center'
							color='textPrimary'
							variant='h4'
						>
							{/* {toy.name} */}
						</Typography>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	);
}

export default ToyCard