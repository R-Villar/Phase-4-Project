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
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function Cart({selectedToy, currentUser}) {

    let totalPrice = selectedToy.reduce(function(accumulator, item) {
        return accumulator + item.price
    }, 0)

    const displayToysInCart = selectedToy.map((toy)=> {
        return(
           <div>
            
            
                    <TableCell component="th" scope="row">{toy.name}</TableCell>
                    <TableCell align="right">${toy.price}
                        <Grid item xs={8}>
                            <DeleteIcon onClick = {()=>{console.log("clicked")}}/>
                        </Grid>
                    </TableCell>
                    
                    
                 
           
           </div>
  
        )
    })

    return(
        <div>
             {currentUser ? 
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 200 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Item</TableCell>
                            <TableCell>Price</TableCell>
                          
                            {/* <TableCell >Price</TableCell> */}
                                {/* <Avatar style={{width: 100, height: 100, display: 'inline-block'}}src={toy.image}/> */}
                        </TableRow>
                    </TableHead>
                
                <TableBody>
                    <TableRow>
                        
                        {displayToysInCart}
                        
                       
                        {/* <TableCell align="right">Total Price${totalPrice}</TableCell> */}
                    </TableRow>
                    <TableCell colSpan={2}>Total ${totalPrice}</TableCell>
                </TableBody>
                </Table>
            </TableContainer> : null
        }   
        </div>
    )
}


export default Cart