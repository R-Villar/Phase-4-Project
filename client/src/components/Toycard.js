import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import { Link } from 'react-router-dom';


function ToyCard({toy}){
const {id} = toy
    return(
    <Grid container spacing={2}>
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image={toy.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <Link to={`/toys/${id}`}>{toy.name}</Link>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    
    )
}

export default ToyCard