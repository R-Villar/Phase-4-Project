import ToyCard from "./Toycard"
import { Container } from "@mui/system"

function ToyContainer({toys}){
    

 const displayToys = toys.map(toy=>{
        return(
            <Container fixed key={toy.id}>
                <ToyCard toy={toy} />
            </Container>

        )
    })

 return(
     <div>
        {displayToys}
    </div>
    )
}

export default ToyContainer