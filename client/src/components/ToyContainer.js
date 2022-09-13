import ToyCard from "./Toycard"
import { Grid} from "@mui/material"

function ToyContainer({toys}){
    
//  console.log(toys)
 const displayToys = toys.map(toy=>{
        return(
            <ToyCard
            key = {toy.id}
            toy = {toy}
            />

        )
    })

 return(
     <div>
        {displayToys}
           {/* <Grid container >
                <Grid item>
                   1
                </Grid>
                <Grid item>
                    2
                </Grid>
                <Grid item>
                    3 
                </Grid>
                <Grid item>
                    4
                </Grid>
              
             </Grid> */}
          
           
         
    </div>
    )
}

export default ToyContainer