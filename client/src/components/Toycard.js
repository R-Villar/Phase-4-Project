import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardHeader from "@mui/material/CardHeader";
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import CardHeader from "@mui/material/CardHeader";

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


function ToyCard({toy}){

  const value = 3.5;
  const {id} = toy

    return(

    <Grid container
    spacing={3}
    justifyContent='center'
    style={{minHeight: "10vh"}} >
      <Grid item xs={12} sm={4} md={4}>
        <Card elevation={3} sx={{ maxWidth: 400 }}>
         <CardHeader title={toy.name} />
          <CardContent>
            <CardMedia
              component="img"
              height="300"
              image={toy.image}
              alt="toy image"
            />
            
              <Typography align='center' color='textPrimary' >
                <Link to={`/toys/${id}`}>{toy.name}</Link>
              </Typography>
              <Rating
                name="text-feedback"
                value={value}
                readOnly
                precision={0.5}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
              />
            </CardContent>
        </Card>
      </Grid>
    </Grid>
    
    )
}

export default ToyCard;